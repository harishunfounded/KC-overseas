'use client';

import React from 'react';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function StickyMobileBar() {
  if (!siteConfig.features.enableStickyMobileBar) return null;

  const handleCallClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag && siteConfig.tracking.callConversionLabel) {
      (window as any).gtag('event', 'conversion', {
        send_to: `${siteConfig.tracking.googleAdsId}/${siteConfig.tracking.callConversionLabel}`,
      });
    }
  };

  const scrollToForm = () => {
    const form = document.getElementById('enquiry-section') || document.getElementById('enquiry');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Quick Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* Call Now Button (tel: link) */}
        <a
          href={`tel:${siteConfig.contact.phone1Clean}`}
          onClick={handleCallClick}
          id="mobile-sticky-call-btn"
          className="flex-1 min-h-[48px] px-3 py-2.5 rounded-xl bg-kc-call text-white text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-sm cta-tactile"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>Call Now</span>
        </a>

        {/* Book Free Counselling Button (Smooth Scroll to Form) */}
        <button
          onClick={scrollToForm}
          id="mobile-sticky-counselling-btn"
          className="flex-[1.5] min-h-[48px] px-3 py-2.5 rounded-xl bg-kc-accent text-white text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-cta-glow cta-tactile"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Free Counselling</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </aside>
  );
}
