'use client';

import React from 'react';
import { ArrowUpRight, Check, Compass, Sparkles } from 'lucide-react';
import { siteConfig, CountryDestination } from '@/config/site';

interface CountriesGridProps {
  onSelectCountry?: (countryName: string) => void;
}

export default function CountriesGrid({ onSelectCountry }: CountriesGridProps) {
  const handleSelectCountry = (country: CountryDestination) => {
    if (onSelectCountry) {
      onSelectCountry(country.name);
    }
    const formElement = document.getElementById('enquiry-section') || document.getElementById('enquiry');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="destinations" className="py-12 sm:py-16 bg-kc-surface border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-kc-primary font-bold text-xs uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" /> 10 Premier Study Destinations
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-kc-heading tracking-tight mt-2.5">
            The World is Your Campus
          </h2>
          <p className="text-xs sm:text-sm text-kc-muted mt-2">
            Explore world-ranking universities, post-study work visas, and scholarships tailored to your career ambitions.
          </p>
        </div>

        {/* 10 Countries Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {siteConfig.destinations.map((country) => (
            <div
              key={country.id}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm hover:shadow-lg hover:border-kc-primary transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Flag & Country Name */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-3xl select-none" role="img" aria-label={country.name}>
                      {country.flag}
                    </span>
                    <div>
                      <h3 className="font-extrabold text-base text-kc-heading group-hover:text-kc-primary transition-colors">
                        {country.name}
                      </h3>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        {country.postStudyWork}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 1-Line Hook */}
                <p className="text-xs text-kc-muted leading-relaxed line-clamp-2 mb-3">
                  {country.hook}
                </p>

                {/* Highlight Tag */}
                <div className="p-2 rounded-lg bg-blue-50/70 border border-blue-100/60 mb-3">
                  <p className="text-[11px] font-semibold text-kc-primary flex items-center gap-1">
                    <Sparkles className="w-3 h-3 shrink-0" />
                    <span>{country.highlight}</span>
                  </p>
                </div>

                {/* Popular Courses Pills */}
                <div className="mb-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Popular Degrees
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {country.popularCourses.slice(0, 3).map((course, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button: Explore Courses */}
              <button
                onClick={() => handleSelectCountry(country)}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-100 text-kc-heading text-xs font-bold hover:bg-kc-primary hover:text-white transition-all flex items-center justify-center gap-1.5 group-hover:bg-kc-primary group-hover:text-white"
              >
                <span>Explore {country.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Quick CTA strip below destinations */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-kc-primary to-blue-700 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-extrabold">Confused between countries?</h4>
            <p className="text-xs text-blue-100 mt-0.5">
              Let KC Namakkal counselors evaluate your budget, GPA, and goals to find your ideal match.
            </p>
          </div>
          <a
            href="#enquiry"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-kc-accent text-white text-xs sm:text-sm font-bold shadow-cta-glow hover:bg-kc-accent-hover transition-all"
          >
            Get Free Country Recommendation
          </a>
        </div>

      </div>
    </section>
  );
}
