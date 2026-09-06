'use client';

import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Mail, Navigation, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function BranchDetailsMap() {
  return (
    <section id="branch" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-kc-primary font-bold text-xs uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" /> In-Person & Remote Support
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-kc-heading tracking-tight mt-2.5">
            Local Office & Contact Details
          </h2>
          <p className="text-xs sm:text-sm text-kc-muted mt-2">
            Serving students across Tamil Nadu with our local office in Namakkal. Walk in for an in-person counselling session or connect remotely.
          </p>
        </div>

        {/* 2-Column: Details Card + Map Iframe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Branch Credentials */}
          <div className="lg:col-span-5 bg-kc-surface rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-5">
              
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-kc-primary flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-kc-heading">Branch Address</h3>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                  <p className="text-[11px] font-semibold text-kc-primary mt-1">
                    Landmark: {siteConfig.contact.landmark}
                  </p>
                </div>
              </div>

              {/* Contact Numbers */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-kc-heading">Direct Helpline Numbers</h3>
                  <div className="flex flex-col gap-1 mt-1">
                    <a
                      href={`tel:${siteConfig.contact.phone1Clean}`}
                      className="text-xs font-bold text-kc-primary hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>{siteConfig.contact.phone1}</span>
                      <span className="text-[10px] bg-blue-100 text-kc-primary px-1.5 py-0.5 rounded font-medium">
                        Primary
                      </span>
                    </a>
                    <a
                      href={`tel:${siteConfig.contact.phone2Clean}`}
                      className="text-xs font-bold text-kc-primary hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>{siteConfig.contact.phone2}</span>
                      <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-medium">
                        Alternate
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Support */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-kc-whatsapp flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5 fill-kc-whatsapp text-white" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-kc-heading">WhatsApp Official Chat</h3>
                  <p className="text-xs text-slate-700 mt-1">
                    Instant profile queries & documentation checklist support.
                  </p>
                  <a
                    href={siteConfig.contact.whatsappChatUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:underline mt-0.5 inline-block"
                  >
                    Chat on {siteConfig.contact.whatsappNumber} →
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-kc-amber flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-kc-heading">Working Hours</h3>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    {siteConfig.contact.workingHours}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-kc-heading">Official Email</h3>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-xs text-slate-700 hover:text-kc-primary hover:underline mt-1 block"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

            </div>

            {/* Directions Button */}
            <div className="pt-6 border-t border-slate-200 mt-6">
              <a
                href={siteConfig.contact.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-kc-primary text-white text-xs sm:text-sm font-bold shadow-sm hover:bg-kc-primary-hover active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed (with clear placeholder comment for user) */}
          <div className="lg:col-span-7 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative min-h-[350px] lg:min-h-full flex flex-col">
            {/* Embedded Google Map iframe: Replace src with your exact embed key if preferred */}
            <iframe
              title="KC Overseas Education Namakkal Location Map"
              src={siteConfig.contact.mapEmbedUrl}
              className="w-full h-full flex-grow border-0 min-h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            
            <div className="bg-white/95 backdrop-blur-sm p-3 border-t border-slate-200 text-center flex items-center justify-between px-4 text-xs text-slate-600">
              <span>📍 Pranav Complex, Above Thangamayil Jewellery, Salem Road</span>
              <a
                href={siteConfig.contact.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-kc-primary font-bold hover:underline shrink-0 ml-2"
              >
                Open Full Map
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
