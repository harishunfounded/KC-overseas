'use client';

import React, { useState } from 'react';
import { Sparkles, X, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function IntakeBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      role="banner"
      id="intake-banner-strip"
      className="w-full bg-gradient-to-r from-kc-primary via-blue-600 to-kc-primary text-white py-1 px-3 sm:px-4 text-xs font-medium flex items-center justify-between shadow-inner"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center w-full">
        {/* Smooth, subtle pulsing indicator */}
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-kc-accent opacity-30 duration-1000" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-kc-accent" />
        </span>

        {/* Banner Copy with single config variable */}
        <p className="tracking-wide flex items-center gap-1.5 truncate">
          <strong className="font-bold tracking-normal uppercase bg-white/15 px-1.5 py-0.5 rounded text-[10px] sm:text-xs text-yellow-300">
            {siteConfig.intakeLabel}
          </strong>
          <span className="hidden sm:inline opacity-95">
            — Up to 100% scholarships & 99% visa success track record.
          </span>
          <a
            href="#enquiry-section"
            className="underline underline-offset-2 hover:text-yellow-200 inline-flex items-center text-[11px] sm:text-xs font-semibold ml-1 transition-colors"
          >
            Apply <ChevronRight className="w-3 h-3 inline" />
          </a>
        </p>
      </div>

      {/* Dismissible button on desktop only */}
      <button
        onClick={() => setDismissed(true)}
        className="hidden md:inline-flex p-1 hover:bg-white/10 rounded-full transition-colors text-white/80 hover:text-white"
        aria-label="Dismiss intake banner"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
