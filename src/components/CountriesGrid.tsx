'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig, CountryDestination } from '@/config/site';
import MagicBento, { DEFAULT_DESTINATIONS, DestinationBentoItem } from './MagicBento';

interface CountriesGridProps {
  onSelectCountry?: (countryName: string) => void;
}

export default function CountriesGrid({ onSelectCountry }: CountriesGridProps) {
  const handleSelectCountry = (country: { name: string }) => {
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
      className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean Header matching Brand Colors */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-kc-primary mb-2.5 shadow-sm">
            <span>Global Study Opportunities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-kc-heading tracking-tight">
            Target Study Destinations
          </h2>
          <p className="text-xs sm:text-sm text-kc-muted mt-1.5 font-normal">
            Direct institutional representation across 10 premier education hubs. Hover over any country to explore with its authentic flag glow.
          </p>
        </div>

        {/* MagicBento Grid with Country Flag Glow on Hover */}
        <div className="w-full">
          <MagicBento
            destinations={DEFAULT_DESTINATIONS}
            onSelectCountry={(dest) => handleSelectCountry(dest)}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={280}
            particleCount={10}
          />
        </div>

        {/* Mobile hint */}
        <p className="sm:hidden text-center text-[11px] text-slate-500 mt-3 flex items-center justify-center gap-1 font-medium">
          <span>✨ Tap or scroll past any destination to explore with its flag glow</span>
        </p>

        {/* PREVIOUS DESTINATIONS GRID (Preserved for easy 1-click revert if needed):
        <div className="flex sm:grid sm:grid-cols-3 md:grid-cols-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none no-scrollbar gap-3 sm:gap-4 pb-3 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          {siteConfig.destinations.map((country) => (
            <button
              key={country.id}
              onClick={() => handleSelectCountry(country)}
              className="min-w-[170px] sm:min-w-0 snap-start shrink-0 sm:shrink bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200 hover:border-kc-primary shadow-elevation-low hover:shadow-elevation-medium card-elevation-interactive text-left group flex flex-col justify-between transition-all"
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
        */}

      </div>
    </section>
  );
}
