'use client';

import React, { useState, useEffect } from 'react';
import { X, Gift, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import EnquiryForm from './EnquiryForm';

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!siteConfig.features.enablePromoPopup) return;

    // Check if user already dismissed or saw the popup in this session
    const seen = sessionStorage.getItem('kc_promo_seen');
    if (seen) return;

    let triggered = false;

    const triggerPopup = () => {
      if (triggered) return;
      triggered = true;
      sessionStorage.setItem('kc_promo_seen', 'true');
      setIsOpen(true);
    };

    // 1. Desktop Exit-Intent: Detect mouse leaving viewport at the top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 15 && window.innerWidth >= 1024) {
        triggerPopup();
      }
    };

    // 2. Mobile 50% Scroll Depth Trigger
    const handleScroll = () => {
      if (window.innerWidth < 1024) {
        const scrolled = window.scrollY + window.innerHeight;
        const totalHeight = document.documentElement.scrollHeight;
        if (scrolled / totalHeight >= 0.5) {
          triggerPopup();
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shadow-sm"
          aria-label="Close special offer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-kc-primary to-blue-700 text-white p-5 sm:p-6 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none" />
          
          <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-yellow-400 text-slate-900 font-extrabold text-[10px] sm:text-xs uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            {siteConfig.promoPopupConfig.badge}
          </span>

          <h3 id="promo-modal-title" className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
            {siteConfig.promoPopupConfig.title}
          </h3>

          <p className="text-xs sm:text-sm text-yellow-200 font-semibold mt-1">
            {siteConfig.promoPopupConfig.worthText}
          </p>
        </div>

        {/* Body Form */}
        <div className="p-5 sm:p-6 bg-white">
          <div className="space-y-2 mb-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full Cambridge IELTS / PTE Diagnostic Mock Test</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Personalized Band Score Strategy from Certified Trainers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Free Scholarship & University Eligibility Evaluation</span>
            </div>
          </div>

          <EnquiryForm
            id="promo-popup-form"
            mode="quick"
            source="exit_intent_promo_popup"
            onSuccessCallback={() => {
              setTimeout(() => setIsOpen(false), 3000);
            }}
          />

          <p className="text-[10px] text-slate-400 text-center mt-3">
            Complimentary evaluation for students planning their international education.
          </p>
        </div>
      </div>
    </div>
  );
}
