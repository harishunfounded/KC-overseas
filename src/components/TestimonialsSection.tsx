'use client';

import React from 'react';
import { Star, Quote, MapPin, GraduationCap, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider">
            <CheckCircle className="w-3.5 h-3.5" /> Student Success Stories
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-kc-heading tracking-tight mt-2.5">
            Hear from Students Who Made It Abroad
          </h2>
          <p className="text-xs sm:text-sm text-kc-muted mt-2">
            Real experiences from students across Tamil Nadu who secured top university admits, scholarships, and visas through KC Overseas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {siteConfig.testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-kc-surface rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>

                {/* Score or Scholarship badge */}
                {t.scoreOrAward && (
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-100 text-kc-primary font-bold text-[10px] mb-3">
                    {t.scoreOrAward}
                  </div>
                )}

                {/* Quote Body */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Student Metadata */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-200/80">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-kc-primary to-blue-500 text-white font-black text-xs flex items-center justify-center shadow-sm shrink-0">
                  {t.avatarPlaceholder}
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-extrabold text-sm text-kc-heading truncate">
                    {t.name}
                  </h4>
                  <p className="text-[11px] font-semibold text-kc-primary flex items-center gap-1 truncate">
                    <GraduationCap className="w-3 h-3 shrink-0" />
                    <span>{t.degree}</span>
                  </p>
                  <p className="text-[10px] text-kc-muted truncate">
                    {t.university} ({t.country})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note for editing */}
        <div className="text-center mt-8 text-xs text-slate-500">
          <p>
            ⭐ Average student satisfaction score: <strong>4.9 / 5.0</strong> based on 10,000+ verified Google reviews across India.
          </p>
        </div>

      </div>
    </section>
  );
}
