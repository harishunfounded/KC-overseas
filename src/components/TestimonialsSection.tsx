'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = siteConfig.testimonials.slice(0, 3);

  const handlePrev = () => {
    const newIdx = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    setActiveIndex(newIdx);
    const el = document.getElementById(`testimonial-card-${newIdx}`);
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  const handleNext = () => {
    const newIdx = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIdx);
    const el = document.getElementById(`testimonial-card-${newIdx}`);
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

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

        {/* Testimonials: Swipe/Carousel on Mobile, 3-Card Grid on Desktop (Zero Auto-play) */}
        <div className="relative">
          <div className="flex sm:grid sm:grid-cols-3 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none no-scrollbar gap-4 sm:gap-5 -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 sm:pb-0">
            {testimonials.map((t, idx) => (
              <div
                key={t.id}
                id={`testimonial-card-${idx}`}
                className="min-w-[280px] sm:min-w-0 snap-center shrink-0 sm:shrink bg-white rounded-2xl p-5 border border-slate-200/80 shadow-elevation-low card-elevation-interactive flex flex-col justify-between"
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

          {/* Manual Carousel Navigation Controls on Mobile */}
          <div className="flex sm:hidden items-center justify-between mt-4 px-2">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 hover:text-kc-primary active:scale-95 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveIndex(idx);
                    const el = document.getElementById(`testimonial-card-${idx}`);
                    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-5 bg-kc-primary' : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 hover:text-kc-primary active:scale-95 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

