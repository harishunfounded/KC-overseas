'use client';

import React from 'react';
import { Phone, MessageCircle, GraduationCap } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function StickyHeader() {
  const handleCallClick = () => {
    // Optional Google Ads Call tracking hook
    if (typeof window !== 'undefined' && (window as any).gtag && siteConfig.tracking.callConversionLabel) {
      (window as any).gtag('event', 'conversion', {
        send_to: `${siteConfig.tracking.googleAdsId}/${siteConfig.tracking.callConversionLabel}`,
      });
    }
  };

  const handleWhatsAppClick = () => {
    // Optional Google Ads WhatsApp tracking hook
    if (typeof window !== 'undefined' && (window as any).gtag && siteConfig.tracking.whatsappConversionLabel) {
      (window as any).gtag('event', 'conversion', {
        send_to: `${siteConfig.tracking.googleAdsId}/${siteConfig.tracking.whatsappConversionLabel}`,
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 h-12 sm:h-14 flex items-center justify-between">
        
        {/* Brand Logo & Branch Identification */}
        <a href="#hero" className="flex items-center gap-2 group shrink-0" aria-label="KC Overseas Education Namakkal Home">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-kc-primary flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-kc-heading text-sm sm:text-base tracking-tight flex items-center gap-1">
              KC OVERSEAS
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-kc-primary tracking-wide uppercase">
              Namakkal Branch
            </span>
          </div>
        </a>

        {/* Action Buttons (Call Now & WhatsApp) */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          
          {/* Direct Call Button (tel: link) */}
          <a
            href={`tel:${siteConfig.contact.phone1Clean}`}
            onClick={handleCallClick}
            id="header-call-btn"
            className="flex items-center justify-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-kc-call text-white text-xs sm:text-sm font-bold shadow-sm hover:bg-kc-call-hover active:scale-95 transition-all min-h-[38px] sm:min-h-[42px]"
            title={`Call KC Namakkal at ${siteConfig.contact.phone1}`}
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
            <span className="hidden xs:inline">Call Now</span>
            <span className="xs:hidden">Call</span>
          </a>

          {/* WhatsApp Direct Chat Button */}
          <a
            href={siteConfig.contact.whatsappChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            id="header-whatsapp-btn"
            className="flex items-center justify-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-kc-whatsapp text-white text-xs sm:text-sm font-bold shadow-sm hover:bg-kc-whatsapp-hover active:scale-95 transition-all min-h-[38px] sm:min-h-[42px]"
            title="Chat on WhatsApp with KC Namakkal"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
            <span className="hidden xs:inline">WhatsApp</span>
            <span className="xs:hidden">Chat</span>
          </a>

          {/* Desktop Counselling CTA */}
          <a
            href="#enquiry"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-full bg-kc-accent text-white text-sm font-bold shadow-cta-glow hover:bg-kc-accent-hover active:scale-95 transition-all ml-1"
          >
            Book Free Counselling
          </a>
        </div>

      </div>
    </header>
  );
}
