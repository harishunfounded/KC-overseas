'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Quote,
  Video,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

function StudentAvatar({
  name,
  src,
  fallback,
}: {
  name: string;
  src?: string;
  fallback: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (src && !hasError) {
    return (
      <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-blue-100 bg-slate-100 shadow-sm">
        <Image
          src={src}
          alt={`${name} - KC Overseas Namakkal Student Review`}
          width={48}
          height={48}
          className="w-full h-full object-cover object-top"
          onError={() => setHasError(true)}
          unoptimized
        />
      </div>
    );
  }

  return (
    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-kc-primary text-white font-black text-sm flex items-center justify-center shrink-0 ring-2 ring-blue-100 shadow-sm">
      {fallback}
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState<'reviews' | 'videos'>('reviews');
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const testimonials = siteConfig.testimonials;
  const displayedDesktopTestimonials = showAll ? testimonials : testimonials.slice(0, 6);
  const videos = siteConfig.studentVideos;

  const handlePrev = () => {
    const newIdx = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    setActiveIndex(newIdx);
    const el = document.getElementById(`testimonial-mobile-card-${newIdx}`);
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  const handleNext = () => {
    const newIdx = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIdx);
    const el = document.getElementById(`testimonial-mobile-card-${newIdx}`);
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/60 relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-blue-50 border border-blue-200/70 text-kc-primary mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-kc-primary" />
            <span>Student Experiences • 100% Genuine Namakkal Reviews</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-kc-heading tracking-tight">
            Check What Our Students Say
          </h2>

          <p className="text-xs sm:text-sm text-kc-muted mt-2 leading-relaxed">
            Real feedback and success stories from students and parents guided by our KC Overseas Namakkal counsellors.
          </p>

          {/* Social Proof Trust Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-4 pt-4 border-t border-slate-200/60 text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-extrabold text-slate-900">4.9/5</span>
              <span className="text-slate-500">(Google Reviews)</span>
            </div>

            <div className="hidden sm:inline-block text-slate-300">•</div>

            <div className="flex items-center gap-1.5 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>1,000+ Students Mentored in Namakkal</span>
            </div>

            <div className="hidden sm:inline-block text-slate-300">•</div>

            <div className="flex items-center gap-1.5 text-slate-700">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>99% Visa Success Rate</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs (Student Reviews vs Video Stories) */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1 bg-white rounded-xl border border-slate-200 shadow-xs">
            <button
              onClick={() => setActiveTab('reviews')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'reviews'
                  ? 'bg-kc-primary text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Student Reviews ({testimonials.length})</span>
            </button>

            {videos && videos.length > 0 && (
              <button
                onClick={() => setActiveTab('videos')}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'videos'
                    ? 'bg-kc-primary text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Video className="w-4 h-4" />
                <span>Video Stories ({videos.length})</span>
                <span className="px-1.5 py-0.5 text-[10px] font-extrabold bg-amber-100 text-amber-800 rounded">
                  Watch
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Tab 1: Written Reviews */}
        {activeTab === 'reviews' && (
          <div>
            {/* Desktop Grid Layout */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {displayedDesktopTestimonials.map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-elevation-low hover:shadow-elevation-mid hover:border-blue-200/80 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Rating & Quote Icon */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                        </div>
                        <span className="text-[11px] font-bold text-slate-500">5.0</span>
                      </div>
                      <Quote className="w-5 h-5 text-blue-100 group-hover:text-blue-200 transition-colors shrink-0" />
                    </div>

                    {/* Review Quote */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-5">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  {/* Student Info Footer */}
                  <div className="flex items-center gap-3 pt-3.5 border-t border-slate-100">
                    <StudentAvatar
                      name={t.name}
                      src={t.studentImageUrl}
                      fallback={t.avatarPlaceholder}
                    />
                    <div className="overflow-hidden min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-black text-xs sm:text-sm text-kc-heading truncate">
                          {t.name}
                        </h3>
                        <span title="Verified Review" className="inline-flex">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        </span>
                      </div>

                      <p className="text-[11px] text-kc-primary font-semibold truncate mt-0.5">
                        {t.university || t.degree}
                      </p>

                      <p className="text-[10px] text-slate-400 truncate">
                        {t.country || 'KC Overseas Namakkal'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Show More / Show Less Toggle */}
            {testimonials.length > 6 && (
              <div className="hidden sm:flex justify-center mt-8">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-2.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-kc-heading text-xs sm:text-sm font-bold shadow-xs hover:border-slate-400 transition-all"
                >
                  {showAll
                    ? 'Show Less'
                    : `View All ${testimonials.length} Student Reviews`}
                </button>
              </div>
            )}

            {/* Mobile Carousel Layout (Effortless Swipe with Next/Prev) */}
            <div className="sm:hidden relative">
              <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 -mx-4 px-4 pb-3">
                {testimonials.map((t, idx) => (
                  <div
                    key={t.id}
                    id={`testimonial-mobile-card-${idx}`}
                    className="w-[85vw] max-w-[320px] snap-center shrink-0 bg-white rounded-2xl p-5 border border-slate-200 shadow-elevation-low flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1">
                          <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                            ))}
                          </div>
                          <span className="text-[11px] font-bold text-slate-500">5.0</span>
                        </div>
                        <Quote className="w-4 h-4 text-blue-100" />
                      </div>

                      <p className="text-xs text-slate-700 leading-relaxed italic mb-4 line-clamp-6">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                      <StudentAvatar
                        name={t.name}
                        src={t.studentImageUrl}
                        fallback={t.avatarPlaceholder}
                      />
                      <div className="overflow-hidden min-w-0 flex-1">
                        <div className="flex items-center gap-1">
                          <h3 className="font-black text-xs text-kc-heading truncate">
                            {t.name}
                          </h3>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        </div>
                        <p className="text-[11px] text-kc-primary font-semibold truncate">
                          {t.university || t.degree}
                        </p>
                        <p className="text-[10px] text-slate-400 truncate">
                          {t.country || 'KC Overseas Namakkal'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Carousel Controls */}
              <div className="flex items-center justify-between mt-4 px-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-white border border-slate-200 shadow-xs text-slate-600 hover:text-kc-primary active:scale-95 transition-all"
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
                        const el = document.getElementById(`testimonial-mobile-card-${idx}`);
                        el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeIndex === idx ? 'w-5 bg-kc-primary' : 'w-1.5 bg-slate-300'
                      }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-white border border-slate-200 shadow-xs text-slate-600 hover:text-kc-primary active:scale-95 transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Video Testimonials */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {videos?.map((v) => (
              <div
                key={v.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-elevation-low flex flex-col"
              >
                <div className="relative w-full aspect-video bg-slate-900">
                  <iframe
                    src={v.embedUrl}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 sm:p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-extrabold text-xs sm:text-sm text-kc-heading">
                      {v.title}
                    </h3>
                    <p className="text-[11px] text-kc-muted mt-0.5">
                      KC Overseas Namakkal Branch Student Story
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Conversion Prompt with Orange CTA */}
        <div className="mt-10 sm:mt-14 bg-gradient-to-r from-blue-50/80 via-white to-orange-50/60 rounded-2xl p-6 sm:p-8 border border-blue-100 shadow-xs text-center max-w-3xl mx-auto">
          <h3 className="text-base sm:text-lg font-black text-kc-heading">
            Want to be our next study abroad success story?
          </h3>
          <p className="text-xs sm:text-sm text-kc-muted mt-1.5 max-w-xl mx-auto">
            Talk directly to our Namakkal branch experts for personalized university shortlisting, application support, and 100% visa assistance.
          </p>
          <div className="mt-5 flex justify-center">
            <a
              href="#enquiry-section"
              className="min-h-[44px] px-6 sm:px-8 py-2.5 rounded-full bg-kc-accent text-white font-extrabold text-xs sm:text-sm shadow-cta-glow hover:bg-kc-accent-hover cta-tactile flex items-center gap-2"
            >
              <span>Book Free Counselling</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
