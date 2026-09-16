'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { siteConfig } from '@/config/site';

interface PublicCountry {
  name: string;
  flag: string;
}

const publicCountries: PublicCountry[] = [
  { name: 'Germany', flag: '🇩🇪' },
  { name: 'Austria', flag: '🇦🇹' },
  { name: 'Japan', flag: '🇯🇵' },
  { name: 'South Korea', flag: '🇰🇷' },
  { name: 'Italy', flag: '🇮🇹' },
];

export default function SearchSelectionSection() {
  return (
    <section
      id="search-selection"
      className="py-10 sm:py-14 relative overflow-hidden bg-gradient-to-r from-kc-primary via-blue-600 to-[#1853B8] animate-gradient-slow text-white border-y border-blue-500/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold mb-3 shadow-sm bg-white/15 text-yellow-300 border border-white/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Public Universities • Search & Selection Option</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight max-w-2xl mx-auto leading-tight text-white">
          Search & Selection for Public Universities
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm max-w-xl mx-auto mt-2.5 leading-relaxed text-blue-100">
          Specialized admission guidance for top public and tuition-free universities across Europe and Asia. Comprehensive profile evaluation, course search, and end-to-end application support.
        </p>

        {/* Country Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-4 pt-1">
          {publicCountries.map((c) => (
            <span
              key={c.name}
              className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xs"
            >
              <span>{c.flag}</span>
              <span>{c.name}</span>
            </span>
          ))}
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-extrabold shadow-sm">
            Paid Service
          </span>
        </div>

        {/* Action Buttons: Identical to the input image */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
          <a
            href="#enquiry-section"
            className="min-h-[48px] px-6 sm:px-8 py-3 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 cta-tactile bg-kc-accent text-white hover:bg-kc-accent-hover shadow-cta-glow transition-all"
          >
            <span>Book Free Counselling</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={siteConfig.contact.whatsappChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] px-6 sm:px-7 py-3 rounded-xl bg-kc-whatsapp text-white font-bold text-sm shadow-whatsapp-glow hover:bg-kc-whatsapp-hover cta-tactile flex items-center justify-center gap-2 transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
            <span>WhatsApp Chat</span>
          </a>
        </div>

        {/* Trust Note: Identical to the input image */}
        <p className="text-[11px] opacity-80 mt-4 flex items-center justify-center gap-1.5 text-white/90">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>In-person and online counselling sessions available Monday to Saturday • APS & Visa guidance included.</span>
        </p>

      </div>
    </section>
  );
}
