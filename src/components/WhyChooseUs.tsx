'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  CheckCircle2,
  Search,
  BookOpen,
  FileText,
  Landmark,
  PlaneTakeoff,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

const stepIcons = [
  CheckCircle2,
  Search,
  BookOpen,
  FileText,
  Landmark,
  PlaneTakeoff,
];

export default function WhyChooseUs() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsIntersecting(true);
      return;
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-kc-heading tracking-tight">
            The KC Guidance Process
          </h2>
          <p className="text-xs sm:text-sm text-kc-muted mt-1.5">
            Structured, transparent support from your first counselling session to visa approval.
          </p>
        </div>

        {/* 6 Steps: 80ms sequential staggered reveal */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {siteConfig.whyChooseUs.map((item, idx) => {
            const IconComponent = stepIcons[idx % stepIcons.length];
            return (
              <div
                key={item.title}
                style={{
                  transitionDelay: isIntersecting ? `${idx * 80}ms` : '0ms',
                }}
                className={`bg-slate-50/70 rounded-2xl p-4 border border-slate-200/80 hover:border-kc-primary hover:bg-white shadow-elevation-low card-elevation-interactive text-center flex flex-col items-center justify-center group transition-all duration-300 ${
                  isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-kc-primary flex items-center justify-center mb-2.5 group-hover:bg-kc-primary group-hover:text-white transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span
                  className={`text-[10px] font-bold text-slate-400 uppercase mb-1 transition-transform duration-300 ${
                    isIntersecting ? 'scale-100' : 'scale-75'
                  }`}
                >
                  Step 0{idx + 1}
                </span>
                <h3 className="font-extrabold text-xs text-kc-heading group-hover:text-kc-primary transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
