'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { siteConfig } from '@/config/site';

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-elevation-low'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 h-12 sm:h-14 flex items-center justify-between">
        
        {/* Brand Logo & Identification */}
        <a href="/#hero" className="flex items-center group shrink-0" aria-label="KC Overseas Education Home">
          <Image
            src="/kc-overseas-logo.png"
            alt="KC Overseas Education"
            width={180}
            height={40}
            priority
            className="h-[28px] xs:h-[30px] sm:h-[36px] md:h-[38px] w-auto object-contain transition-transform duration-200 group-hover:opacity-90"
          />
        </a>

        {/* Action Buttons (Call Now & WhatsApp) */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          
          {/* Direct Call Button (tel: link) */}
          <a
            href={`tel:${siteConfig.contact.phone1Clean}`}
            onClick={handleCallClick}
            id="header-call-btn"
            className="flex items-center justify-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-kc-call text-white text-xs sm:text-sm font-bold shadow-sm hover:bg-kc-call-hover cta-tactile min-h-[38px] sm:min-h-[42px]"
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
            className="flex items-center justify-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-kc-whatsapp text-white text-xs sm:text-sm font-bold shadow-sm hover:bg-kc-whatsapp-hover cta-tactile min-h-[38px] sm:min-h-[42px]"
            title="Chat on WhatsApp with KC Namakkal"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
            <span className="whitespace-nowrap">WhatsApp Chat</span>
          </a>

          {/* Desktop Counselling CTA */}
          <a
            href="/#enquiry-section"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-full bg-kc-accent text-white text-sm font-bold shadow-cta-glow hover:bg-kc-accent-hover cta-tactile ml-1"
          >
            Book Free Counselling
          </a>
        </div>

      </div>
    </header>
  );
}
