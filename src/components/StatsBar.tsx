'use client';

import React from 'react';
import { Calendar, Building2, Users, ShieldCheck, MapPin, Award } from 'lucide-react';
import { siteConfig } from '@/config/site';

const statIcons = [
  Calendar,
  Building2,
  Users,
  ShieldCheck,
  MapPin,
  Award,
];

export default function StatsBar() {
  return (
    <section className="bg-kc-navy text-white py-8 sm:py-10 border-y border-slate-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Credibility Strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-center">
          {siteConfig.stats.map((stat, idx) => {
            const IconComponent = statIcons[idx % statIcons.length];
            return (
              <div
                key={stat.label}
                className="p-3.5 sm:p-4 rounded-2xl bg-kc-navy-card/60 border border-slate-800/80 hover:border-kc-primary/60 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 text-sky-400 flex items-center justify-center mx-auto mb-2">
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-200 mt-0.5">
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
