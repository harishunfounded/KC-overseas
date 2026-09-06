'use client';

import React from 'react';
import Image from 'next/image';
import {
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Phone,
  MessageCircle,
  ShieldCheck,
  Award,
  Globe,
  Star,
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import EnquiryForm from './EnquiryForm';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-slate-50 via-white to-kc-sand/30 pt-2 sm:pt-6 pb-6 sm:pb-12 border-b border-slate-200 overflow-hidden"
    >
      {/* Subtle decorative background blur on large screens */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-kc-ice/60 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-orange-100/60 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            1. MOBILE VIEWPORT (Optimized for <640px Usable Fold - Strict CRO Path)
            Visible strictly on screens < lg without pushing the primary action down
           ========================================================================= */}
        <div className="lg:hidden flex flex-col items-center text-center">
          
          {/* Micro Branch Pill */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-semibold text-kc-primary mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-kc-primary animate-pulse" />
            <span>Namakkal’s No.1 Overseas Education Consultant</span>
          </div>

          {/* Short, Punchy Headline + 1-line Subheadline (Max ~15 words total) */}
          <h1 className="text-xl sm:text-2xl font-black text-kc-heading tracking-tight leading-snug max-w-sm">
            Study Abroad from <span className="text-kc-primary underline decoration-kc-accent decoration-2 underline-offset-4">Namakkal</span> with KC
          </h1>

          <p className="text-[12px] sm:text-xs text-kc-muted mt-1 leading-snug max-w-xs">
            1200+ Global Universities • Up to 100% Scholarships • 99% Visa Success
          </p>

          {/* Trust Bullets (Free Profile Evaluation / University Selection / Study Abroad Loan) */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 my-2 text-[11px] font-semibold text-slate-700">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              Free Evaluation
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              University Selection
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              Study Loan Guidance
            </span>
          </div>

          {/* Compact Quick Enquiry Mini-Form (Inline lead capture right above the fold) */}
          <div className="w-full max-w-md mt-1">
            <EnquiryForm mode="quick" source="hero_mobile_quick" />
          </div>

          {/* Direct Anchor to Full Details / Full Form */}
          <div className="flex items-center justify-center gap-4 mt-2.5 text-[11px] font-semibold text-kc-primary">
            <a href="#destinations" className="hover:underline">
              🌍 Explore 10 Countries
            </a>
            <span className="text-slate-300">•</span>
            <a href="#services" className="hover:underline">
              📚 IELTS & Test Prep
            </a>
            <span className="text-slate-300">•</span>
            <a href="#branch" className="hover:underline">
              📍 Visit Office
            </a>
          </div>

        </div>


        {/* =========================================================================
            2. DESKTOP VIEWPORT (2-Column Rich Layout >= lg)
           ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Value Proposition, Trust Signals & Callout */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-kc-primary-light border border-blue-200 text-xs font-bold text-kc-primary">
              <Sparkles className="w-4 h-4 text-kc-primary" />
              <span>Official KC Overseas Education — Namakkal Branch</span>
            </div>

            {/* Main H1 */}
            <h1 className="text-3xl xl:text-4xl font-extrabold text-kc-heading tracking-tight leading-[1.2]">
              Turn Your Dream of{' '}
              <span className="text-kc-primary">Studying Abroad</span> Into Reality
            </h1>

            {/* Subtitle & Value Proposition */}
            <p className="text-base text-kc-muted leading-relaxed max-w-xl">
              Connect with Namakkal’s most trusted overseas education consultants. Get unbiased university shortlisting across 47+ countries, certified test prep, low-interest education loans, and visa filing with a <strong>99% approval track record</strong>.
            </p>

            {/* Trust Bullets from KC live page */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-kc-primary transition-all">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-kc-primary flex items-center justify-center mb-2">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-kc-heading">Free Profile Evaluation</h4>
                <p className="text-[11px] text-kc-muted mt-0.5">Eligibility check for 1200+ universities</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-kc-primary transition-all">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-kc-heading">University Selection</h4>
                <p className="text-[11px] text-kc-muted mt-0.5">Shortlist best courses & scholarships</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-kc-primary transition-all">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-kc-amber flex items-center justify-center mb-2">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-kc-heading">Study Loan & Visa</h4>
                <p className="text-[11px] text-kc-muted mt-0.5">Quick bank sanction & 99% visa rate</p>
              </div>
            </div>

            {/* Quick Action Buttons & Social Proof */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="#enquiry"
                className="px-6 py-3 rounded-xl bg-kc-accent text-white font-extrabold text-sm shadow-cta-glow hover:bg-kc-accent-hover active:scale-95 transition-all flex items-center gap-2"
              >
                <span>Book Free Counselling</span>
                <span className="bg-white/20 px-2 py-0.5 rounded text-xs">No Fee</span>
              </a>

              <a
                href={siteConfig.contact.whatsappChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-kc-whatsapp text-white font-bold text-sm shadow-whatsapp-glow hover:bg-kc-whatsapp-hover active:scale-95 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Rating Strip */}
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-600">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-slate-800">4.9 / 5 Rating</span>
              <span className="text-slate-300">|</span>
              <span>7,30,000+ Students Placed Globally</span>
            </div>

          </div>

          {/* Right Column: Full Desktop Enquiry Form */}
          <div className="lg:col-span-5" id="enquiry">
            <EnquiryForm mode="full" source="hero_desktop_sidebar" />
          </div>

        </div>

      </div>
    </section>
  );
}
