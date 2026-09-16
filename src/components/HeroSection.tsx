'use client';

import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Sparkles,
  Globe,
  CheckCircle2,
  SearchCheck,
  Download,
  FileText,
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import EnquiryForm from './EnquiryForm';
import CardBentoContent from './CardBentoContent';
import BrochureModal from './BrochureModal';

export default function HeroSection() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    if (!reduceMotion) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

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
      className="relative isolate pt-1 sm:pt-2 pb-3 sm:pb-4 border-b border-slate-900 overflow-hidden text-white bg-slate-950"
    >
      {/* 1. Full-Bleed Background Video & Static Poster Fallback */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-slate-950">
        <div
          className="absolute inset-0 bg-slate-950 bg-cover bg-center"
          style={siteConfig.heroVideo.poster ? { backgroundImage: `url(${siteConfig.heroVideo.poster})` } : undefined}
          aria-hidden="true"
        />

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

      {/* 2. Fluid Container - Fits entirely inside viewport without scrolling */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        
        {/* Main 2-Column Row: Left (Headline + Lifted CTA Box), Right (Bento Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-6 lg:gap-8 xl:gap-10 items-center">
          
          {/* Left Column: Admissions Pill, H1, and Lifted CTA Box */}
          <div className="flex flex-col space-y-2 sm:space-y-2.5 text-left relative z-20 w-full">
            
            {/* Admissions Open Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 shadow-md text-[10.5px] sm:text-xs w-fit animate-hero-1">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold text-white">Admissions Open 2025–2026</span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="text-amber-300 font-medium flex items-center gap-1">
                ★ 25+ Years Legacy in TN
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[32px] xl:text-[38px] font-black text-white tracking-tight leading-[1.14] animate-hero-1 drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)]">
              Tamil Nadu&apos;s Most Trusted{' '}
              <span className="bg-gradient-to-r from-white via-sky-100 to-amber-300 bg-clip-text text-transparent">
                Study Abroad Consultant
              </span>
            </h1>

            {/* High-Impact Value Paragraph - Focused on 60+ Branches & Free Profile Evaluation */}
            <p className="text-xs sm:text-sm lg:text-[14.5px] text-slate-100 leading-relaxed font-normal max-w-2xl animate-hero-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              With <strong className="text-white font-semibold">60+ branches</strong> across India and overseas, get a <strong className="text-white font-semibold">free profile evaluation</strong> from certified study abroad experts to shortlist top universities, admission pathways, and scholarships.
            </p>

            {/* Quick Destination Pill Tags (Top Hubs) */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 pt-0.5 animate-hero-2">
              <span className="text-[10px] sm:text-[11px] font-bold text-amber-300/90 uppercase tracking-wider mr-0.5">
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
                  className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-full bg-slate-900/70 hover:bg-kc-primary/80 backdrop-blur-md border border-white/15 hover:border-white/40 text-[10px] sm:text-[11px] font-semibold text-slate-200 hover:text-white transition-all duration-200 hover:scale-105 shadow-sm"
                >
                  <span>{dest.flag}</span>
                  <span>{dest.name}</span>
                </a>
              ))}
            </div>

            {/* Lifted Consultation CTA Box (Directly under Top Hubs) */}
            <div className="animate-hero-2 relative z-20 w-full pt-0.5 sm:pt-1">
              <div className="relative overflow-hidden bg-white/95 backdrop-blur-xl rounded-2xl p-3 sm:p-4 xl:p-5 border border-white/60 shadow-[0_15px_35px_rgba(0,0,0,0.3)] ring-1 ring-black/5">
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 sm:pb-2 border-b border-slate-100">
                    <div>
                      <h2 className="text-xs sm:text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                        <span>Book Free 1-on-1 Counselling</span>
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                          100% Free
                        </span>
                      </h2>
                      <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 font-medium leading-tight">
                        Shortlisted universities &amp; scholarship evaluation from certified overseas education consultants in 15 mins
                      </p>
                    </div>

                    {/* Secondary Download Brochure CTA Button */}
                    <button
                      type="button"
                      onClick={() => setIsBrochureOpen(true)}
                      className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-kc-primary hover:bg-kc-primary-hover text-white text-[11px] font-extrabold transition-all shrink-0 shadow-xs hover:shadow-md group cursor-pointer"
                      title="Download KC Overseas Study Abroad Brochure (PDF)"
                    >
                      <Download className="w-3.5 h-3.5 text-white group-hover:translate-y-0.5 transition-all" />
                      <span className="hidden sm:inline">Download Brochure</span>
                      <span className="sm:hidden">Brochure PDF</span>
                    </button>
                  </div>
                  <EnquiryForm mode="quick" variant="hero" source="hero_quick" />

                  {/* Secondary Full-Width Blue CTA Button below primary form */}
                  <div className="mt-2.5 pt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setIsBrochureOpen(true)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl bg-kc-primary hover:bg-kc-primary-hover active:bg-[#134499] text-white font-black text-xs sm:text-[13px] tracking-wide shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all group cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform shrink-0" />
                      <span>Download Free Study Abroad Brochure (PDF)</span>
                      <span className="text-[9.5px] font-bold px-1.5 py-0.5 rounded-md bg-white/20 text-white border border-white/30 uppercase tracking-wide shrink-0">
                        8 Pages
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Bento Grid Card */}
          <div className="animate-hero-2 relative flex flex-col items-center justify-center z-10 w-full py-0.5 sm:py-1">
            {/* Verified Track Record Status Pill */}
            <div className="hidden sm:block mb-1.5 sm:mb-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-900/80 border border-white/20 backdrop-blur-md text-[10.5px] sm:text-[11px] font-semibold text-emerald-300 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verified Global Track Record ✨</span>
              </div>
            </div>

            {/* Interactive 3D Bento Grid Card Container */}
            <div
              className="relative group perspective-1000 flex items-center justify-center w-full touch-pan-y"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="absolute -inset-3 bg-gradient-to-tr from-blue-600/30 via-sky-500/20 to-amber-500/25 rounded-[28px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                aria-hidden="true"
              />

              <div
                className="relative w-full max-w-[340px] sm:max-w-[350px] lg:max-w-[360px] rounded-[22px] sm:rounded-[24px] overflow-hidden border border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10 z-20 bg-slate-950 will-change-transform"
                style={{
                  transform:
                    isHovered && !reduceMotion
                      ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`
                      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                  transition: isHovered
                    ? 'transform 0.1s ease-out'
                    : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
                }}
              >
                <CardBentoContent animate={true} />
              </div>
            </div>
          </div>

        </div>

        {/* 3. Bottom 5 Grids - Fits completely in the hero section above the fold */}
        <div className="mt-2.5 sm:mt-3.5 pt-2 sm:pt-2.5 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5 animate-hero-3 relative z-20">
          
          <div className="flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-xl bg-slate-900/70 backdrop-blur-md border border-white/15 hover:border-white/30 transition-all">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <div className="text-[11px] sm:text-xs font-extrabold text-white leading-tight">Zero Service Charge</div>
              <div className="text-[9px] sm:text-[10px] text-slate-300 mt-0.5 leading-none">With tie up university</div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-xl bg-slate-900/70 backdrop-blur-md border border-white/15 hover:border-white/30 transition-all">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-400/30">
              <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <div className="text-[11px] sm:text-xs font-extrabold text-white leading-tight">₹25Cr+ Scholarships</div>
              <div className="text-[9px] sm:text-[10px] text-slate-300 mt-0.5 leading-none">Merit & Grants</div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-xl bg-slate-900/70 backdrop-blur-md border border-white/15 hover:border-white/30 transition-all">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-sky-400/20 text-sky-300 flex items-center justify-center shrink-0 border border-sky-400/30">
              <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <div className="text-[11px] sm:text-xs font-extrabold text-white leading-tight">10 Top Hubs</div>
              <div className="text-[9px] sm:text-[10px] text-slate-300 mt-0.5 leading-none">UK, USA, Canada, Germany...</div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-xl bg-slate-900/70 backdrop-blur-md border border-white/15 hover:border-white/30 transition-all">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-400/20 text-purple-300 flex items-center justify-center shrink-0 border border-purple-400/30">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <div className="text-[11px] sm:text-xs font-extrabold text-white leading-tight">Express Offers</div>
              <div className="text-[9px] sm:text-[10px] text-slate-300 mt-0.5 leading-none">Within 48–72 Hours</div>
            </div>
          </div>

          <a
            href="#search-selection"
            className="flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-xl bg-slate-900/70 backdrop-blur-md border border-white/15 hover:border-white/30 transition-all col-span-2 sm:col-span-1 cursor-pointer group"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-rose-400/20 text-rose-300 flex items-center justify-center shrink-0 border border-rose-400/30 group-hover:bg-rose-400/30 transition-colors">
              <SearchCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <div className="text-[11px] sm:text-xs font-extrabold text-white leading-tight flex items-center gap-1">
                <span>Public Universities</span>
                <span className="text-[10px] text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
              <div className="text-[8.5px] sm:text-[9.5px] text-slate-300 mt-0.5 leading-tight">
                Search & selection: Germany, Austria... <span className="text-amber-300 font-semibold">• Paid</span>
              </div>
            </div>
          </a>

        </div>

      </div>

      {/* Lightweight Brochure Download Modal */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />
    </section>
  );
}
