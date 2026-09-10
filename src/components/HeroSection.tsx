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
import CardBentoContent from './CardBentoContent';

const Lanyard = dynamic(() => import('./Lanyard'), {
  ssr: false,
  loading: () => null,
});

export default function HeroSection() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [threeReady, setThreeReady] = useState(false);
  const [countUpDone, setCountUpDone] = useState(false);

  useEffect(() => {
    // Let the CountUp numbers animate smoothly for 2.2s on page load before seamless hand-off to 3D
    const timer = setTimeout(() => {
      setCountUpDone(true);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const is3DReady = threeReady && countUpDone;

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
      className="relative isolate pt-2 sm:pt-4 pb-8 sm:pb-12 border-b border-slate-900 overflow-hidden text-white bg-slate-950"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 xl:gap-10 items-start">
          
          {/* Top of Left Column on Desktop / First on Mobile: Headline & Destination Chips */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-3 sm:space-y-4 text-left relative z-20 order-1">
            
            {/* Live Intake & Reputation Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 shadow-lg text-[11px] sm:text-xs animate-hero-1">
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
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-6xl font-black text-white tracking-tight leading-[1.14] sm:leading-[1.12] animate-hero-1 drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)]">
              Study Abroad with{' '}
              <span className="bg-gradient-to-r from-white via-sky-100 to-amber-300 bg-clip-text text-transparent">
                Complete Confidence
              </span>
            </h1>

            {/* High-Impact Value Line */}
            <p className="text-sm sm:text-lg xl:text-xl text-slate-100 leading-relaxed font-normal max-w-2xl animate-hero-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              Direct partner to <strong className="text-white font-semibold underline decoration-amber-400/60 decoration-2 underline-offset-4">1,200+ prestigious universities</strong> across 10 top global destinations. Free profile evaluation, scholarship guidance & 99% visa success rate.
            </p>

            {/* Quick Destination Pill Tags */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-0.5 animate-hero-2">
              <span className="text-[11px] sm:text-xs font-bold text-amber-300/90 uppercase tracking-wider mr-1">
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
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-900/70 hover:bg-kc-primary/80 backdrop-blur-md border border-white/15 hover:border-white/40 text-[11px] sm:text-xs font-semibold text-slate-200 hover:text-white transition-all duration-200 hover:scale-105 shadow-sm"
                >
                  <span>{dest.flag}</span>
                  <span>{dest.name}</span>
                </a>
              ))}
            </div>

          </div>

          {/* Right Column on Desktop / Second on Mobile: 3D Interactive Lanyard holding Bento Badge */}
          <div className="lg:col-span-6 xl:col-span-6 lg:row-span-2 animate-hero-3 relative flex flex-col items-center justify-start min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] z-10 order-2">
            {/* Interactive Drag & Swing Hint Pill */}
            <div className="absolute top-0 right-2 sm:right-4 z-30 pointer-events-none">
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-slate-900/80 border border-white/20 backdrop-blur-md text-[11px] sm:text-xs font-semibold text-emerald-300 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Drag & Swing Grid Badge ✨</span>
              </div>
            </div>

            {/* Stage container with generous bleed so card can freely swing without hitting invisible bounding box */}
            <div 
              className="relative w-full h-[380px] sm:h-[440px] lg:h-[500px] xl:h-[520px] flex items-center justify-center -mt-4 sm:-mt-6 lg:-mt-8 cursor-grab active:cursor-grabbing touch-pan-y"
              onMouseEnter={() => setCountUpDone(true)}
              onTouchStart={() => setCountUpDone(true)}
            >
              {/* 1. Instant Zero-Delay Static Card Poster (Shown instantly on initial frame paint) */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-700 z-10 ${
                  is3DReady ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <div className="relative flex flex-col items-center justify-center">
                  {/* Top Lanyard Strap */}
                  <div className="w-6 sm:w-7 h-10 sm:h-16 bg-slate-900 border-x border-white/20 shadow-md relative z-10 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.12)_4px,rgba(255,255,255,0.12)_8px)]" />
                    <div className="absolute w-2.5 sm:w-3 h-4 sm:h-5 rounded-full border-2 border-white/30" />
                  </div>
                  {/* Metal Clamp & Ring */}
                  <div className="-mt-1.5 w-5 sm:w-6 h-4 sm:h-4.5 rounded-md bg-gradient-to-b from-slate-400 via-slate-300 to-slate-600 border border-white/40 shadow-sm z-20 flex items-center justify-center">
                    <div className="w-2 sm:w-2.5 h-1 bg-slate-800 rounded-sm" />
                  </div>
                  {/* Card Body with Bento Grid Artwork & CountUp Animation */}
                  <div className="-mt-1.5 relative w-[275px] sm:w-[315px] lg:w-[340px] aspect-[1/1.48] rounded-[24px] sm:rounded-[26px] overflow-hidden border border-white/25 shadow-[0_25px_60px_rgba(0,0,0,0.6)] ring-1 ring-white/10 z-20 bg-slate-950">
                    <CardBentoContent animate={true} />
                  </div>
                </div>
              </div>

              {/* 2. Interactive 3D Canvas Layer (Fades in smoothly when Three.js physics & textures ready) */}
              <div
                className={`absolute w-[150%] sm:w-[165%] lg:w-[180%] h-[130%] sm:h-[135%] lg:h-[140%] -left-[25%] sm:-left-[32.5%] lg:-left-[40%] -top-[18%] sm:-top-[22%] lg:-top-[24%] transition-opacity duration-700 z-20 ${
                  is3DReady ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <Lanyard
                  position={[0, -0.65, 14.6]}
                  gravity={[0, -40, 0]}
                  frontImage="/assets/lanyard/kc-bento-card-front.png"
                  backImage="/assets/lanyard/kc-bento-card-back.png"
                  imageFit="cover"
                  cardScale={3.15}
                  onReady={() => setThreeReady(true)}
                />
              </div>
            </div>
          </div>

          {/* Bottom of Left Column on Desktop / Third on Mobile: Quick Consultation Console */}
          <div className="lg:col-span-6 xl:col-span-6 animate-hero-3 relative z-20 order-3">
            <div className="relative overflow-hidden bg-slate-900/75 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
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

        {/* 3. Full-Bleed Grounding Trust Ribbon - Eliminates Gaps & Bridges Columns */}
        <div className="mt-6 lg:mt-8 pt-4 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 animate-hero-3 relative z-20">
          <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/15 hover:border-white/30 transition-all">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-[11px] sm:text-sm font-extrabold text-white leading-tight">Zero Service Charges</div>
              <div className="text-[9.5px] sm:text-[11px] text-slate-300 mt-0.5">100% Free Guidance</div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/15 hover:border-white/30 transition-all">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-400/30">
              <GraduationCap className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-[11px] sm:text-sm font-extrabold text-white leading-tight">₹25Cr+ Scholarships</div>
              <div className="text-[9.5px] sm:text-[11px] text-slate-300 mt-0.5">Merit & Grants</div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/15 hover:border-white/30 transition-all">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-sky-400/20 text-sky-300 flex items-center justify-center shrink-0 border border-sky-400/30">
              <Globe className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-[11px] sm:text-sm font-extrabold text-white leading-tight">10 Top Hubs</div>
              <div className="text-[9.5px] sm:text-[11px] text-slate-300 mt-0.5">UK, USA, Canada, Germany...</div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/15 hover:border-white/30 transition-all">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-purple-400/20 text-purple-300 flex items-center justify-center shrink-0 border border-purple-400/30">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-[11px] sm:text-sm font-extrabold text-white leading-tight">Express Offers</div>
              <div className="text-[9.5px] sm:text-[11px] text-slate-300 mt-0.5">Within 48–72 Hours</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
