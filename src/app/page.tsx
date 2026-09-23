'use client';

import React, { useState } from 'react';
import StickyHeader from '@/components/StickyHeader';
import IntakeBanner from '@/components/IntakeBanner';
import HeroSection from '@/components/HeroSection';
import CountriesGrid from '@/components/CountriesGrid';
import ServicesGrid from '@/components/ServicesGrid';
import CTASection from '@/components/CTASection';
import SearchSelectionSection from '@/components/SearchSelectionSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQSection from '@/components/FAQSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import UpcomingBatches from '@/components/UpcomingBatches';
import BranchDetailsMap from '@/components/BranchDetailsMap';
import FullEnquirySection from '@/components/FullEnquirySection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StickyMobileBar from '@/components/StickyMobileBar';
import PromoPopup from '@/components/PromoPopup';
import SectionReveal from '@/components/SectionReveal';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import { siteConfig } from '@/config/site';

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  return (
    <main className="min-h-screen flex flex-col bg-white text-kc-body">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgressBar />
      
      {/* 1. Sticky Header (<60px tall with brand, Call Now, and WhatsApp) */}
      <StickyHeader />

      {/* 2. Intake Banner (Editable INTAKE_LABEL) */}
      <IntakeBanner />

      {/* 3. Hero Section (Strict mobile above-the-fold CRO path + Desktop 2-column) */}
      <HeroSection />

      {/* 4. 10 Target Study Destinations */}
      <SectionReveal>
        <CountriesGrid onSelectCountry={(c) => setSelectedCountry(c)} />
      </SectionReveal>

      {/* 5. Search & Selection Option for Public Universities */}
      <SectionReveal>
        <SearchSelectionSection />
      </SectionReveal>

      {/* 6. Test Prep & Comprehensive Assistance Services */}
      <SectionReveal>
        <ServicesGrid />
      </SectionReveal>

      {/* 7. Mid-Page Conversion CTA Banner */}
      <SectionReveal>
        <CTASection
          id="cta-mid"
          title={siteConfig.intakeLabel}
          subtitle="University admission rounds and scholarship evaluations are currently open."
          variant="primary"
        />
      </SectionReveal>

      {/* 8. Why Choose KC Overseas Differentiators */}
      <SectionReveal>
        <WhyChooseUs />
      </SectionReveal>

      {/* 9. Second Conversion Strip */}
      <SectionReveal>
        <CTASection
          id="cta-strip-2"
          title="Are You Looking for Language Training?"
          subtitle="Personalized coaching and mock tests from British Council certified mentors to help you achieve your target scores."
          badge="Official Test Partner • 25+ Years of Trust"
          variant="sand"
        />
      </SectionReveal>

      {/* 10. Upcoming Test Prep Batches */}
      <SectionReveal>
        <UpcomingBatches />
      </SectionReveal>

      {/* 11. Check what Our Students Say */}
      <SectionReveal>
        <TestimonialsSection />
      </SectionReveal>

      {/* 12. Begin Your Overseas Education Journey */}
      <SectionReveal>
        <FullEnquirySection />
      </SectionReveal>

      {/* 13. Local Office & Contact Details */}
      <SectionReveal>
        <BranchDetailsMap />
      </SectionReveal>

      {/* 14. Frequently Asked Questions */}
      <SectionReveal>
        <FAQSection />
      </SectionReveal>

      {/* 15. Comprehensive Footer with Legal & Google Ads Disclaimers */}
      <SectionReveal>
        <Footer />
      </SectionReveal>

      {/* Floating & Persistent Conversion Elements */}
      <FloatingWhatsApp />
      <StickyMobileBar />
      <PromoPopup />

    </main>
  );
}
