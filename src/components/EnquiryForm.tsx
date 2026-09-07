'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldAlert, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface EnquiryFormProps {
  id?: string;
  mode?: 'full' | 'quick';
  source?: string;
  defaultCountry?: string;
  defaultService?: string;
  onSuccessCallback?: () => void;
  className?: string;
}

export default function EnquiryForm({
  id = 'enquiry-form',
  mode = 'full',
  source = 'landing_page',
  defaultCountry = '',
  defaultService = '',
  onSuccessCallback,
  className = '',
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredCountry: defaultCountry,
    preferredService: defaultService,
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your name.';
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phone = 'Enter valid 10-digit mobile number.';
    }

    if (mode === 'full') {
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        errs.email = 'Enter a valid email address.';
      }
      if (!formData.preferredCountry) {
        errs.preferredCountry = 'Select your target country.';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source,
          submittedAt: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        if (onSuccessCallback) onSuccessCallback();

        // Trigger Google Ads conversion tracking event
        if (typeof window !== 'undefined' && (window as any).gtag && siteConfig.tracking.formConversionLabel) {
          (window as any).gtag('event', 'conversion', {
            send_to: `${siteConfig.tracking.googleAdsId}/${siteConfig.tracking.formConversionLabel}`,
            event_callback: () => console.log('Google Ads conversion logged.'),
          });
        }
      } else {
        setApiError(data.message || 'Something went wrong. Please call us directly.');
      }
    } catch (err) {
      setApiError('Unable to submit enquiry. Please call +91-8056600507.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success Confirmation Card
  if (isSubmitted) {
    return (
      <div className={`bg-white rounded-2xl p-6 shadow-elevation-mid border border-emerald-200 text-center ${className}`}>
        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-extrabold text-kc-heading">Thank You, {formData.name || 'Student'}!</h3>
        <p className="text-xs text-kc-muted mt-1.5 leading-relaxed">
          Your enquiry has been received. Our senior education counsellor will connect with you shortly.
        </p>

        {/* Immediate WhatsApp Connect */}
        <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=Hi%2C%20I%20am%20${encodeURIComponent(
              formData.name || 'a student'
            )}.%20I%20just%20submitted%20my%20study%20abroad%20enquiry.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-kc-whatsapp text-white font-bold text-xs shadow-sm hover:bg-kc-whatsapp-hover transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            Connect on WhatsApp
          </a>
        </div>

        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              phone: '',
              email: '',
              preferredCountry: defaultCountry,
              preferredService: defaultService,
              message: '',
            });
          }}
          className="mt-3 text-[11px] font-medium text-kc-primary hover:underline"
        >
          Submit another response
        </button>
      </div>
    );
  }

  // Quick Mini-Form Mode (Ultra-compact, minimal, 2 fields only)
  if (mode === 'quick') {
    return (
      <form
        id={id}
        onSubmit={handleSubmit}
        className={`bg-white rounded-2xl p-4 sm:p-5 shadow-elevation-mid border border-slate-200/80 ${className}`}
        noValidate
      >
        {apiError && (
          <div className="p-2 mb-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200 flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
            <span>{apiError}</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
          <div>
            <input
              type="text"
              placeholder="Your Name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-3.5 py-2.5 text-xs rounded-xl border ${
                errors.name ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
              } focus:outline-none focus:ring-2 focus:ring-kc-primary`}
            />
            {errors.name && <p className="text-[10px] text-red-600 mt-0.5">{errors.name}</p>}
          </div>

          <div>
            <div className="flex rounded-xl shadow-sm">
              <span className="inline-flex items-center px-2.5 rounded-l-xl border border-r-0 border-slate-300 bg-slate-50 text-slate-500 text-xs">
                +91
              </span>
              <input
                type="tel"
                placeholder="Mobile Number *"
                maxLength={10}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-3 py-2.5 text-xs rounded-r-xl border ${
                  errors.phone ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                } focus:outline-none focus:ring-2 focus:ring-kc-primary`}
              />
            </div>
            {errors.phone && <p className="text-[10px] text-red-600 mt-0.5">{errors.phone}</p>}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-kc-accent text-white font-extrabold text-xs sm:text-sm shadow-cta-glow hover:bg-kc-accent-hover cta-tactile disabled:opacity-70"
        >
          {isSubmitting ? (
            <span>Connecting...</span>
          ) : (
            <>
              <span>Book Free Counselling</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-[10px] text-slate-400 text-center mt-2 leading-tight">
          By submitting, you agree to be contacted regarding your enquiry.
        </p>
      </form>
    );
  }

  // Full Comprehensive Form Mode
  return (
    <div className={`bg-white rounded-2xl p-5 sm:p-7 shadow-elevation-mid border border-slate-200 ${className}`}>
      <div className="mb-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-kc-primary bg-kc-primary-light px-2.5 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-kc-primary" /> Free 1-on-1 Expert Session
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-kc-heading mt-2">
          Kickstart Your Study Abroad Journey
        </h3>
        <p className="text-xs sm:text-sm text-kc-muted mt-1">
          Get university shortlisting, IELTS coaching schedule, and scholarship eligibility guidance.
        </p>
      </div>

      {apiError && (
        <div className="p-3 mb-4 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200 flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 shrink-0" />
          <span>{apiError}</span>
        </div>
      )}

      <form id={id} onSubmit={handleSubmit} className="space-y-3.5" noValidate>
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-kc-heading mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Anand Kumar"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
              errors.name ? 'border-red-500 bg-red-50/40' : 'border-slate-300'
            } focus:outline-none focus:ring-2 focus:ring-kc-primary`}
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

        {/* Mobile Number & Email (2-col on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-semibold text-kc-heading mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="flex rounded-lg shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-300 bg-slate-50 text-slate-600 text-sm">
                +91
              </span>
              <input
                type="tel"
                placeholder="98765 43210"
                maxLength={10}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-3.5 py-2.5 text-sm rounded-r-lg border ${
                  errors.phone ? 'border-red-500 bg-red-50/40' : 'border-slate-300'
                } focus:outline-none focus:ring-2 focus:ring-kc-primary`}
              />
            </div>
            {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-kc-heading mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="anand@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                errors.email ? 'border-red-500 bg-red-50/40' : 'border-slate-300'
              } focus:outline-none focus:ring-2 focus:ring-kc-primary`}
            />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Target Country & Preferred Service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-semibold text-kc-heading mb-1">
              Preferred Country <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.preferredCountry}
              onChange={(e) => setFormData({ ...formData, preferredCountry: e.target.value })}
              className={`w-full px-3 py-2.5 text-sm rounded-lg border ${
                errors.preferredCountry ? 'border-red-500' : 'border-slate-300'
              } bg-white focus:outline-none focus:ring-2 focus:ring-kc-primary`}
            >
              <option value="">-- Choose Country --</option>
              {siteConfig.destinations.map((d) => (
                <option key={d.id} value={d.name}>
                  {d.flag} {d.name}
                </option>
              ))}
            </select>
            {errors.preferredCountry && (
              <p className="text-xs text-red-600 mt-1">{errors.preferredCountry}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-kc-heading mb-1">
              Preferred Service / Test Prep
            </label>
            <select
              value={formData.preferredService}
              onChange={(e) => setFormData({ ...formData, preferredService: e.target.value })}
              className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-kc-primary"
            >
              <option value="">General Free Counselling</option>
              {siteConfig.services.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message / Remarks */}
        <div>
          <label className="block text-xs font-semibold text-kc-heading mb-1">
            Additional Questions / Academic Background (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="Tell us about your current qualification, intended course, or test scores..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-kc-primary resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          id="enquiry-submit-button"
          className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-kc-accent text-white font-extrabold text-base shadow-cta-glow hover:bg-kc-accent-hover cta-tactile disabled:opacity-70"
        >
          {isSubmitting ? (
            <span>Processing your booking...</span>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Book Free Counselling Session</span>
            </>
          )}
        </button>

        {/* Privacy Consent */}
        <p className="text-[11px] text-kc-muted text-center pt-1 leading-normal">
          By submitting, you agree to be contacted by KC Overseas regarding your study abroad enquiry. We respect your privacy and never spam.
        </p>
      </form>
    </div>
  );
}
