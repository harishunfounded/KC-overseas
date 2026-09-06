'use client';

import React from 'react';
import { Globe, Building2, Users, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

const statIcons = [
  Globe,
  Building2,
  Users,
  MapPin,
  Award,
  CheckCircle2,
];

export default function StatsBar() {
  return (
    <section className="bg-kc-navy text-white py-8 sm:py-10 border-y border-slate-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-kc-primary/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-widest font-bold text-kc-accent">
            Proven Track Record Across 25+ Years
          </p>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-1">
            Why India Trusts KC Overseas Education
          </h2>
        </div>

        {/* 6 Grid Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
          {siteConfig.stats.map((stat, idx) => {
            const IconComponent = statIcons[idx % statIcons.length];
            return (
              <div
                key={stat.label}
                className="p-3 sm:p-4 rounded-xl bg-kc-navy-card/80 border border-slate-700/60 shadow-inner hover:border-kc-primary/80 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-kc-primary/20 text-kc-primary flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-4 h-4 text-sky-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-yellow-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-200 mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
