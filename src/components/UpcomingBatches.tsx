'use client';

import React from 'react';
import { Calendar, Clock, Users, ArrowRight, BookOpen } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function UpcomingBatches() {
  const handleReserveSeat = (courseName: string) => {
    const formElement = document.getElementById('enquiry-section') || document.getElementById('enquiry');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="batches" className="py-12 sm:py-16 bg-kc-surface border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-kc-primary font-bold text-xs uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" /> Fast-Track Coaching Batches
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-kc-heading tracking-tight mt-2.5">
            Upcoming Test Prep Batches at Namakkal
          </h2>
          <p className="text-xs sm:text-sm text-kc-muted mt-2">
            Limited seats per batch to guarantee personal feedback and 1-on-1 speaking evaluation with certified trainers.
          </p>
        </div>

        {/* Batch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {siteConfig.upcomingBatches.map((batch) => (
            <div
              key={batch.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-kc-primary transition-all flex flex-col justify-between"
            >
              <div>
                {/* Course Header & Mode */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold text-kc-primary bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                    {batch.mode}
                  </span>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
                    <Users className="w-3 h-3" /> {batch.seatsLeft} Seats Left
                  </span>
                </div>

                <h3 className="font-extrabold text-base text-kc-heading mb-2 leading-snug">
                  {batch.course}
                </h3>

                {/* Batch Specs */}
                <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-kc-primary shrink-0" />
                    <span><strong>Starts:</strong> {batch.startDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-kc-primary shrink-0" />
                    <span><strong>Timing:</strong> {batch.timing}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-kc-primary shrink-0" />
                    <span><strong>Duration:</strong> {batch.duration}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleReserveSeat(batch.course)}
                className="w-full py-2.5 px-3 rounded-xl bg-kc-primary text-white text-xs font-bold hover:bg-kc-primary-hover active:scale-95 transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Reserve Batch Seat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Free Demo Callout */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-600">
            Want to test before joining?{' '}
            <a href="#enquiry" className="text-kc-primary font-bold underline hover:text-kc-primary-hover">
              Attend a Free 1-Day Demo Class
            </a>{' '}
            or take our free diagnostic level test.
          </p>
        </div>

      </div>
    </section>
  );
}
