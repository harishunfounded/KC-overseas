'use client';

import React, { useEffect, useRef, useState } from 'react';
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

function StatCounterItem({
  stat,
  icon: IconComponent,
  isTriggered,
}: {
  stat: { label: string; value: string; subtext: string };
  icon: React.ComponentType<{ className?: string }>;
  isTriggered: boolean;
}) {
  const [displayValue, setDisplayValue] = useState<string>(() => {
    // If purely text (like 'British Council & IDP'), start with it
    return /^\d/.test(stat.value) ? '0+' : stat.value;
  });

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !isTriggered) {
      if (prefersReducedMotion) {
        setDisplayValue(stat.value);
      }
      return;
    }

    // Parse numeric value
    const match = stat.value.match(/^(\d[\d,]*)(.*)$/);
    if (!match) {
      setDisplayValue(stat.value);
      return;
    }

    const rawDigits = parseInt(match[1].replace(/,/g, ''), 10);
    const suffix = match[2] || '';
    const hasIndianGrouping = stat.value.includes('7,30,000') || rawDigits >= 100000;
    const hasUSGrouping = stat.value.includes(',') && !hasIndianGrouping;

    const duration = 1200; // 1.2 seconds, under 1.5s requirement
    const startTime = performance.now();

    let animationFrameId: number;

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic curve: fast start, soft deceleration
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentNumber = Math.round(easeOutProgress * rawDigits);

      let formattedNumber = currentNumber.toString();
      if (hasIndianGrouping) {
        formattedNumber = new Intl.NumberFormat('en-IN').format(currentNumber);
      } else if (hasUSGrouping) {
        formattedNumber = new Intl.NumberFormat('en-US').format(currentNumber);
      }

      if (progress < 1) {
        setDisplayValue(`${formattedNumber}${suffix}`);
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        // Guarantee exact original string at completion
        setDisplayValue(stat.value);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isTriggered, stat.value]);

  return (
    <div className="p-3.5 sm:p-4 rounded-2xl bg-kc-navy-card/60 border border-slate-800/80 shadow-elevation-low hover:border-kc-primary/60 card-elevation-interactive group">
      <div className={`w-8 h-8 rounded-lg bg-white/5 text-sky-400 flex items-center justify-center mx-auto mb-2 transition-all duration-500 ease-out group-hover:scale-110 ${isTriggered ? 'scale-100 opacity-100' : 'scale-75 opacity-40'}`}>
        <IconComponent className="w-4 h-4" />
      </div>
      <div className="text-xl sm:text-2xl font-black text-white tracking-tight tabular-nums">
        {displayValue}
      </div>
      <div className="text-xs font-semibold text-slate-200 mt-0.5">
        {stat.label}
      </div>
      <div className="text-[10px] text-slate-400 mt-0.5">
        {stat.subtext}
      </div>
    </div>
  );
}

export default function StatsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setHasTriggered(true);
      return;
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setHasTriggered(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasTriggered(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-kc-navy text-white py-8 sm:py-10 border-y border-slate-800 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Credibility Strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-center">
          {siteConfig.stats.map((stat, idx) => {
            const IconComponent = statIcons[idx % statIcons.length];
            return (
              <StatCounterItem
                key={stat.label}
                stat={stat}
                icon={IconComponent}
                isTriggered={hasTriggered}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

