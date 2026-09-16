'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, Download, FileText, CheckCircle2, ShieldAlert, Sparkles, Lock } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Close on Escape & Prevent Background Scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }

      // Simple focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length > 0) {
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Smoothly focus first input
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 50);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setName('');
      setPhone('');
      setErrors({});
      setIsSubmitting(false);
      setIsSuccess(false);
      setApiError(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { name?: string; phone?: string } = {};

    if (!name.trim() || name.trim().length < 2) {
      errs.name = 'Please enter your full name (at least 2 characters).';
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const triggerPdfDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = '/brochure/kc-overseas-brochure.pdf';
      link.download = 'kc-overseas-brochure.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.error('Download trigger error:', e);
      window.open('/brochure/kc-overseas-brochure.pdf', '_blank');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const cleanPhone = phone.replace(/[^0-9]/g, '');
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: cleanPhone,
          source: 'brochure_download',
          preferredCountry: 'Brochure Download',
          preferredService: 'Study Abroad Brochure',
          submittedAt: new Date().toISOString(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
        // Immediately trigger actual file download
        triggerPdfDownload();

        // Auto close after 3.5 seconds
        setTimeout(() => {
          onClose();
        }, 3500);
      } else {
        setApiError(data.message || 'Unable to process your request. Please try again.');
      }
    } catch (err) {
      setApiError('Network connection issue. Please verify your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="brochure-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col animate-scale-in"
      >
        {/* Modal Header Strip */}
        <div className="bg-gradient-to-r from-kc-primary via-blue-700 to-indigo-800 p-5 sm:p-6 text-white relative">
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close brochure modal"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 border border-white/20 text-[10px] sm:text-xs font-semibold text-amber-300 mb-2 shadow-xs">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>Official Study Abroad Guide 2025–2026</span>
          </div>

          <h2
            id="brochure-modal-title"
            className="text-lg sm:text-xl font-black tracking-tight leading-snug"
          >
            Get Our Free Study Abroad Brochure
          </h2>
          <p className="text-xs text-blue-100 mt-1 leading-relaxed">
            Instant 8-page PDF guide covering top countries, university admissions, scholarships &amp; visa guidance.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {isSuccess ? (
            /* Success State */
            <div className="text-center py-4 space-y-3 animate-fade-in">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8 animate-scale-in" />
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                Thanks, {name.trim() || 'Student'}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                Your download is starting now. Check your browser downloads folder.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={triggerPdfDownload}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-kc-primary hover:text-blue-700 hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Click here if the download didn&apos;t start automatically</span>
                </button>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
              {apiError && (
                <div className="p-3 text-xs rounded-xl bg-red-50 text-red-700 border border-red-200 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{apiError}</span>
                </div>
              )}

              {/* Name Field */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border ${
                    errors.name ? 'border-red-400 bg-red-50/50 text-red-900' : 'border-slate-200 text-slate-900'
                  } placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white transition-all`}
                />
                {errors.name && (
                  <p className="text-[11px] mt-1 font-medium text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Mobile Number Field with +91 Prefix */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="flex rounded-xl shadow-xs">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold">
                    +91
                  </span>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                    }}
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-r-xl border ${
                      errors.phone ? 'border-red-400 bg-red-50/50 text-red-900' : 'border-slate-200 text-slate-900'
                    } bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white transition-all`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-[11px] mt-1 font-medium text-red-600">{errors.phone}</p>
                )}
              </div>

              {/* PDF Preview Snapshot Pill */}
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-200">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="text-[11px] text-slate-600">
                  <strong className="text-slate-900 font-semibold">KC Overseas Brochure</strong> • 8 Pages (PDF, ~993 KB)
                  <div className="text-slate-400 text-[10px]">Instant download starts right after submitting</div>
                </div>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-kc-accent hover:bg-kc-accent-hover active:bg-[#E85B3F] text-white font-black text-xs sm:text-sm tracking-wide shadow-cta-glow hover:shadow-[0_6px_25px_rgba(255,112,84,0.45)] transition-all cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Preparing Your Download...</span>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download Brochure Now</span>
                  </>
                )}
              </button>

              {/* Privacy Reassurance */}
              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 text-center pt-1">
                <Lock className="w-3 h-3 text-slate-400" />
                <span>Zero spam • 100% confidential • Verified guidance</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
