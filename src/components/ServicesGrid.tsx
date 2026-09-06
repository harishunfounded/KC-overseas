'use client';

import React, { useState } from 'react';
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
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { siteConfig, ServiceOffering } from '@/config/site';

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
  const [filter, setFilter] = useState<'all' | 'coaching' | 'assistance'>('all');

  const filteredServices = siteConfig.services.filter((s) => {
    if (filter === 'all') return true;
    return s.category === filter;
  });

  const handleEnquireService = (serviceName: string) => {
    const formElement = document.getElementById('enquiry-section') || document.getElementById('enquiry');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-kc-accent font-bold text-xs uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" /> Comprehensive Student Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-kc-heading tracking-tight mt-2.5">
            Test Prep Coaching & Value-Added Services
          </h2>
          <p className="text-xs sm:text-sm text-kc-muted mt-2">
            From scoring 8+ bands in IELTS to securing low-interest bank loans and finding verified accommodation abroad.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-kc-primary text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Offerings (10)
            </button>
            <button
              onClick={() => setFilter('coaching')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                filter === 'coaching'
                  ? 'bg-kc-primary text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Test Prep & Languages (7)
            </button>
            <button
              onClick={() => setFilter('assistance')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                filter === 'assistance'
                  ? 'bg-kc-primary text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Loans, Housing & Visas (3)
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {filteredServices.map((service) => {
            const Icon = serviceIconMap[service.icon] || BookOpen;
            const isAssistance = service.category === 'assistance';

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-kc-primary transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isAssistance
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'bg-blue-50 text-kc-primary'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                        isAssistance
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-blue-100 text-kc-primary'
                      }`}
                    >
                      {isAssistance ? 'Assistance' : 'Coaching'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-extrabold text-kc-heading mb-1.5">
                    {service.name}
                  </h3>

                  {/* 1-Line Description */}
                  <p className="text-xs text-kc-muted leading-relaxed mb-3">
                    {service.shortDesc}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-1.5 mb-4 border-t border-slate-100 pt-2.5">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enquire button */}
                <button
                  onClick={() => handleEnquireService(service.name)}
                  className="w-full py-2 px-3 rounded-lg border border-kc-primary text-kc-primary text-xs font-bold hover:bg-kc-primary hover:text-white transition-all flex items-center justify-center gap-1"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
