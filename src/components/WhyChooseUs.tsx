'use client';

import React from 'react';
import {
  CheckCircle2,
  Search,
  BookOpen,
  FileText,
  Landmark,
  PlaneTakeoff,
  Award,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

const featureIcons = [
  CheckCircle2,
  Search,
  BookOpen,
  FileText,
  Landmark,
  PlaneTakeoff,
];

export default function WhyChooseUs() {
  return (
    <section id="why-kc" className="py-12 sm:py-16 bg-kc-sand/40 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-kc-primary font-bold text-xs uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" /> Namakkal’s Preferred Education Guide
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-kc-heading tracking-tight mt-2.5">
            Why Choose KC Overseas for Your Study Abroad Journey?
          </h2>
          <p className="text-xs sm:text-sm text-kc-muted mt-2">
            With 25+ years of pioneering expertise and 55+ offices across India, we ensure a seamless transition from your initial counselling to landing on your dream campus.
          </p>
        </div>

        {/* 6 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {siteConfig.whyChooseUs.map((item, idx) => {
            const IconComponent = featureIcons[idx % featureIcons.length];
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-kc-primary transition-all group"
              >
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-kc-primary flex items-center justify-center group-hover:bg-kc-primary group-hover:text-white transition-colors shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Step 0{idx + 1}
                    </span>
                    <h3 className="text-base font-extrabold text-kc-heading group-hover:text-kc-primary transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-kc-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Trust Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm sm:text-base text-kc-heading">
                Authorized Representative of 1200+ Global Universities
              </h4>
              <p className="text-xs text-kc-muted">
                Direct university applications mean expedited offer letters, scholarship waivers, and zero middleman delays.
              </p>
            </div>
          </div>
          <a
            href="#enquiry"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-kc-primary text-white text-xs sm:text-sm font-bold shadow-sm hover:bg-kc-primary-hover transition-all"
          >
            Check Your Eligibility Free
          </a>
        </div>

      </div>
    </section>
  );
}
