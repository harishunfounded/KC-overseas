'use client';

import React from 'react';
import { Star, GraduationCap } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-kc-heading tracking-tight">
            Student Experiences
          </h2>
          <p className="text-xs sm:text-sm text-kc-muted mt-1.5">
            What students have to say about their journey with KC Overseas.
          </p>
        </div>

        {/* 3 Shortened Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {siteConfig.testimonials.slice(0, 3).map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div className="w-9 h-9 rounded-full bg-blue-100 text-kc-primary font-bold text-xs flex items-center justify-center shrink-0">
                  {t.avatarPlaceholder}
                </div>
                <div className="overflow-hidden">
                  <h3 className="font-extrabold text-xs text-kc-heading truncate">
                    {t.name}
                  </h3>
                  <p className="text-[11px] text-kc-muted truncate">
                    {t.degree}, {t.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
