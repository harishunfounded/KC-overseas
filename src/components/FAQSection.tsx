'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Why choose KC Overseas as your study abroad consultant in Tamil Nadu?',
    answer:
      'With over 25 years of established trust and 1,200+ partner universities across 47+ countries, KC Overseas Education is a premier study abroad consultant in Tamil Nadu. Our certified overseas education consultants offer 100% free personalized counselling, transparent admission pathways, and a proven 99% visa success rate for students across Tamil Nadu.',
  },
  {
    question: 'What is covered in your free study abroad counselling session?',
    answer:
      'Our 1-on-1 study abroad counselling includes a thorough academic profile evaluation, country and university shortlisting tailored to your budget, and scholarship eligibility assessment. We also provide complete career roadmap guidance and financial planning with zero hidden charges.',
  },
  {
    question: 'How does your study abroad admission guidance and application assistance work?',
    answer:
      'We provide end-to-end study abroad admission guidance, from drafting standout Statements of Purpose (SOPs) and Letters of Recommendation (LORs) to university application assistance across official institutional portals. Our dedicated relationship managers ensure error-free documentation and rapid offer letter turnaround within 48–72 hours.',
  },
  {
    question: 'Do your foreign education consultants provide student visa assistance?',
    answer:
      'Yes, our foreign education consultants manage the entire visa filing lifecycle, including financial documentation review, biometric scheduling, and intensive mock interview drills. Thanks to our rigorous process, we maintain an industry-leading 99% documented visa success record.',
  },
  {
    question: 'Can your overseas education consultancy help with education loans and scholarships?',
    answer:
      'As a full-service overseas education consultancy, we maintain tie-ups with top nationalized and private banking partners for rapid collateral and non-collateral loan sanctions. We also actively help students identify and apply for ₹25Cr+ in university merit awards, regional bursaries, and government grants.',
  },
  {
    question: 'When should I begin my application process for upcoming intakes?',
    answer:
      'Experienced study abroad education consultants recommend beginning 6 to 9 months before your target intake (e.g. starting in summer for Spring/January intakes). This provides ample runway for standardized test prep, university shortlisting, offer letter acceptance, and student visa processing without last-minute delays.',
  },
  {
    question: 'Do you provide certified test preparation coaching for IELTS, PTE, and GRE?',
    answer:
      'Yes, our study abroad consultants provide comprehensive training led by British Council and IDP certified master mentors. We offer flexible weekday and weekend batches, interactive AI computer lab practice, regular full-length mock tests, and personalized score enhancement strategies.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  // Schema.org FAQPage JSON-LD structured data matching visible content exactly
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-12 sm:py-16 bg-white border-b border-slate-100 relative">
      {/* FAQPage JSON-LD Structured Data for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-kc-primary mb-2.5 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-kc-primary" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-kc-heading tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-kc-muted mt-1.5">
            Transparent insights to help you navigate overseas admissions with complete confidence.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-blue-200/90 shadow-[0_4px_20px_rgba(0,82,204,0.06)] ring-1 ring-blue-100'
                    : 'bg-slate-50/70 border-slate-200/70 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-4 sm:px-6 text-left flex items-center justify-between gap-3 sm:gap-4 select-none group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-xs sm:text-sm md:text-base font-bold transition-colors leading-snug ${
                      isOpen ? 'text-kc-primary' : 'text-slate-900 group-hover:text-kc-primary'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-blue-50 text-kc-primary rotate-180'
                        : 'bg-white text-slate-400 border border-slate-200 group-hover:text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed px-4 sm:px-6 pb-4 pt-1 border-t border-slate-100/80">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Consultation Prompt below FAQ */}
        <div className="mt-8 sm:mt-10 text-center p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50/60 via-sky-50/40 to-blue-50/60 border border-blue-100/80 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="text-left">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900">Have a specific question about your profile?</h3>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Talk to our senior counsellors for personalized guidance.</p>
          </div>
          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-kc-primary hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm shrink-0"
          >
            <span>Book Free 1-on-1 Counselling</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
