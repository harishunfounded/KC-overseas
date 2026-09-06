'use client';

import React from 'react';
import { Sparkles, ShieldCheck, CheckCircle2, Award, Clock } from 'lucide-react';
import EnquiryForm from './EnquiryForm';
import { siteConfig } from '@/config/site';

export default function FullEnquirySection() {
  return (
    <section id="enquiry-section" className="py-14 sm:py-20 bg-kc-sand/30 border-b border-slate-200 relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-orange-100/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Why Book Counselling Now */}
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-kc-primary font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> No Obligation • 100% Free
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-kc-heading tracking-tight leading-tight">
              Ready to Take Your First Step Toward an International Degree?
            </h2>

            <p className="text-xs sm:text-sm text-kc-muted leading-relaxed">
              Fill out the details, and our certified Namakkal study abroad counsellors will review your profile, match your eligibility with 1200+ partner universities, and prepare a personalized roadmap for the <strong>{siteConfig.intakeLabel}</strong>.
            </p>

            {/* Checklist of what you get */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-kc-heading">Comprehensive Profile Evaluation</h4>
                  <p className="text-xs text-kc-muted">Analysis of GPA, work experience, English score & course preferences.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-kc-heading">University & Scholarship Shortlist</h4>
                  <p className="text-xs text-kc-muted">Direct options across UK, USA, Germany, Canada, Australia, and more with fee waivers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-kc-heading">Fast-Track Loan & Visa Guidance</h4>
                  <p className="text-xs text-kc-muted">Pre-approved loan sanction letters up to ₹1.5 Cr and flawless visa file preparation.</p>
                </div>
              </div>
            </div>

            {/* Quick reassurance */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
              <Clock className="w-8 h-8 text-kc-primary shrink-0" />
              <div className="text-xs text-slate-700">
                <strong>Fast Callback Promise:</strong> Our senior counsellor will get in touch with you within 15 minutes during office hours.
              </div>
            </div>

          </div>

          {/* Right Column: Full Interactive Form */}
          <div className="lg:col-span-6">
            <EnquiryForm mode="full" source="bottom_full_section" />
          </div>

        </div>

      </div>
    </section>
  );
}
