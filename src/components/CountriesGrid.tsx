'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig, CountryDestination } from '@/config/site';

interface CountriesGridProps {
  onSelectCountry?: (countryName: string) => void;
}

export default function CountriesGrid({ onSelectCountry }: CountriesGridProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const media = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReduceMotion(media.matches);
      const listener = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSelectCountry = (country: CountryDestination) => {
    if (onSelectCountry) {
      onSelectCountry(country.name);
    }
    const formElement = document.getElementById('enquiry-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="destinations"
      ref={sectionRef}
      className="relative isolate py-12 sm:py-16 overflow-hidden bg-slate-50 border-b border-slate-200"
    >
      {/* Background Video Layer & Legibility Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Static Background Frame for Zero Layout Shift & Reduced Motion Fallback */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-slate-100"
          style={
            siteConfig.destinationsVideo?.poster
              ? { backgroundImage: `url(${siteConfig.destinationsVideo.poster})` }
              : undefined
          }
          aria-hidden="true"
        />

        {/* Lazy-Loaded Video: Mounted only once scrolled into view (IntersectionObserver) */}
        {isVisible && !reduceMotion && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={siteConfig.destinationsVideo?.poster}
            onLoadedData={() => setVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden="true"
          >
            <source src={siteConfig.destinationsVideo.rawMp4} type="video/mp4" />
          </video>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-kc-heading tracking-tight">
            Target Study Destinations
          </h2>
          <p className="text-xs sm:text-sm text-kc-muted mt-1.5">
            Direct institutional representation across 10 premier education hubs.
          </p>
        </div>

        {/* Minimal 10 Countries: Horizontal scroll-snap carousel on mobile, 5-col grid on desktop */}
        <div className="flex sm:grid sm:grid-cols-3 md:grid-cols-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none no-scrollbar gap-3 sm:gap-4 pb-3 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          {siteConfig.destinations.map((country) => (
            <button
              key={country.id}
              onClick={() => handleSelectCountry(country)}
              className="min-w-[170px] sm:min-w-0 snap-start shrink-0 sm:shrink bg-white/90 hover:bg-white backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 hover:border-kc-primary shadow-elevation-low card-elevation-interactive text-left group flex flex-col justify-between transition-all"
            >
              <div>
                <span
                  className="text-2xl sm:text-3xl block mb-2 select-none inline-block transition-transform duration-200 group-hover:scale-125 group-hover:rotate-6 origin-bottom-left"
                  role="img"
                  aria-label={country.name}
                >
                  {country.flag}
                </span>
                <h3 className="font-extrabold text-xs sm:text-sm text-kc-heading group-hover:text-kc-primary transition-colors">
                  {country.name}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-slate-500 mt-1 leading-snug line-clamp-2">
                  {country.oneLiner}
                </p>
              </div>

              <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-bold text-kc-primary">
                <span>Explore</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          ))}
        </div>

        {/* Mobile scroll hint */}
        <p className="sm:hidden text-center text-[11px] text-slate-400 mt-2 flex items-center justify-center gap-1">
          <span>← Swipe to explore destinations →</span>
        </p>

      </div>
    </section>
  );
}
