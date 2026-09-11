import React from 'react';
import AccordionGallery, { AccordionGalleryItem } from './AccordionGallery';
import { siteConfig } from '@/config/site';

const processSteps: AccordionGalleryItem[] = [
  {
    step: 'Step 01',
    label: 'Free Profile Evaluation',
    description: '1-on-1 academic analysis & global eligibility check',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
    link: '#hero',
  },
  {
    step: 'Step 02',
    label: 'University & Course Selection',
    description: 'Data-driven shortlisting across 1,200+ partner universities',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80',
    link: '#destinations',
  },
  {
    step: 'Step 03',
    label: 'Certified Test Preparation',
    description: 'British Council & IDP coaching for IELTS, PTE & GRE',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80',
    link: '#batches',
  },
  {
    step: 'Step 04',
    label: 'Application & Admission',
    description: 'End-to-end SOP, LOR review & rapid offer letter turnaround',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80',
    link: '#enquiry-section',
  },
  {
    step: 'Step 05',
    label: 'Education Loan Assistance',
    description: 'Quick sanction tie-ups with ₹25Cr+ scholarship access',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80',
    link: '#enquiry-section',
  },
  {
    step: 'Step 06',
    label: 'Student Visa Processing',
    description: '99% documented visa success with mock interview drills',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80',
    link: '#enquiry-section',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="process" className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-kc-primary mb-2.5">
            <span>Proven 6-Step Pathway</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-kc-heading tracking-tight">
            The KC Guidance Process
          </h2>
          <p className="text-xs sm:text-sm text-kc-muted mt-1.5">
            Structured, transparent support from your first counselling session to visa approval.
          </p>
        </div>

        {/* Dynamic Accordion Gallery from React Bits */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-200/80 bg-slate-950">
          <AccordionGallery
            items={processSteps}
            defaultIndex={0}
            height={460}
            mobileHeight={580}
            gap={10}
            radius={18}
            expandRatio={0.46}
            trigger="hover"
            accentColor="#f59e0b"
            overlayColor="#091122"
            textColor="#ffffff"
            grayscale={true}
            tilt={7}
            duration={0.6}
          />
        </div>

        {/* Mobile hint */}
        <p className="sm:hidden text-center text-[12px] text-slate-500 mt-3.5 flex items-center justify-center gap-1.5 font-medium">
          <span>👇 Scroll down or touch any step to explore</span>
        </p>

        {/* PREVIOUS 6-CARD GRID (Preserved for easy 1-click revert if needed):
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {siteConfig.whyChooseUs.map((item, idx) => (
            <div key={item.title} className="bg-slate-50/70 rounded-2xl p-4 border border-slate-200/80 ...">
              ...
            </div>
          ))}
        </div>
        */}

      </div>
    </section>
  );
}
