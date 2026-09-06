'use client';

import React from 'react';
import {
  BookOpen,
  Award,
  GraduationCap,
  Languages,
  Globe,
  Compass,
  Sparkles,
  BadgePercent,
  Home,
  ShieldCheck,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

const serviceIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Award,
  GraduationCap,
  Languages,
  Globe,
  Compass,
  Sparkles,
  BadgePercent,
  Home,
  ShieldCheck,
};

export default function ServicesGrid() {
  const handleSelectService = () => {
    const formElement = document.getElementById('enquiry-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-kc-heading tracking-tight">
            Services & Test Preparation
          </h2>
          <p className="text-xs sm:text-sm text-kc-muted mt-1.5">
            Complete end-to-end assistance from certified master trainers and visa specialists.
          </p>
        </div>

        {/* Minimal Grid: Icon + Name Only */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {siteConfig.services.map((service) => {
            const Icon = serviceIconMap[service.icon] || BookOpen;

            return (
              <button
                key={service.id}
                onClick={handleSelectService}
                className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm hover:border-kc-primary hover:shadow-md transition-all duration-200 flex flex-col items-center text-center group"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-kc-primary flex items-center justify-center mb-2.5 group-hover:bg-kc-primary group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-xs text-kc-heading group-hover:text-kc-primary transition-colors leading-snug">
                  {service.name}
                </h3>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
