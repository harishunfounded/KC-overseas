'use client';

import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Award,
  ShieldCheck,
  Building2,
  Users,
  CheckCircle2,
  Sparkles,
  Globe,
  Calendar,
  MapPin,
} from 'lucide-react';
import dynamic from 'next/dynamic';
import { siteConfig } from '@/config/site';
import EnquiryForm from './EnquiryForm';

const Lanyard = dynamic(() => import('./Lanyard'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[480px] flex flex-col items-center justify-center gap-3">
      <div className="w-10 h-10 rounded-full border-2 border-kc-primary/30 border-t-kc-primary animate-spin" />
      <span className="text-xs text-blue-200 font-medium">Loading Interactive 3D Card...</span>
    </div>
  ),
});

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
      className="relative isolate pt-8 sm:pt-12 pb-10 sm:pb-16 border-b border-slate-900 overflow-hidden text-white bg-slate-950"
    >
      {/* 1. Full-Bleed Background Video & Static Poster Fallback (UNTOUCHED) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-slate-950">
        {/* Static Background Frame */}
        <div
          className="absolute inset-0 bg-slate-950 bg-cover bg-center"
          style={siteConfig.heroVideo.poster ? { backgroundImage: `url(${siteConfig.heroVideo.poster})` } : undefined}
          aria-hidden="true"
        />

        {/* Video Element: Full-bleed, autoPlay, muted, loop, playsInline, single raw 4K source */}
        {!reduceMotion && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={siteConfig.heroVideo.poster || undefined}
            onLoadedData={() => setVideoLoaded(true)}
            onPlaying={() => setVideoLoaded(true)}
            onCanPlay={() => setVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden="true"
          >
            <source src={siteConfig.heroVideo.desktopMp4} type="video/mp4" />
          </video>
        )}
      </div>

      {/* 2. Fluid Widescreen Container - Eliminates Side Gaps */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Headline, Destination Chips & Glass Quick Booking Console */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-4 sm:space-y-5 text-left">
            
            {/* Live Intake & Reputation Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 shadow-lg text-xs animate-hero-1">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold text-white">Admissions Open 2025–2026</span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="text-amber-300 font-medium flex items-center gap-1">
                ★ 25+ Years Legacy in Tamil Nadu
              </span>
            </div>

            {/* Main Headline with Radiant Gradient Accent & Contrast Shadows */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-6xl font-black text-white tracking-tight leading-[1.12] animate-hero-1 drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)]">
              Study Abroad with{' '}
              <span className="bg-gradient-to-r from-white via-sky-100 to-amber-300 bg-clip-text text-transparent">
                Complete Confidence
              </span>
            </h1>

            {/* High-Impact Value Line */}
            <p className="text-base sm:text-lg xl:text-xl text-slate-100 leading-relaxed font-normal max-w-2xl animate-hero-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              Direct partner to <strong className="text-white font-semibold underline decoration-amber-400/60 decoration-2 underline-offset-4">1,200+ prestigious universities</strong> across 10 top global destinations. Free profile evaluation, scholarship guidance & 99% visa success rate.
            </p>

            {/* Quick Destination Pill Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1 animate-hero-2">
              <span className="text-xs font-bold text-amber-300/90 uppercase tracking-wider mr-1">
                Top Hubs:
              </span>
              {[
                { name: 'UK', flag: '🇬🇧' },
                { name: 'USA', flag: '🇺🇸' },
                { name: 'Canada', flag: '🇨🇦' },
                { name: 'Germany', flag: '🇩🇪' },
                { name: 'Australia', flag: '🇦🇺' },
                { name: 'Ireland', flag: '🇮🇪' },
              ].map((dest) => (
                <a
                  key={dest.name}
                  href="#destinations"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/70 hover:bg-kc-primary/80 backdrop-blur-md border border-white/15 hover:border-white/40 text-xs font-semibold text-slate-200 hover:text-white transition-all duration-200 hover:scale-105 shadow-sm"
                >
                  <span>{dest.flag}</span>
                  <span>{dest.name}</span>
                </a>
              ))}
            </div>

            {/* Frosted Glass Quick Consultation Console */}
            <div className="pt-2 max-w-xl animate-hero-3">
              <div className="relative overflow-hidden bg-slate-900/75 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-kc-primary/25 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3 mb-3.5 pb-2.5 border-b border-white/10">
                    <div>
                      <h2 className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
                        <span>Book Free 1-on-1 Counselling</span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                          100% Free
                        </span>
                      </h2>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        Get shortlisted universities & scholarship evaluation in 15 mins
                      </p>
                    </div>
                  </div>
                  <EnquiryForm mode="quick" variant="hero" source="hero_quick" />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Lanyard holding the Bento Grid Badge */}
          <div className="lg:col-span-6 xl:col-span-6 animate-hero-3 relative flex flex-col items-center justify-center min-h-[620px] sm:min-h-[680px] lg:min-h-[740px]">
            {/* Interactive Drag & Swing Hint Pill */}
            <div className="absolute top-2 right-2 sm:right-4 z-20 pointer-events-none">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/20 backdrop-blur-md text-xs font-semibold text-emerald-300 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Drag & Swing Grid Badge ✨</span>
              </div>
            </div>

            {/* The 3D Lanyard Effect containing the Full Bento Grid */}
            <div className="w-full h-[640px] sm:h-[700px] lg:h-[760px] xl:h-[800px]">
              <Lanyard
                position={[0, -0.9, 10]}
                gravity={[0, -40, 0]}
                frontImage="/assets/lanyard/kc-bento-card-front.png"
                backImage="/assets/lanyard/kc-bento-card-back.png"
                imageFit="cover"
                cardScale={3.25}
              />
            </div>

            {/* PREVIOUS 6-CARD BENTO GRID (Preserved for easy 1-click revert if needed):
            <div className="relative mx-auto max-w-lg lg:max-w-none bg-gradient-to-br from-slate-900/90 via-kc-navy/90 to-blue-950/90 text-white rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 ring-1 ring-white/10 backdrop-blur-xl overflow-hidden">
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                ...25+ Years, 1200+ Partner Universities, 730000+ Students Placed, 99% Visa Success, 55+ Offices, British Council & IDP...
              </div>
            </div>
            */}
          </div>

        </div>

        {/* 3. Full-Bleed Grounding Trust Ribbon - Eliminates Gaps & Bridges Columns */}
        <div className="mt-8 lg:mt-12 pt-5 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 animate-hero-3">
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/15 hover:border-white/30 transition-all">
            <div className="w-9 h-9 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-extrabold text-white">Zero Service Charges</div>
              <div className="text-[11px] text-slate-300">100% Free Consultation</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/15 hover:border-white/30 transition-all">
            <div className="w-9 h-9 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-400/30">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-extrabold text-white">₹25Cr+ Scholarships</div>
              <div className="text-[11px] text-slate-300">Merit & University Grants</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/15 hover:border-white/30 transition-all">
            <div className="w-9 h-9 rounded-xl bg-sky-400/20 text-sky-300 flex items-center justify-center shrink-0 border border-sky-400/30">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-extrabold text-white">10 Top Destinations</div>
              <div className="text-[11px] text-slate-300">UK, USA, Canada, Germany...</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/15 hover:border-white/30 transition-all">
            <div className="w-9 h-9 rounded-xl bg-purple-400/20 text-purple-300 flex items-center justify-center shrink-0 border border-purple-400/30">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-extrabold text-white">Express Offer Letters</div>
              <div className="text-[11px] text-slate-300">Within 48 - 72 Hours</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
