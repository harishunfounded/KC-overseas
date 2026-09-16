'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export interface AccordionGalleryItem {
  image: string;
  label?: string;
  step?: string;
  description?: string;
  link?: string;
  alt?: string;
}

export interface AccordionGalleryProps {
  items?: AccordionGalleryItem[];
  defaultIndex?: number;
  accentColor?: string;
  overlayColor?: string;
  textColor?: string;
  height?: number;
  mobileHeight?: number;
  gap?: number;
  radius?: number;
  expandRatio?: number;
  orientation?: 'horizontal' | 'vertical' | 'auto';
  duration?: number;
  ease?: string;
  parallax?: number;
  tilt?: number;
  stagger?: number;
  trigger?: 'hover' | 'click';
  showLabels?: boolean;
  grayscale?: boolean;
  className?: string;
}

export default function AccordionGallery({
  items = [],
  defaultIndex = 0,
  accentColor = '#f59e0b',
  className = '',
}: AccordionGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  if (!items || items.length === 0) return null;

  return (
    <div
      className={`w-full bg-slate-950 rounded-2xl p-2 sm:p-2.5 border border-slate-800 shadow-2xl overflow-hidden ${className}`}
    >
      {/* Desktop View: Horizontal Fluid Flex Accordion */}
      <div className="hidden md:flex flex-row w-full h-[460px] gap-2 lg:gap-2.5">
        {items.map((item, idx) => {
          const isActive = activeIndex === idx;

          return (
            <div
              key={item.step || idx}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(idx)}
              className={`relative rounded-xl overflow-hidden cursor-pointer transition-[flex] duration-500 ease-out flex flex-col justify-end p-5 group select-none ${
                isActive ? 'flex-[3.5]' : 'flex-1'
              }`}
            >
              {/* Background Photo with Next.js Image */}
              <Image
                src={item.image}
                alt={item.alt || item.label || 'KC Overseas Process'}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover object-center transition-all duration-700 ease-out ${
                  isActive ? 'scale-105 filter-none' : 'grayscale group-hover:grayscale-0 scale-100 opacity-60'
                }`}
                unoptimized
              />

              {/* Ambient Gradient Overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                  isActive
                    ? 'bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-95'
                    : 'bg-slate-950/70 group-hover:bg-slate-950/50 opacity-90'
                }`}
              />

              {/* Card Content */}
              <div className="relative z-10 w-full">
                {isActive ? (
                  <div className="space-y-2 animate-hero-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="px-2.5 py-0.5 rounded-full text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-sm"
                        style={{ backgroundColor: accentColor }}
                      >
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-black text-white leading-tight drop-shadow-md">
                      {item.label}
                    </h3>

                    <p className="text-xs lg:text-sm text-slate-200 leading-relaxed max-w-md drop-shadow">
                      {item.description}
                    </p>

                    <div className="pt-2">
                      <a
                        href={item.link || '#enquiry-section'}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-white transition-colors"
                      >
                        <span>Start This Step</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-between h-full py-2">
                    <span className="text-[11px] font-black text-amber-400/90 uppercase tracking-wider">
                      {item.step}
                    </span>
                    <span className="font-extrabold text-xs text-white/90 [writing-mode:vertical-lr] rotate-180 tracking-wide py-3 truncate max-h-[220px]">
                      {item.label}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile View: Vertical Fluid Accordion with Touch Expand */}
      <div className="flex md:hidden flex-col gap-2 w-full">
        {items.map((item, idx) => {
          const isActive = activeIndex === idx;

          return (
            <div
              key={item.step || idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-400 ease-out flex flex-col justify-end p-4 group select-none ${
                isActive ? 'min-h-[220px]' : 'min-h-[64px]'
              }`}
            >
              {/* Background Photo */}
              <Image
                src={item.image}
                alt={item.alt || item.label || 'KC Process'}
                fill
                sizes="100vw"
                className={`object-cover object-center transition-all duration-500 ${
                  isActive ? 'scale-105 filter-none' : 'grayscale opacity-50'
                }`}
                unoptimized
              />

              {/* Dark Overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                  isActive
                    ? 'bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40'
                    : 'bg-slate-950/80'
                }`}
              />

              {/* Mobile Content */}
              <div className="relative z-10 w-full">
                {isActive ? (
                  <div className="space-y-1.5">
                    <span
                      className="inline-block px-2 py-0.5 rounded-full text-slate-950 text-[9px] font-black uppercase tracking-wider"
                      style={{ backgroundColor: accentColor }}
                    >
                      {item.step}
                    </span>
                    <h3 className="text-base font-black text-white leading-snug">
                      {item.label}
                    </h3>
                    <p className="text-xs text-slate-200 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-amber-400">
                      {item.step}
                    </span>
                    <span className="text-xs font-bold text-white truncate max-w-[200px]">
                      {item.label}
                    </span>
                    <span className="text-slate-400 text-xs font-bold">Tap to view</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
