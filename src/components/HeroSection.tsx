'use client';

import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Award,
  ShieldCheck,
  Building2,
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import EnquiryForm from './EnquiryForm';

export default function HeroSection() {
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

  return (
    <section
      id="hero"
      className="relative isolate pt-8 sm:pt-14 pb-12 sm:pb-20 border-b border-slate-900 overflow-hidden text-white bg-slate-950"
    >
      {/* 1. Full-Bleed Background Video & Static Poster Fallback */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-slate-950">
        {/* Static Poster Frame (Instant first visual, zero layout shift) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${siteConfig.heroVideo.poster})` }}
          aria-hidden="true"
        />

        {/* Video Element: Lazy-loaded metadata, muted, loop, autoplay */}
        {!reduceMotion && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={siteConfig.heroVideo.poster}
            onLoadedData={() => setVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            } ${siteConfig.heroVideo.enableMobileVideo ? 'block' : 'hidden md:block'}`}
            aria-hidden="true"
          >
            {siteConfig.heroVideo.enableMobileVideo && (
              <source
                src={siteConfig.heroVideo.mobileMp4}
                type="video/mp4"
                media="(max-width: 767px)"
              />
            )}
            <source src={siteConfig.heroVideo.desktopWebm} type="video/webm" />
            <source src={siteConfig.heroVideo.desktopMp4} type="video/mp4" />
          </video>
        )}

        {/* Dark Gradient Overlay for Maximum Text Contrast & Legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-kc-navy/70 to-slate-950/85 md:bg-gradient-to-r md:from-slate-950/85 md:via-kc-navy/65 md:to-slate-950/75"
          aria-hidden="true"
        />
        {/* Subtle dot mesh for depth */}
        <div
          className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Main Focus: Copy & Quick Lead Capture */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            
            {/* Headline: Under 8 Words */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] animate-hero-1 drop-shadow-md">
              Study Abroad with Complete Confidence
            </h1>

            {/* Value Line: Under 12 Words */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0 animate-hero-2">
              1,200+ global universities. Expert guidance from admission to visa.
            </p>

            {/* Quick 2-Field Lead Capture Card */}
            <div className="pt-2 max-w-md mx-auto lg:mx-0 animate-hero-3 text-slate-800">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-elevation-high border border-white/40 ring-1 ring-black/5">
                <EnquiryForm mode="quick" source="hero_quick" />
              </div>
            </div>

          </div>

          {/* Supporting Visual / Credibility Focal Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none bg-gradient-to-br from-kc-primary/95 via-blue-700/95 to-kc-navy/95 text-white rounded-3xl p-6 sm:p-8 shadow-elevation-high border border-white/25 ring-1 ring-white/15 card-elevation-interactive overflow-hidden backdrop-blur-md">
              {/* Background ambient ring */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/15 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                
                {/* Brand Header */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white shadow-inner">
                    <GraduationCap className="w-6 h-6 text-yellow-300" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base tracking-tight text-white">
                      KC Overseas Education
                    </h3>
                    <p className="text-xs text-blue-200">
                      Serving students across Tamil Nadu
                    </p>
                  </div>
                </div>

                {/* 3 Core Confidence Facts with soft row hover highlights */}
                <div className="space-y-3 pt-2 border-t border-white/15">
                  <div className="flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-xl p-3 transition-all duration-200 cursor-default group/fact">
                    <Building2 className="w-5 h-5 text-yellow-300 shrink-0 group-hover/fact:scale-110 transition-transform" />
                    <div>
                      <span className="text-sm font-bold text-white block">1,200+ Partner Universities</span>
                      <span className="text-[11px] text-blue-200">Across UK, USA, Germany, Canada, Australia & more</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-xl p-3 transition-all duration-200 cursor-default group/fact">
                    <ShieldCheck className="w-5 h-5 text-emerald-300 shrink-0 group-hover/fact:scale-110 transition-transform" />
                    <div>
                      <span className="text-sm font-bold text-white block">99% Visa Success Track Record</span>
                      <span className="text-[11px] text-blue-200">End-to-end documentation and interview preparation</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-xl p-3 transition-all duration-200 cursor-default group/fact">
                    <Award className="w-5 h-5 text-amber-300 shrink-0 group-hover/fact:scale-110 transition-transform" />
                    <div>
                      <span className="text-sm font-bold text-white block">Official Test Prep Partners</span>
                      <span className="text-[11px] text-blue-200">British Council & IDP certified master trainers</span>
                    </div>
                  </div>
                </div>

                {/* Trust Footer */}
                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs text-blue-200">
                  <span>25+ Years of Industry Trust</span>
                  <span className="font-semibold text-white">7,30,000+ Students Placed</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
