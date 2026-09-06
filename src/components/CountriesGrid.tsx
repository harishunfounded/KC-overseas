'use client';

import React from 'react';
import { ArrowUpRight, Globe2 } from 'lucide-react';
import { siteConfig, CountryDestination } from '@/config/site';

interface CountriesGridProps {
  onSelectCountry?: (countryName: string) => void;
}

export default function CountriesGrid({ onSelectCountry }: CountriesGridProps) {
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
    <section id="destinations" className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-kc-heading tracking-tight">
            Target Study Destinations
          </h2>
          <p className="text-xs sm:text-sm text-kc-muted mt-1.5">
            Direct institutional representation across 10 premier education hubs.
          </p>
        </div>

        {/* Minimal 10 Countries Grid: Flag + Name + 1-Liner Only */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {siteConfig.destinations.map((country) => (
            <button
              key={country.id}
              onClick={() => handleSelectCountry(country)}
              className="bg-slate-50/70 hover:bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 hover:border-kc-primary hover:shadow-md transition-all duration-200 text-left group flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl sm:text-3xl block mb-2 select-none" role="img" aria-label={country.name}>
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

      </div>
    </section>
  );
}
