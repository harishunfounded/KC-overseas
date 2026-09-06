'use client';

import React from 'react';
import {
  GraduationCap,
  Globe2,
  Award,
  ShieldCheck,
  Building2,
  Users,
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import EnquiryForm from './EnquiryForm';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 pt-8 sm:pt-14 pb-12 sm:pb-20 border-b border-slate-100 overflow-hidden"
    >
      {/* Generous background ambiance */}
      <div className="absolute top-0 right-1/4 -mt-24 w-96 h-96 rounded-full bg-blue-50 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 -mb-24 w-96 h-96 rounded-full bg-orange-50/60 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Main Focus: Copy & Single Lead Capture */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            
            {/* Headline: Under 8 Words */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-kc-heading tracking-tight leading-[1.15]">
              Study Abroad with Complete Confidence
            </h1>

            {/* Value Line: Under 12 Words */}
            <p className="text-base sm:text-lg text-kc-muted leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
              1,200+ global universities. Expert guidance from admission to visa.
            </p>

            {/* Quick 2-Field Lead Capture (Name + Mobile + Single Dominant CTA) */}
            <div className="pt-2 max-w-md mx-auto lg:mx-0">
              <EnquiryForm mode="quick" source="hero_quick" />
            </div>

          </div>

          {/* Supporting Visual / Credibility Focal Card (No Form, No Clutter) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none bg-gradient-to-br from-kc-primary via-blue-700 to-kc-navy text-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-900/15 border border-blue-400/20 overflow-hidden">
              {/* Background ambient ring */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                
                {/* Brand Header */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white shadow-inner">
                    <GraduationCap className="w-6 h-6 text-yellow-300" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base tracking-tight text-white">
                      KC Overseas Education
                    </h3>
                    <p className="text-xs text-blue-200">
                      Serving students across Tamil Nadu
                    </p>
                  </div>
                </div>

                {/* 3 Core Confidence Facts */}
                <div className="space-y-3 pt-2 border-t border-white/15">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3">
                    <Building2 className="w-5 h-5 text-yellow-300 shrink-0" />
                    <div>
                      <span className="text-sm font-bold text-white block">1,200+ Partner Universities</span>
                      <span className="text-[11px] text-blue-200">Across UK, USA, Germany, Canada, Australia & more</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-300 shrink-0" />
                    <div>
                      <span className="text-sm font-bold text-white block">99% Visa Success Track Record</span>
                      <span className="text-[11px] text-blue-200">End-to-end documentation and interview preparation</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3">
                    <Award className="w-5 h-5 text-amber-300 shrink-0" />
                    <div>
                      <span className="text-sm font-bold text-white block">Official Test Prep Partners</span>
                      <span className="text-[11px] text-blue-200">British Council & IDP certified master trainers</span>
                    </div>
                  </div>
                </div>

                {/* Trust Footer */}
                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs text-blue-200">
                  <span>25+ Years of Industry Trust</span>
                  <span className="font-semibold text-white">7,30,000+ Students Placed</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
