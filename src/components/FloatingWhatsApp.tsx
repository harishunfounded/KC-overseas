'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function FloatingWhatsApp() {
  if (!siteConfig.features.enableFloatingWhatsApp) return null;

  const handleClick = () => {
    // Conversion tracking hook for WhatsApp Click
    if (typeof window !== 'undefined' && (window as any).gtag && siteConfig.tracking.whatsappConversionLabel) {
      (window as any).gtag('event', 'conversion', {
        send_to: `${siteConfig.tracking.googleAdsId}/${siteConfig.tracking.whatsappConversionLabel}`,
      });
    }
  };

  return (
    <aside
      aria-label="Contact via WhatsApp"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center group select-none"
    >
      {/* Tooltip on desktop hover */}
      <span className="hidden sm:inline-block mr-2.5 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with Namakkal Counsellor
      </span>

      {/* Floating Circular WhatsApp Button */}
      <a
        href={siteConfig.contact.whatsappChatUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        id="floating-whatsapp-btn"
        className="w-13 h-13 sm:w-14 sm:h-14 w-[54px] h-[54px] rounded-full bg-kc-whatsapp text-white flex items-center justify-center shadow-whatsapp-glow hover:bg-kc-whatsapp-hover active:scale-95 transition-all duration-300 relative group"
        title="Chat on WhatsApp with KC Namakkal"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />
        
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white relative z-10" />
      </a>
    </aside>
  );
}
