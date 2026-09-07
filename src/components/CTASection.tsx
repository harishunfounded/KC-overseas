'use client';

import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface CTASectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
  variant?: 'primary' | 'sand' | 'navy';
}

export default function CTASection({
  id = 'cta-section',
  title = 'Ready to Plan Your Study Abroad Journey?',
  subtitle = 'Get 1-on-1 profile evaluation, university shortlisting, and scholarship guidance from certified education counsellors.',
  badge = 'Zero Consultation Fee • Direct University Representative',
  variant = 'primary',
}: CTASectionProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'sand':
        return {
          wrapper: 'bg-gradient-to-r from-kc-sand via-[#FAF3EB] to-kc-sand animate-gradient-slow text-kc-heading border-y border-kc-sand-dark',
          badge: 'bg-white/80 text-kc-primary border border-amber-200',
          title: 'text-kc-heading',
          sub: 'text-slate-700',
          ctaBtn: 'bg-kc-primary text-white hover:bg-kc-primary-hover shadow-kc-md',
        };
      case 'navy':
        return {
          wrapper: 'bg-gradient-to-r from-kc-navy via-slate-900 to-[#122340] animate-gradient-slow text-white border-y border-slate-800',
          badge: 'bg-white/10 text-yellow-300 border border-white/20',
          title: 'text-white',
          sub: 'text-slate-300',
          ctaBtn: 'bg-kc-accent text-white hover:bg-kc-accent-hover shadow-cta-glow',
        };
      case 'primary':
      default:
        return {
          wrapper: 'bg-gradient-to-r from-kc-primary via-blue-600 to-[#1853B8] animate-gradient-slow text-white',
          badge: 'bg-white/15 text-yellow-300 border border-white/20',
          title: 'text-white',
          sub: 'text-blue-100',
          ctaBtn: 'bg-kc-accent text-white hover:bg-kc-accent-hover shadow-cta-glow',
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <section id={id} className={`py-10 sm:py-14 relative overflow-hidden ${styles.wrapper}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>
        )}

        {/* Title */}
        <h2 className={`text-2xl sm:text-3xl font-black tracking-tight max-w-2xl mx-auto leading-tight ${styles.title}`}>
          {title}
        </h2>

        {/* Subtitle */}
        <p className={`text-xs sm:text-sm max-w-xl mx-auto mt-2 leading-relaxed ${styles.sub}`}>
          {subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
          <a
            href="#enquiry-section"
            className={`min-h-[48px] px-6 sm:px-8 py-3 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 cta-tactile ${styles.ctaBtn}`}
          >
            <span>Book Free Counselling</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={siteConfig.contact.whatsappChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] px-6 sm:px-7 py-3 rounded-xl bg-kc-whatsapp text-white font-bold text-sm shadow-whatsapp-glow hover:bg-kc-whatsapp-hover cta-tactile flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Trust Note */}
        <p className="text-[11px] opacity-80 mt-4 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>In-person and online counselling sessions available Monday to Saturday.</span>
        </p>

      </div>
    </section>
  );
}
