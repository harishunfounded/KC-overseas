'use client';

import React from 'react';
import { CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import EnquiryForm from './EnquiryForm';
import { siteConfig } from '@/config/site';

export default function FullEnquirySection() {
  return (
    <section id="enquiry-section" className="py-14 sm:py-20 bg-slate-50/60 border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Trust & Expectation */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-kc-heading tracking-tight leading-tight">
              Begin Your Overseas Education Journey
            </h2>

            <p className="text-xs sm:text-sm text-kc-muted leading-relaxed">
              Speak with experienced counsellors for personalized university shortlisting, test preparation planning, and visa guidance for the <strong>{siteConfig.intakeLabel}</strong>.
            </p>

            {/* Factual Trust Highlights */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-kc-heading">Profile Evaluation & University Matching</h3>
                  <p className="text-xs text-kc-muted">Objective course recommendations from 1,200+ global partner institutions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-kc-heading">Scholarship & Loan Guidance</h3>
                  <p className="text-xs text-kc-muted">Guidance on university fee waivers and pre-approved education loan options.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-kc-heading">End-to-End Visa Filing Support</h3>
                  <p className="text-xs text-kc-muted">Proven 99% visa success track record with thorough file auditing.</p>
                </div>
              </div>
            </div>

            {/* Quick reassurance */}
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
              <Clock className="w-5 h-5 text-kc-primary shrink-0" />
              <div className="text-xs text-slate-600">
                <strong>Prompt Support:</strong> A dedicated counsellor will contact you within working hours.
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
