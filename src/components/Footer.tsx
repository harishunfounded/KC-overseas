'use client';

import React from 'react';
import {
  GraduationCap,
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-kc-navy text-slate-300 pt-12 pb-24 lg:pb-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Brand & About */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-kc-primary flex items-center justify-center text-white font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-white text-base tracking-tight block">
                  KC OVERSEAS
                </span>
                <span className="text-[10px] text-sky-400 font-semibold uppercase">
                  Namakkal Branch
                </span>
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed text-xs">
              Pioneer in overseas education counselling in India with over 25+ years of industry experience, 1200+ partner universities, and 7,30,000+ success stories.
            </p>

            <div className="pt-1 flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Authorized Representative & Certified Trainers</span>
            </div>
          </div>

          {/* Col 2: Top Study Destinations */}
          <div>
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider mb-3.5">
              Study Destinations
            </h4>
            <ul className="space-y-2">
              {siteConfig.destinations.slice(0, 7).map((d) => (
                <li key={d.id}>
                  <a
                    href="#destinations"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-kc-primary" />
                    <span>Study in {d.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Test Prep & Services */}
          <div>
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider mb-3.5">
              Test Prep & Services
            </h4>
            <ul className="space-y-2">
              {siteConfig.services.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-kc-accent" />
                    <span>{s.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Namakkal Office Contact */}
          <div>
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider mb-3.5">
              Namakkal Branch
            </h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {siteConfig.contact.address}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${siteConfig.contact.phone1Clean}`} className="hover:text-white font-bold">
                    {siteConfig.contact.phone1}
                  </a>
                  <a href={`tel:${siteConfig.contact.phone2Clean}`} className="hover:text-white">
                    {siteConfig.contact.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-kc-whatsapp shrink-0" />
                <a
                  href={siteConfig.contact.whatsappChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-bold text-emerald-400"
                >
                  WhatsApp: {siteConfig.contact.whatsappNumber}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Mon – Sat: 9:30 AM – 7:30 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Compliance & Google Ads Policy Disclaimer */}
        <div className="border-t border-slate-800 pt-6 pb-4 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong>Disclaimer:</strong> KC Overseas Education Namakkal is an independent overseas education consulting firm providing university admission assistance, standardized test preparation, and student visa guidance. We are not affiliated with or an agency of any government, embassy, or consulate. All university names, logos, and trademarks belong to their respective institutions. Visa grants are at the sole discretion of the respective country’s immigration authorities.
          </p>
          <p>
            <strong>Privacy Assurance:</strong> We respect your confidentiality. Information submitted via this website is used solely to facilitate your education counselling and will never be sold or shared with unauthorized third parties.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800/60 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} KC Overseas Education. All rights reserved.</p>
          <p>Namakkal Branch, Tamil Nadu, India - 637001</p>
        </div>

      </div>
    </footer>
  );
}
