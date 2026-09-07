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
            Flexible classroom and live online options with British Council & IDP certified mentors.
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
                <span className="text-[10px] font-bold text-kc-primary bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100 inline-block mb-2">
                  {batch.mode}
                </span>

                <h3 className="font-extrabold text-sm text-kc-heading mb-2 leading-snug">
                  {batch.course}
                </h3>

                <div className="space-y-1 text-xs text-slate-500 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-kc-primary shrink-0" />
                    <span>{batch.startDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-kc-primary shrink-0" />
                    <span>{batch.timing}</span>
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

      </div>
    </section>
  );
}
