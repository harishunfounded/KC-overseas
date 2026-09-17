'use client';

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface DestinationGlowItem {
  id: string;
  name: string;
  code: string;
  flag: string;
  oneLiner: string;
  highlight: string;
  glowColor: string; // RGB values for border and drop-shadow glow
  flagGradient: string; // Rich flag gradient bloom
}

const destinations: DestinationGlowItem[] = [
  {
    id: 'uk',
    name: 'United Kingdom',
    code: 'UK',
    flag: '🇬🇧',
    oneLiner: '1-year Master’s & 2-year post-study work visa at world-ranked universities.',
    highlight: 'Top Pick for 1-Yr Masters',
    glowColor: '59, 130, 246', // Royal Union Blue
    flagGradient:
      'radial-gradient(ellipse at top right, rgba(220, 38, 38, 0.75), transparent 60%), radial-gradient(ellipse at bottom left, rgba(1, 33, 105, 0.85), transparent 70%), linear-gradient(135deg, #091122 0%, #101c38 100%)',
  },
  {
    id: 'usa',
    name: 'United States',
    code: 'USA',
    flag: '🇺🇸',
    oneLiner: 'Top research universities with up to 3 years STEM OPT stay-back rights.',
    highlight: 'World #1 in Research',
    glowColor: '239, 68, 68', // Old Glory Red
    flagGradient:
      'radial-gradient(ellipse at top right, rgba(220, 38, 38, 0.8), transparent 60%), radial-gradient(ellipse at bottom left, rgba(30, 58, 138, 0.85), transparent 70%), linear-gradient(135deg, #0d1322 0%, #1e1324 100%)',
  },
  {
    id: 'canada',
    name: 'Canada',
    code: 'CA',
    flag: '🇨🇦',
    oneLiner: 'World-class education with direct PGWP work permits & PR opportunities.',
    highlight: 'Direct PR Pathways',
    glowColor: '239, 68, 68', // Canadian Crimson
    flagGradient:
      'radial-gradient(circle at top right, rgba(239, 68, 68, 0.85), transparent 60%), radial-gradient(circle at bottom left, rgba(185, 28, 28, 0.8), transparent 60%), linear-gradient(135deg, #140d12 0%, #201018 100%)',
  },
  {
    id: 'australia',
    name: 'Australia',
    code: 'AU',
    flag: '🇦🇺',
    oneLiner: 'Group of Eight prestigious universities & extended post-study work rights.',
    highlight: 'Go8 Universities',
    glowColor: '14, 165, 233', // Ocean Coast Blue
    flagGradient:
      'radial-gradient(circle at top right, rgba(14, 165, 233, 0.8), transparent 60%), radial-gradient(circle at bottom left, rgba(234, 88, 12, 0.65), transparent 60%), linear-gradient(135deg, #091322 0%, #0d2238 100%)',
  },
  {
    id: 'germany',
    name: 'Germany',
    code: 'DE',
    flag: '🇩🇪',
    oneLiner: 'TU9 universities with zero tuition fees at world-class public institutions.',
    highlight: 'Zero Tuition Fees',
    glowColor: '245, 158, 11', // German Gold/Amber
    flagGradient:
      'radial-gradient(circle at top right, rgba(245, 158, 11, 0.8), transparent 60%), radial-gradient(circle at bottom left, rgba(220, 38, 38, 0.75), transparent 60%), linear-gradient(135deg, #181409 0%, #241a0d 100%)',
  },
  {
    id: 'ireland',
    name: 'Ireland',
    code: 'IE',
    flag: '🇮🇪',
    oneLiner: 'Silicon Valley of Europe, top tech headquarters & 2-year stay-back visa.',
    highlight: 'European Tech Hub',
    glowColor: '34, 197, 94', // Irish Emerald Green
    flagGradient:
      'radial-gradient(circle at top right, rgba(34, 197, 94, 0.8), transparent 60%), radial-gradient(circle at bottom left, rgba(249, 115, 22, 0.65), transparent 60%), linear-gradient(135deg, #091811 0%, #0f261c 100%)',
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    code: 'NZ',
    flag: '🇳🇿',
    oneLiner: 'Safe, scenic, globally ranked universities with post-study work rights.',
    highlight: 'Top Living Quality',
    glowColor: '59, 130, 246', // Kiwi Pacific Blue
    flagGradient:
      'radial-gradient(circle at top right, rgba(225, 29, 72, 0.75), transparent 60%), radial-gradient(circle at bottom left, rgba(37, 99, 235, 0.85), transparent 60%), linear-gradient(135deg, #0a1122 0%, #141c33 100%)',
  },
  {
    id: 'france',
    name: 'France',
    code: 'FR',
    flag: '🇫🇷',
    oneLiner: 'Grandes Écoles, affordable tuition & high European post-study ROI.',
    highlight: 'High European ROI',
    glowColor: '99, 102, 241', // French Bleu
    flagGradient:
      'radial-gradient(circle at top right, rgba(239, 68, 68, 0.75), transparent 60%), radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.85), transparent 60%), linear-gradient(135deg, #0d1226 0%, #151c38 100%)',
  },
  {
    id: 'sweden',
    name: 'Sweden',
    code: 'SE',
    flag: '🇸🇪',
    oneLiner: 'Global innovation leader with 1,000+ English-taught Master’s degrees.',
    highlight: '#1 Innovation Index',
    glowColor: '234, 179, 8', // Swedish Gold
    flagGradient:
      'radial-gradient(circle at top right, rgba(234, 179, 8, 0.8), transparent 60%), radial-gradient(circle at bottom left, rgba(2, 132, 199, 0.85), transparent 60%), linear-gradient(135deg, #091824 0%, #122538 100%)',
  },
  {
    id: 'dubai',
    name: 'Dubai (UAE)',
    code: 'AE',
    flag: '🇦🇪',
    oneLiner: 'Branch campuses of premier UK & Australian universities with tax-free living.',
    highlight: 'Global Hub & Tax Free',
    glowColor: '16, 185, 129', // UAE Emerald Green
    flagGradient:
      'radial-gradient(circle at top right, rgba(16, 185, 129, 0.8), transparent 60%), radial-gradient(circle at bottom left, rgba(239, 68, 68, 0.65), transparent 60%), linear-gradient(135deg, #091712 0%, #10241c 100%)',
  },
];

interface CountriesGridProps {
  onSelectCountry?: (countryName: string) => void;
}

export default function CountriesGrid({ onSelectCountry }: CountriesGridProps) {
  const [activeTouchId, setActiveTouchId] = useState<string | null>(null);

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
      {/* Background ambient lighting — preserves clean, light brand-theme background */}
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
            Direct institutional representation from certified overseas education consultants across 10 premier global hubs.
          </p>
        </div>

        {/* 10 Country Cards with Flag Glow Bloom Effect on Clean White Theme */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 w-full">
          {destinations.map((destination) => {
            const isTouched = activeTouchId === destination.id;

            return (
              <button
                key={destination.id}
                onClick={() => handleSelectCountry(destination)}
                onTouchStart={() => setActiveTouchId(destination.id)}
                onTouchEnd={() => setTimeout(() => setActiveTouchId(null), 500)}
                style={
                  {
                    '--glow-color': destination.glowColor,
                    '--flag-gradient': destination.flagGradient,
                  } as React.CSSProperties
                }
                className={`country-glow-card group flex flex-col justify-between w-full min-h-[152px] p-3.5 sm:p-4 ${
                  isTouched ? 'is-touched' : ''
                }`}
              >
                {/* Flag Gradient Bloom Layer (0 opacity in resting white state, blooms on hover/touch) */}
                <div className="flag-bg" aria-hidden="true" />

                {/* Card Header: Flag emoji & Highlight Badge */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2 gap-1">
                    <span
                      className="card-flag text-2xl sm:text-3xl select-none inline-block origin-bottom-left"
                      role="img"
                      aria-label={destination.name}
                    >
                      {destination.flag}
                    </span>
                    {destination.highlight && (
                      <span className="card-badge text-[9.5px] font-bold px-2 py-0.5 rounded-full truncate max-w-[110px] sm:max-w-[125px]">
                        {destination.highlight}
                      </span>
                    )}
                  </div>

                  {/* Country Name */}
                  <h3 className="card-title font-extrabold text-xs sm:text-sm leading-tight">
                    {destination.name}
                  </h3>

                  {/* One-Liner Description */}
                  <p className="card-desc text-[10.5px] sm:text-[11px] mt-1 leading-snug line-clamp-2 font-normal">
                    {destination.oneLiner}
                  </p>
                </div>

                {/* Card Footer: Explore CTA */}
                <div className="card-explore relative z-10 mt-2.5 pt-2 border-t flex items-center justify-between text-[10px] font-bold">
                  <span>Explore</span>
                  <ArrowUpRight className="explore-icon w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile hint */}
        <p className="sm:hidden text-center text-[11px] text-slate-500 mt-3 flex items-center justify-center gap-1 font-medium">
          <span>✨ Touch any destination to reveal admission guidance with flag bloom</span>
        </p>

      </div>
    </section>
  );
}
