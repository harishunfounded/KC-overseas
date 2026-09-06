'use client';

import React from 'react';
import {
  CheckCircle2,
  Search,
  BookOpen,
  FileText,
  Landmark,
  PlaneTakeoff,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

const stepIcons = [
  CheckCircle2,
  Search,
  BookOpen,
  FileText,
  Landmark,
  PlaneTakeoff,
];

export default function WhyChooseUs() {
  return (
    <section id="process" className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-kc-heading tracking-tight">
            The KC Guidance Process
          </h2>
          <p className="text-xs sm:text-sm text-kc-muted mt-1.5">
            Structured, transparent support from your first counselling session to visa approval.
          </p>
        </div>

        {/* 6 Steps: 3-5 Word Labels Only, No Paragraphs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {siteConfig.whyChooseUs.map((item, idx) => {
            const IconComponent = stepIcons[idx % stepIcons.length];
            return (
              <div
                key={item.title}
                className="bg-slate-50/70 rounded-2xl p-4 border border-slate-200/80 hover:border-kc-primary hover:bg-white hover:shadow-sm transition-all text-center flex flex-col items-center justify-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-kc-primary flex items-center justify-center mb-2.5 group-hover:bg-kc-primary group-hover:text-white transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase mb-1">
                  Step 0{idx + 1}
                </span>
                <h3 className="font-extrabold text-xs text-kc-heading group-hover:text-kc-primary transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
