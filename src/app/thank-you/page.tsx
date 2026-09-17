'use client';

import React, { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  CheckCircle2,
  Phone,
  MapPin,
  Clock,
  ArrowLeft,
  Calendar,
  GraduationCap,
  ShieldCheck,
  FileCheck2,
  Sparkles,
  Award,
} from 'lucide-react';
import StickyHeader from '@/components/StickyHeader';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { siteConfig } from '@/config/site';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const rawName = searchParams.get('name') || '';
  const rawPhone = searchParams.get('phone') || '';
  const rawCountry = searchParams.get('country') || '';

  const studentName = rawName.trim() ? rawName.trim() : 'Future Global Scholar';
  const studentPhone = rawPhone.trim() ? rawPhone.trim() : null;
  const targetCountry = rawCountry.trim() && rawCountry !== 'General Enquiry' ? rawCountry.trim() : null;

  useEffect(() => {
    // Scroll to top upon landing
    window.scrollTo(0, 0);

    // Meta Pixel Conversion Tracking (Lead)
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }

    // Google Ads Conversion Tracking (Optional fallback if not triggered in-form)
    if (
      typeof window !== 'undefined' &&
      (window as any).gtag &&
      siteConfig.tracking.formConversionLabel &&
      siteConfig.tracking.googleAdsId !== 'AW-CONVERSION-ID-PLACEHOLDER'
    ) {
      (window as any).gtag('event', 'conversion', {
        send_to: `${siteConfig.tracking.googleAdsId}/${siteConfig.tracking.formConversionLabel}`,
      });
    }
  }, []);

  const whatsappMessage = encodeURIComponent(
    `Hello KC Overseas Education, I am ${
      rawName || 'a student'
    }. I just submitted my study abroad counselling request on your website and would like to speak with a senior counsellor.`
  );

  return (
    <div className="py-10 sm:py-16 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Success Confirmation Box */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-elevation-high p-6 sm:p-10 text-center relative overflow-hidden">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-blue-600 to-amber-400" />

          {/* Animated Success Badge */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-emerald-50 border-4 border-emerald-100 flex items-center justify-center text-emerald-500 mb-6 shadow-kc-sm">
            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 animate-scale-in" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Counselling Session Confirmed • Priority Dispatch</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-kc-heading tracking-tight">
            Thank You, {studentName}!
          </h1>

          <p className="text-sm sm:text-base text-kc-muted mt-2 max-w-xl mx-auto leading-relaxed">
            Your study abroad counselling request has been registered with{' '}
            <strong className="text-slate-800 font-bold">KC Overseas Education Namakkal</strong>.
          </p>

          {/* Immediate Action Notice */}
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-blue-50/80 border border-blue-200/70 text-left max-w-2xl mx-auto shadow-sm">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-kc-primary text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-extrabold text-kc-heading">
                  What Happens Next?
                </p>
                <p className="text-slate-600 mt-1 leading-relaxed">
                  Our certified senior overseas advisor will call you{' '}
                  {studentPhone ? (
                    <span className="font-bold text-kc-primary">({studentPhone}) </span>
                  ) : (
                    ''
                  )}
                  within <span className="font-bold text-slate-800">15 minutes</span> to conduct your initial academic evaluation and answer your admission queries.
                  {targetCountry && (
                    <span className="block mt-1 text-slate-700">
                      🎯 Target Destination: <strong className="text-kc-primary">{targetCountry}</strong>
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Direct Instant Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-lg mx-auto">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-kc-whatsapp text-white font-black text-sm shadow-md hover:bg-kc-whatsapp-hover transition-all duration-200 cta-tactile"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
              <span>Connect on WhatsApp Now</span>
            </a>

            <a
              href={`tel:${siteConfig.contact.phone1Clean}`}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-kc-primary text-white font-black text-sm shadow-md hover:bg-kc-primary-hover transition-all duration-200 cta-tactile"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>Call Us: +91-8056600507</span>
            </a>
          </div>

        </div>

        {/* 3-Step Next Process Roadmap */}
        <div className="mt-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="text-center max-w-md mx-auto mb-6">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-kc-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Your 3-Step Action Plan
            </span>
            <h2 className="text-lg sm:text-xl font-black text-kc-heading mt-2">
              How We Guide You to Your Dream University
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-4.5 rounded-2xl bg-slate-50 border border-slate-200/70 relative">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center mb-3">
                01
              </div>
              <h3 className="font-extrabold text-sm text-kc-heading flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4 text-blue-600" />
                Profile Evaluation
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Analysis of your GPA, backlogs, test scores, and budget for 100% genuine eligibility check.
              </p>
            </div>

            <div className="p-4.5 rounded-2xl bg-slate-50 border border-slate-200/70 relative">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-white font-black text-xs flex items-center justify-center mb-3">
                02
              </div>
              <h3 className="font-extrabold text-sm text-kc-heading flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500" />
                University Matching
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Curated shortlisting across 1,200+ prestigious partner institutions with scholarship assessment.
              </p>
            </div>

            <div className="p-4.5 rounded-2xl bg-slate-50 border border-slate-200/70 relative">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-black text-xs flex items-center justify-center mb-3">
                03
              </div>
              <h3 className="font-extrabold text-sm text-kc-heading flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Admission & Visa
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Rapid offer letters, complete SOP review, education loan sanctions & 99% visa filing success.
              </p>
            </div>
          </div>
        </div>

        {/* Namakkal Branch Contact & Office Details */}
        <div className="mt-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-kc-primary uppercase tracking-wider">
                Visit Us In Person
              </span>
              <h3 className="text-lg font-black text-kc-heading mt-0.5">
                KC Overseas Education — Namakkal Branch Office
              </h3>
            </div>
            <a
              href={siteConfig.contact.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-kc-primary bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors border border-blue-200"
            >
              <MapPin className="w-3.5 h-3.5 text-kc-primary" />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 text-xs text-slate-600">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 font-semibold block">Office Address:</strong>
                <p className="mt-0.5 leading-relaxed">{siteConfig.contact.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 font-semibold block">Counselling Timings:</strong>
                <p className="mt-0.5 leading-relaxed">{siteConfig.contact.workingHours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Homepage Button */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-kc-primary transition-colors py-2 px-4 rounded-full border border-slate-200 hover:border-kc-primary bg-white shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 text-kc-body">
      <StickyHeader />
      <Suspense
        fallback={
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-kc-primary" />
          </div>
        }
      >
        <ThankYouContent />
      </Suspense>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
