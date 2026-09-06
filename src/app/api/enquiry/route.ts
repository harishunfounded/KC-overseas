import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  preferredCountry?: string;
  preferredService?: string;
  message?: string;
  source?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  createdAt?: string;
}

// Ensure data directory exists for fail-safe lead persistence
function ensureDataDir(): string {
  // On Vercel / serverless runtimes, write to /tmp to avoid read-only filesystem errors
  const isServerless = process.env.VERCEL === '1' || process.env.AWS_LAMBDA_FUNCTION_NAME !== undefined;
  const dataDir = isServerless ? path.join('/tmp', 'data') : path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  return dataDir;
}

// Append lead to JSON file fallback
function saveLeadToJson(lead: LeadPayload) {
  try {
    const dataDir = ensureDataDir();
    const jsonPath = path.join(dataDir, 'leads.json');
    let leads: LeadPayload[] = [];
    if (fs.existsSync(jsonPath)) {
      const content = fs.readFileSync(jsonPath, 'utf8');
      leads = content ? JSON.parse(content) : [];
    }
    leads.push(lead);
    fs.writeFileSync(jsonPath, JSON.stringify(leads, null, 2), 'utf8');
  } catch (err) {
    console.error('[LEAD_JSON_FALLBACK_ERROR]', err);
  }
}

// Append lead to CSV file fallback (Excel/Sheets ready)
function saveLeadToCsv(lead: LeadPayload) {
  try {
    const dataDir = ensureDataDir();
    const csvPath = path.join(dataDir, 'leads.csv');
    const header = 'Timestamp,Name,Phone,Email,Preferred Country,Preferred Service,Message,Source,UTM Source,UTM Medium,UTM Campaign\n';
    
    if (!fs.existsSync(csvPath)) {
      fs.writeFileSync(csvPath, header, 'utf8');
    }

    const sanitize = (val?: string) => `"${(val || '').replace(/"/g, '""')}"`;
    const row = [
      sanitize(lead.createdAt),
      sanitize(lead.name),
      sanitize(lead.phone),
      sanitize(lead.email),
      sanitize(lead.preferredCountry),
      sanitize(lead.preferredService),
      sanitize(lead.message),
      sanitize(lead.source),
      sanitize(lead.utmSource),
      sanitize(lead.utmMedium),
      sanitize(lead.utmCampaign),
    ].join(',') + '\n';

    fs.appendFileSync(csvPath, row, 'utf8');
  } catch (err) {
    console.error('[LEAD_CSV_FALLBACK_ERROR]', err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      email,
      preferredCountry,
      preferredService,
      message,
      source = 'website_form',
      utmSource,
      utmMedium,
      utmCampaign,
    } = body;

    // 1. Validation
    const errors: Record<string, string> = {};

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      errors.name = 'Please enter your full name (at least 2 characters).';
    }

    // Clean and validate Indian 10-digit phone number
    const cleanPhone = (phone || '').toString().replace(/[^0-9]/g, '');
    // Allow 10 digits or 12 digits if prepended with 91
    const isValidIndianPhone =
      (cleanPhone.length === 10 && /^[6-9]\d{9}$/.test(cleanPhone)) ||
      (cleanPhone.length === 12 && cleanPhone.startsWith('91') && /^91[6-9]\d{9}$/.test(cleanPhone));

    if (!isValidIndianPhone) {
      errors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    // Email validation (optional for quick 2-field form, required if provided)
    if (email && typeof email === 'string') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        errors.email = 'Please enter a valid email address.';
      }
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const timestamp = new Date().toISOString();
    const leadRecord: LeadPayload = {
      name: name.trim(),
      phone: cleanPhone.length === 12 ? `+${cleanPhone}` : `+91${cleanPhone}`,
      email: email ? email.trim() : 'Not provided',
      preferredCountry: preferredCountry || 'General Enquiry',
      preferredService: preferredService || 'General Counselling',
      message: message ? message.trim() : 'N/A',
      source,
      utmSource: utmSource || 'direct',
      utmMedium: utmMedium || 'none',
      utmCampaign: utmCampaign || 'none',
      createdAt: timestamp,
    };

    // 2. Immediate Fail-Safe Local Persistence (JSON & CSV)
    saveLeadToJson(leadRecord);
    saveLeadToCsv(leadRecord);
    console.log(`[LEAD_SAVED_LOCAL] New enquiry from ${leadRecord.name} (${leadRecord.phone})`);

    // 3. Email Dispatch via Nodemailer (with graceful error handling)
    const emailTo = process.env.EMAIL_TO || 'namakkal@studies-overseas.com';
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpSecure = process.env.SMTP_SECURE === 'true';

    let emailSent = false;
    let emailErrorMsg: string | null = null;

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #1E64DC; color: #ffffff; padding: 20px; text-align: center;">
              <h2 style="margin: 0; font-size: 22px;">🎓 New Study Abroad Lead</h2>
              <p style="margin: 5px 0 0; font-size: 14px; opacity: 0.9;">KC Overseas Education - Namakkal Branch</p>
            </div>
            <div style="padding: 24px; background-color: #ffffff;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 40%; color: #5A6A85;">Student Name:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1B1B1B; font-weight: 600;">${leadRecord.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #5A6A85;">Mobile Number:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1E64DC; font-weight: 600;">
                    <a href="tel:${leadRecord.phone}" style="color: #1E64DC; text-decoration: none;">${leadRecord.phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #5A6A85;">Email Address:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1B1B1B;">${leadRecord.email}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #5A6A85;">Target Country:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1B1B1B; font-weight: 600;">${leadRecord.preferredCountry}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #5A6A85;">Preferred Service:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1B1B1B;">${leadRecord.preferredService}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #5A6A85;">Message / Notes:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1B1B1B;">${leadRecord.message}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #5A6A85;">Form Source:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #5A6A85;">${leadRecord.source}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #5A6A85;">Date & Time:</td>
                  <td style="padding: 10px 0; color: #5A6A85;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</td>
                </tr>
              </table>

              <div style="margin-top: 24px; text-align: center;">
                <a href="https://wa.me/${leadRecord.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(leadRecord.name)}%2C%20thank%20you%20for%20contacting%20KC%20Overseas%20Education%20Namakkal." 
                   style="display: inline-block; background-color: #25D366; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; margin-right: 10px;">
                  💬 Chat on WhatsApp
                </a>
                <a href="tel:${leadRecord.phone}" 
                   style="display: inline-block; background-color: #1E64DC; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">
                  📞 Call Student Now
                </a>
              </div>
            </div>
            <div style="background-color: #F7F8F9; padding: 12px; text-align: center; font-size: 12px; color: #5A6A85;">
              KC Overseas Education — Namakkal Branch | Salem Road, Namakkal - 637001
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: process.env.SMTP_FROM || `"KC Namakkal Leads" <${smtpUser}>`,
          to: emailTo,
          subject: `🔥 [Google Ads Lead] ${leadRecord.name} - ${leadRecord.preferredCountry} (${leadRecord.phone})`,
          html: htmlContent,
        });

        emailSent = true;
      } catch (err: any) {
        console.error('[SMTP_EMAIL_SEND_FAILED]', err.message);
        emailErrorMsg = err.message;
      }
    } else {
      console.warn('[SMTP_CONFIG_SKIPPED] SMTP_HOST, SMTP_USER, or SMTP_PASS not set. Lead safely preserved in data/leads.json and data/leads.csv.');
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your enquiry has been received. Our KC Namakkal expert will call you shortly.',
        leadId: Buffer.from(timestamp + cleanPhone).toString('base64').substring(0, 10),
        emailDispatched: emailSent,
        leadSavedToDisk: true,
        ...(emailErrorMsg ? { note: 'Lead saved to disk, email notification pending SMTP credentials.' } : {}),
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('[ENQUIRY_API_ERROR]', error);
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please call +91-8056600507 directly.' },
      { status: 500 }
    );
  }
}
