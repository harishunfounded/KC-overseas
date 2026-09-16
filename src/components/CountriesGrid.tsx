'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface DestinationItem {
  id: string;
  name: string;
  code: string;
  flag: string;
  oneLiner: string;
  highlight: string;
  accentColor: string;
  gradient: string;
}

const destinations: DestinationItem[] = [
  {
    id: 'uk',
    name: 'United Kingdom',
    code: 'UK',
    flag: '🇬🇧',
    oneLiner: '1-year Master’s & 2-year post-study work visa at world-ranked universities.',
    highlight: 'Top Pick for 1-Yr Masters',
    accentColor: 'text-blue-400 border-blue-400/30',
    gradient: 'from-blue-950/90 via-slate-900 to-slate-950',
  },
  {
    id: 'usa',
    name: 'United States',
    code: 'USA',
    flag: '🇺🇸',
    oneLiner: 'Top research universities with up to 3 years STEM OPT stay-back rights.',
    highlight: 'World #1 in Research',
    accentColor: 'text-rose-400 border-rose-400/30',
    gradient: 'from-rose-950/80 via-slate-900 to-slate-950',
  },
  {
    id: 'canada',
    name: 'Canada',
    code: 'CA',
    flag: '🇨🇦',
    oneLiner: 'World-class education with direct PGWP work permits & PR opportunities.',
    highlight: 'Direct PR Pathways',
    accentColor: 'text-red-400 border-red-400/30',
    gradient: 'from-red-950/80 via-slate-900 to-slate-950',
  },
  {
    id: 'australia',
    name: 'Australia',
    code: 'AU',
    flag: '🇦🇺',
    oneLiner: 'Group of Eight prestigious universities & extended post-study work rights.',
    highlight: 'Go8 Universities',
    accentColor: 'text-sky-400 border-sky-400/30',
    gradient: 'from-sky-950/80 via-slate-900 to-slate-950',
  },
  {
    id: 'germany',
    name: 'Germany',
    code: 'DE',
    flag: '🇩🇪',
    oneLiner: 'TU9 universities with zero tuition fees at world-class public institutions.',
    highlight: 'Zero Tuition Fees',
    accentColor: 'text-amber-400 border-amber-400/30',
    gradient: 'from-amber-950/80 via-slate-900 to-slate-950',
  },
  {
    id: 'ireland',
    name: 'Ireland',
    code: 'IE',
    flag: '🇮🇪',
    oneLiner: 'Silicon Valley of Europe, top tech headquarters & 2-year stay-back visa.',
    highlight: 'European Tech Hub',
    accentColor: 'text-emerald-400 border-emerald-400/30',
    gradient: 'from-emerald-950/80 via-slate-900 to-slate-950',
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    code: 'NZ',
    flag: '🇳🇿',
    oneLiner: 'Safe, scenic, globally ranked universities with post-study work rights.',
    highlight: 'Top Living Quality',
    accentColor: 'text-cyan-400 border-cyan-400/30',
    gradient: 'from-cyan-950/80 via-slate-900 to-slate-950',
  },
  {
    id: 'france',
    name: 'France',
    code: 'FR',
    flag: '🇫🇷',
    oneLiner: 'Grandes Écoles, affordable tuition & high European post-study ROI.',
    highlight: 'High European ROI',
    accentColor: 'text-indigo-400 border-indigo-400/30',
    gradient: 'from-indigo-950/80 via-slate-900 to-slate-950',
  },
  {
    id: 'sweden',
    name: 'Sweden',
    code: 'SE',
    flag: '🇸🇪',
    oneLiner: 'Global innovation leader with 1,000+ English-taught Master’s degrees.',
    highlight: '#1 Innovation Index',
    accentColor: 'text-yellow-400 border-yellow-400/30',
    gradient: 'from-yellow-950/80 via-slate-900 to-slate-950',
  },
  {
    id: 'dubai',
    name: 'Dubai (UAE)',
    code: 'AE',
    flag: '🇦🇪',
    oneLiner: 'Branch campuses of premier UK & Australian universities with tax-free living.',
    highlight: 'Global Hub & Tax Free',
    accentColor: 'text-amber-300 border-amber-300/30',
    gradient: 'from-amber-950/70 via-slate-900 to-slate-950',
  },
];

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
      className="py-12 sm:py-16 bg-slate-950 border-b border-slate-900 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-bold text-sky-400 mb-2.5 shadow-sm">
            <span>Global Study Opportunities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Target Study Destinations
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-normal">
            Direct institutional representation from certified overseas education consultants across 10 premier global hubs.
          </p>
        </div>

        {/* 10-Card Responsive Grid with Native CSS Hover Transitions (Zero GSAP) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5">
          {destinations.map((country) => (
            <button
              key={country.id}
              onClick={() => handleSelectCountry(country)}
              className={`group relative text-left rounded-2xl p-4 sm:p-4.5 bg-gradient-to-br ${country.gradient} border border-white/10 hover:border-white/30 shadow-md hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer`}
            >
              {/* Subtle top ambient glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-white/5 group-hover:bg-white/10 blur-xl transition-all duration-300 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-3xl select-none group-hover:scale-110 transition-transform duration-300 inline-block">
                    {country.flag}
                  </span>
                  <span
                    className={`text-[9.5px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-md border ${country.accentColor}`}
                  >
                    {country.highlight}
                  </span>
                </div>

                <h3 className="font-black text-base text-white group-hover:text-amber-300 transition-colors tracking-tight">
                  {country.name}
                </h3>

                <p className="text-[11.5px] text-slate-300 mt-1.5 leading-relaxed line-clamp-2">
                  {country.oneLiner}
                </p>
              </div>

              <div className="mt-3.5 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-sky-400 group-hover:text-amber-300 transition-colors">
                <span>Explore Admission</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
