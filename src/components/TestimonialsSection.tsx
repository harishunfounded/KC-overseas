'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-md bg-white shrink-0">
        <Image
          src={src}
          alt={`${name} - KC Overseas Namakkal`}
          width={96}
          height={96}
          className="w-full h-full object-cover object-top"
          onError={() => setHasError(true)}
          unoptimized
        />
      </div>
    );
  }

  return (
    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-blue-600 to-kc-primary text-white font-black text-xl flex items-center justify-center shrink-0 border-4 border-white shadow-md">
      {fallback}
    </div>
  );
}

export default function TestimonialsSection() {
  const testimonials = siteConfig.testimonials;
  const videos = siteConfig.studentVideos;

  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Responsive items per page (1 on mobile, 2 on tablet, 3 on desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Split testimonials into screen pages
  const pages: typeof testimonials[] = [];
  for (let i = 0; i < testimonials.length; i += itemsPerPage) {
    pages.push(testimonials.slice(i, i + itemsPerPage));
  }
  const totalPages = Math.max(1, pages.length);

  // Navigation handlers
  const handlePrev = useCallback(() => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  }, [totalPages]);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  }, [totalPages]);

  // Adjust currentPage if itemsPerPage changed and currentPage is out of bounds
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [currentPage, totalPages]);

  // Auto-play timer (advances every 4.5 seconds, pauses when hovered/touched)
  useEffect(() => {
    if (isPaused || totalPages <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, totalPages, handleNext]);

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="testimonials"
      className="py-14 sm:py-20 bg-[#ffe7c9] border-b border-amber-200/60 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading - Exact match to site template */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#101F38] tracking-tight">
            Check what Our Students Say
          </h2>
        </div>

        {/* Top: 2 Video Testimonials Side by Side */}
        {videos && videos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-16 sm:mb-20">
            {videos.map((v) => (
              <div
                key={v.id}
                className="aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-amber-200/50 bg-black"
              >
                <iframe
                  src={v.embedUrl}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        {/* Down: Reviews Moving Automatically (3 reviews per screen on desktop) */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel Viewport */}
          <div className="overflow-hidden pt-12 pb-6 px-1">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {pages.map((pageGroup, pageIdx) => (
                <div
                  key={pageIdx}
                  className={`w-full shrink-0 grid gap-6 sm:gap-7 ${
                    itemsPerPage === 1
                      ? 'grid-cols-1'
                      : itemsPerPage === 2
                      ? 'grid-cols-2'
                      : 'grid-cols-3'
                  }`}
                >
                  {pageGroup.map((t) => (
                    <div key={t.id} className="pt-8">
                      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-sm border border-amber-200/40 relative flex flex-col justify-between h-full min-h-[300px] sm:min-h-[330px]">
                        
                        {/* Overlapping Circular Student Avatar */}
                        <div className="absolute -top-9 sm:-top-11 left-6 sm:left-7">
                          <StudentAvatar
                            name={t.name}
                            src={t.studentImageUrl}
                            fallback={t.avatarPlaceholder}
                          />
                        </div>

                        {/* Top Row: Student Name aligned to the right */}
                        <div className="pl-24 sm:pl-28 min-h-[44px] flex items-center justify-end">
                          <h3 className="font-bold text-base sm:text-lg text-[#101F38] text-right tracking-tight">
                            {t.name}
                          </h3>
                        </div>

                        {/* Card Body: Blue Double Quote & Review Message */}
                        <div className="flex-1 flex flex-col justify-start">
                          {/* Official Blue Double Quote Icon */}
                          <div className="text-kc-primary mt-2 mb-3">
                            <svg
                              className="w-8 h-8 fill-kc-primary text-kc-primary"
                              viewBox="0 0 24 24"
                            >
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                          </div>

                          {/* Student Testimonial Text */}
                          <p className="text-slate-800 text-sm sm:text-[15px] leading-relaxed line-clamp-6">
                            {t.quote}
                          </p>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation Controls: Left & Right Arrows + Dots */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-white border border-amber-200/80 shadow-sm text-slate-700 hover:text-kc-primary hover:border-kc-primary active:scale-95 transition-all"
              aria-label="Previous reviews screen"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Indicator Dots */}
            <div className="flex items-center gap-2">
              {pages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentPage === idx
                      ? 'w-7 bg-kc-primary'
                      : 'w-2.5 bg-amber-300/80 hover:bg-amber-400'
                  }`}
                  aria-label={`Go to reviews screen ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-white border border-amber-200/80 shadow-sm text-slate-700 hover:text-kc-primary hover:border-kc-primary active:scale-95 transition-all"
              aria-label="Next reviews screen"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
