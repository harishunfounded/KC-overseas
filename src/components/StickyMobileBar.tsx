'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
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

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag && siteConfig.tracking.whatsappConversionLabel) {
      (window as any).gtag('event', 'conversion', {
        send_to: `${siteConfig.tracking.googleAdsId}/${siteConfig.tracking.whatsappConversionLabel}`,
      });
    }
  };

  return (
    <aside
      aria-label="Quick Contact Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        
        {/* Call Now Button (tel: link) */}
        <a
          href={`tel:${siteConfig.contact.phone1Clean}`}
          onClick={handleCallClick}
          id="mobile-sticky-call-btn"
          className="min-h-[48px] px-3 py-2.5 rounded-xl bg-kc-call text-white text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-sm cta-tactile hover:bg-kc-call-hover"
        >
          <Phone className="w-4 h-4 fill-white shrink-0" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Direct Chat Button */}
        <a
          href={siteConfig.contact.whatsappChatUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          id="mobile-sticky-whatsapp-btn"
          className="min-h-[48px] px-3 py-2.5 rounded-xl bg-kc-whatsapp text-white text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-whatsapp-glow cta-tactile hover:bg-kc-whatsapp-hover"
        >
          <MessageCircle className="w-4 h-4 fill-white shrink-0" />
          <span>WhatsApp</span>
        </a>

      </div>
    </aside>
  );
}

