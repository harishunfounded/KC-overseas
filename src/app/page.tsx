'use client';

import React, { useState } from 'react';
import StickyHeader from '@/components/StickyHeader';
import IntakeBanner from '@/components/IntakeBanner';
import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import CountriesGrid from '@/components/CountriesGrid';
import ServicesGrid from '@/components/ServicesGrid';
import CTASection from '@/components/CTASection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialsSection from '@/components/TestimonialsSection';
import UpcomingBatches from '@/components/UpcomingBatches';
import BranchDetailsMap from '@/components/BranchDetailsMap';
import FullEnquirySection from '@/components/FullEnquirySection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StickyMobileBar from '@/components/StickyMobileBar';
import PromoPopup from '@/components/PromoPopup';
import { siteConfig } from '@/config/site';

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  return (
    <main className="min-h-screen flex flex-col bg-white text-kc-body">
      
      {/* 1. Sticky Header (<60px tall with brand, Call Now, and WhatsApp) */}
      <StickyHeader />

      {/* 2. Intake Banner (Editable INTAKE_LABEL) */}
      <IntakeBanner />

      {/* 3. Hero Section (Strict mobile above-the-fold CRO path + Desktop 2-column) */}
      <HeroSection />

      {/* 4. Trust & Credibility Stats Bar */}
      <StatsBar />

      {/* 5. 10 Target Study Destinations */}
      <CountriesGrid onSelectCountry={(c) => setSelectedCountry(c)} />

      {/* 6. Test Prep & Comprehensive Assistance Services */}
      <ServicesGrid />

      {/* 7. Mid-Page Conversion CTA Banner */}
      <CTASection
        id="cta-mid"
        title={`Admissions Open for ${siteConfig.intakeLabel}`}
        subtitle="University seats filling rapidly. Secure early fee waivers, application discounts, and profile evaluations today."
        variant="primary"
      />

      {/* 8. Why Choose KC Overseas Differentiators */}
      <WhyChooseUs />

      {/* 9. Second Conversion Strip */}
      <CTASection
        id="cta-strip-2"
        title="Get Guaranteed Guidance from British Council & IDP Certified Trainers"
        subtitle="Visit our Namakkal office or book an online virtual counselling session at your convenience."
        badge="100% Free Consultation • Trusted by 7.3 Lakh Students"
        variant="sand"
      />

      {/* 10. Student Testimonials & Success Stories */}
      <TestimonialsSection />

      {/* 11. Upcoming IELTS / PTE / GRE Batches */}
      <UpcomingBatches />

      {/* 12. Namakkal Branch Office Details & Embedded Map */}
      <BranchDetailsMap />

      {/* 13. Full Final Enquiry Form Capture Point */}
      <FullEnquirySection />

      {/* 14. Comprehensive Footer with Legal & Google Ads Disclaimers */}
      <Footer />

      {/* Floating & Persistent Conversion Elements */}
      <FloatingWhatsApp />
      <StickyMobileBar />
      <PromoPopup />

    </main>
  );
}
