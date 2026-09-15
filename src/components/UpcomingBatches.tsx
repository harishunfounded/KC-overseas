'use client';

import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function UpcomingBatches() {
  const handleReserveSeat = () => {
    const formElement = document.getElementById('enquiry-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="batches" className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-kc-heading tracking-tight">
            Upcoming Test Prep Batches
          </h2>
          <p className="text-xs sm:text-sm text-kc-muted mt-1.5">
            New batch every week • GRE alone is a monthly batch • For offline batches, contact us directly.
          </p>
        </div>

        {/* Batch Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {siteConfig.upcomingBatches.map((batch) => (
            <div
              key={batch.id}
              className="bg-slate-50/70 rounded-2xl p-4 border border-slate-200/80 hover:border-kc-primary hover:bg-white shadow-elevation-low card-elevation-interactive flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2 gap-2">
                  <span className="text-[10px] font-bold text-kc-primary bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100 inline-block truncate max-w-[170px]">
                    {batch.startDate}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Seats Open
                  </span>
                </div>

                <h3 className="font-extrabold text-sm text-kc-heading mb-2 leading-snug">
                  {batch.course}
                </h3>

                <div className="space-y-1.5 text-xs text-slate-500 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-kc-primary shrink-0" />
                    <span className="font-medium text-slate-700">{batch.startDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-kc-primary shrink-0" />
                    <span>{batch.timing}</span>
                  </div>
                  <div className="text-[11px] text-amber-700 bg-amber-50/80 border border-amber-200/60 rounded-lg px-2 py-1 font-medium">
                    {batch.mode}
                  </div>
                </div>
              </div>

              <button
                onClick={handleReserveSeat}
                className="w-full py-2 px-3 rounded-xl bg-kc-primary text-white text-xs font-bold shadow-sm hover:bg-kc-primary-hover cta-tactile flex items-center justify-center gap-1"
              >
                <span>Reserve Seat</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        {/* Offline Batch Notice Banner */}
        <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-amber-50/90 via-orange-50/50 to-amber-50/90 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center shrink-0 font-extrabold text-sm shadow-sm">
              📍
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">Looking for an Offline Batch in Namakkal?</h4>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                New batches start weekly (GRE monthly). For offline classroom batches at our Salem Road branch, contact us for immediate seat confirmation.
              </p>
            </div>
          </div>
          <a
            href={siteConfig.contact.whatsappChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-kc-whatsapp text-white text-xs font-bold hover:bg-kc-whatsapp-hover transition-all shadow-sm shrink-0 cta-tactile"
          >
            <span>Contact for Offline Batch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
