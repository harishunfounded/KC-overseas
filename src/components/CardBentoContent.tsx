'use client';

import React from 'react';
import CountUp from './CountUp';
import { GraduationCap, Sparkles } from 'lucide-react';

interface CardBentoContentProps {
  className?: string;
  animate?: boolean;
}

export default function CardBentoContent({
  className = '',
  animate = true,
}: CardBentoContentProps) {
  return (
    <div
      className={`w-full h-full bg-gradient-to-b from-[#091122] via-[#0b162c] to-[#060b17] text-white p-3.5 sm:p-4 flex flex-col justify-between select-none ${className}`}
    >
      {/* 1. Header: Logo, Title & Active Badge */}
      <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-kc-primary flex items-center justify-center shadow-md border border-white/20 shrink-0">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1.5">
              <span>KC Overseas Education</span>
            </div>
            <div className="text-[10px] text-slate-400 font-medium">
              Official Representative • Namakkal & TN
            </div>
          </div>
        </div>
        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-[9px] font-bold text-emerald-400 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>ACTIVE</span>
        </div>
      </div>

      {/* 2. Bento Grid 2x3 */}
      <div className="grid grid-cols-2 gap-2 my-2">
        {/* Cell 1: 25+ Years */}
        <div className="relative rounded-xl p-2.5 bg-slate-900/75 border border-white/10 backdrop-blur-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="px-1.5 py-0.5 rounded text-[8.5px] font-extrabold bg-amber-400/15 text-amber-300 border border-amber-400/25">
              SINCE 1998
            </span>
          </div>
          <div className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-baseline">
            {animate ? (
              <CountUp from={0} to={25} duration={1.8} />
            ) : (
              <span>25</span>
            )}
            <span className="text-amber-400 ml-0.5">+</span>
            <span className="text-xs font-bold text-slate-200 ml-1">Years</span>
          </div>
          <div className="text-[10.5px] font-bold text-slate-200">Industry Trust</div>
          <div className="text-[9px] text-slate-400">Established in 1998</div>
        </div>

        {/* Cell 2: 1,200+ Partner Universities */}
        <div className="relative rounded-xl p-2.5 bg-slate-900/75 border border-white/10 backdrop-blur-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="px-1.5 py-0.5 rounded text-[8.5px] font-extrabold bg-sky-400/15 text-sky-300 border border-sky-400/25">
              TOP RANKED
            </span>
          </div>
          <div className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-baseline">
            {animate ? (
              <CountUp from={0} to={1200} separator="," duration={2} />
            ) : (
              <span>1,200</span>
            )}
            <span className="text-sky-400 ml-0.5">+</span>
          </div>
          <div className="text-[10.5px] font-bold text-slate-200">Partner Universities</div>
          <div className="text-[9px] text-slate-400">Direct representation</div>
        </div>

        {/* Cell 3: 7,30,000+ Students Placed */}
        <div className="relative rounded-xl p-2.5 bg-slate-900/75 border border-white/10 backdrop-blur-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="px-1.5 py-0.5 rounded text-[8.5px] font-extrabold bg-emerald-400/15 text-emerald-300 border border-emerald-400/25">
              GLOBAL
            </span>
          </div>
          <div className="text-[17px] xs:text-xl sm:text-2xl font-black text-white tracking-tight flex items-baseline">
            {animate ? (
              <CountUp from={0} to={730000} separator="," locale="en-IN" duration={2.2} />
            ) : (
              <span>7,30,000</span>
            )}
            <span className="text-emerald-400 ml-0.5">+</span>
          </div>
          <div className="text-[10.5px] font-bold text-slate-200">Students Placed</div>
          <div className="text-[9px] text-slate-400">Across 47+ countries</div>
        </div>

        {/* Cell 4: 99% Visa Success Rate */}
        <div className="relative rounded-xl p-2.5 bg-slate-900/75 border border-white/10 backdrop-blur-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="px-1.5 py-0.5 rounded text-[8.5px] font-extrabold bg-teal-400/15 text-teal-300 border border-teal-400/25">
              DOCUMENTED
            </span>
          </div>
          <div className="text-xl sm:text-2xl font-black text-teal-300 tracking-tight flex items-baseline">
            {animate ? (
              <CountUp from={0} to={99} duration={1.8} />
            ) : (
              <span>99</span>
            )}
            <span className="ml-0.5">%</span>
          </div>
          <div className="text-[10.5px] font-bold text-slate-200">Visa Success Rate</div>
          <div className="text-[9px] text-slate-400">Documented track record</div>
        </div>

        {/* Cell 5: 55+ Offices */}
        <div className="relative rounded-xl p-2.5 bg-slate-900/75 border border-white/10 backdrop-blur-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="px-1.5 py-0.5 rounded text-[8.5px] font-extrabold bg-indigo-400/15 text-indigo-300 border border-indigo-400/25">
              PAN-INDIA
            </span>
          </div>
          <div className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-baseline">
            {animate ? (
              <CountUp from={0} to={55} duration={1.6} />
            ) : (
              <span>55</span>
            )}
            <span className="text-indigo-400 ml-0.5">+</span>
          </div>
          <div className="text-[10.5px] font-bold text-slate-200">Offices in India</div>
          <div className="text-[9px] text-slate-400">Pan-India network & TN</div>
        </div>

        {/* Cell 6: British Council & IDP */}
        <div className="relative rounded-xl p-2.5 bg-slate-900/75 border border-white/10 backdrop-blur-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="px-1.5 py-0.5 rounded text-[8.5px] font-extrabold bg-purple-400/15 text-purple-300 border border-purple-400/25">
              OFFICIAL
            </span>
          </div>
          <div className="text-base sm:text-lg font-black text-amber-300 tracking-tight leading-tight">
            British Council
          </div>
          <div className="text-[10.5px] font-bold text-slate-200">Certified Trainers</div>
          <div className="text-[9px] text-slate-400">& IDP official partners</div>
        </div>
      </div>

      {/* 3. Rating Row */}
      <div className="flex items-center justify-center gap-1.5 py-1 text-center">
        <div className="flex text-amber-400 text-xs">
          {'★'.repeat(5)}
        </div>
        <span className="text-xs font-black text-white ml-1">
          {animate ? (
            <CountUp from={0} to={4.9} duration={1.5} />
          ) : (
            '4.9'
          )}{' '}
          / 5
        </span>
        <span className="text-[10px] text-slate-400">
          (3,500+ Verified Student Reviews)
        </span>
      </div>

      {/* 4. Bottom Green Scholarship Pill */}
      <div className="w-full py-1.5 px-2.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center gap-1.5 text-[10px] font-black tracking-wide text-emerald-300">
        <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        <span>
          ₹{animate ? <CountUp from={0} to={25} duration={2} /> : '25'}Cr+ TOTAL SCHOLARSHIPS UNLOCKED
        </span>
      </div>
    </div>
  );
}
