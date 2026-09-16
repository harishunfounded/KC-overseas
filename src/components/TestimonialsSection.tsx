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
  const count = testimonials.length;

  // Tripled list for seamless infinite horizontal scrolling in both directions
  const extendedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  // Start in the middle set of testimonials
  const [currentIndex, setCurrentIndex] = useState(count);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const touchStartX = useRef<number | null>(null);

  // Responsive visible cards count (1 on mobile, 2 on tablet, 3 on desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Move automatically horizontally every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Seamless jump when reaching buffer boundaries so movement is infinite
  const handleTransitionEnd = () => {
    if (currentIndex >= count * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - count);
    } else if (currentIndex < count) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + count);
    }
  };

  // Re-enable smooth transition after an invisible boundary reset
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const activeDot = ((currentIndex % count) + count) % count;

  return (
    <section
      id="testimonials"
      className="py-14 sm:py-20 bg-[#ffe7c9] border-b border-amber-200/60 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading - Matching official site template */}
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

        {/* Down: Written Reviews Moving Automatically Horizontally */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Horizontal Carousel Viewport */}
          <div className="overflow-hidden pt-12 pb-6 px-1">
            <div
              className={`flex ${
                isTransitioning
                  ? 'transition-transform duration-700 ease-in-out'
                  : ''
              }`}
              style={{
                transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedTestimonials.map((t, idx) => (
                <div
                  key={`${t.id}-${idx}`}
                  className="w-full min-w-full sm:w-1/2 sm:min-w-[50%] lg:w-1/3 lg:min-w-[33.333333%] shrink-0 px-3 pt-8"
                >
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
          </div>

          {/* Navigation Controls: Left & Right Arrows + Active Pagination Dots */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-white border border-amber-200/80 shadow-sm text-slate-700 hover:text-kc-primary hover:border-kc-primary active:scale-95 transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Indicator Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentIndex(count + idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeDot === idx
                      ? 'w-7 bg-kc-primary'
                      : 'w-2.5 bg-amber-300/80 hover:bg-amber-400'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-white border border-amber-200/80 shadow-sm text-slate-700 hover:text-kc-primary hover:border-kc-primary active:scale-95 transition-all"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
