'use client';

import React, { useRef, useEffect, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import './MagicBento.css';

export interface DestinationBentoItem {
  id: string;
  name: string;
  code: string;
  flag: string;
  oneLiner: string;
  highlight?: string;
  span?: string;
  glowColor: string; // "R, G, B"
  flagGradient: string; // CSS gradient string
  accentColor?: string;
}

export interface MagicBentoProps {
  destinations?: DestinationBentoItem[];
  onSelectCountry?: (country: DestinationBentoItem) => void;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
  className?: string;
}

export const DEFAULT_DESTINATIONS: DestinationBentoItem[] = [
  {
    id: 'uk',
    name: 'United Kingdom',
    code: 'UK',
    flag: '🇬🇧',
    oneLiner: '1-year Master’s & 2-year post-study work visa at world-ranked universities.',
    highlight: 'Top Pick for 1-Yr Masters',
    span: '',
    glowColor: '59, 130, 246', // Royal Union Blue
    flagGradient:
      'radial-gradient(ellipse at top right, rgba(220, 38, 38, 0.45), transparent 60%), radial-gradient(ellipse at bottom left, rgba(1, 33, 105, 0.65), transparent 70%), linear-gradient(135deg, #091122 0%, #101c38 100%)',
    accentColor: '#3b82f6',
  },
  {
    id: 'usa',
    name: 'United States',
    code: 'USA',
    flag: '🇺🇸',
    oneLiner: 'Top research universities with up to 3 years STEM OPT stay-back rights.',
    highlight: 'World #1 in Research',
    span: '',
    glowColor: '239, 68, 68', // Old Glory Red
    flagGradient:
      'radial-gradient(ellipse at top right, rgba(220, 38, 38, 0.5), transparent 60%), radial-gradient(ellipse at bottom left, rgba(30, 58, 138, 0.65), transparent 70%), linear-gradient(135deg, #0d1322 0%, #1e1324 100%)',
    accentColor: '#ef4444',
  },
  {
    id: 'canada',
    name: 'Canada',
    code: 'CA',
    flag: '🇨🇦',
    oneLiner: 'World-class education with direct PGWP work permits & PR opportunities.',
    highlight: 'Direct PR Pathways',
    span: '',
    glowColor: '239, 68, 68', // Canadian Crimson
    flagGradient:
      'radial-gradient(circle at top right, rgba(239, 68, 68, 0.55), transparent 60%), radial-gradient(circle at bottom left, rgba(185, 28, 28, 0.45), transparent 60%), linear-gradient(135deg, #140d12 0%, #201018 100%)',
    accentColor: '#ef4444',
  },
  {
    id: 'australia',
    name: 'Australia',
    code: 'AU',
    flag: '🇦🇺',
    oneLiner: 'Group of Eight prestigious universities & extended post-study work rights.',
    highlight: 'Go8 Universities',
    span: '',
    glowColor: '14, 165, 233', // Ocean Coast Blue
    flagGradient:
      'radial-gradient(circle at top right, rgba(14, 165, 233, 0.5), transparent 60%), radial-gradient(circle at bottom left, rgba(234, 88, 12, 0.35), transparent 60%), linear-gradient(135deg, #091322 0%, #0d2238 100%)',
    accentColor: '#38bdf8',
  },
  {
    id: 'germany',
    name: 'Germany',
    code: 'DE',
    flag: '🇩🇪',
    oneLiner: 'TU9 universities with zero tuition fees at world-class public institutions.',
    highlight: 'Zero Tuition Fees',
    span: '',
    glowColor: '245, 158, 11', // German Gold/Amber
    flagGradient:
      'radial-gradient(circle at top right, rgba(245, 158, 11, 0.5), transparent 60%), radial-gradient(circle at bottom left, rgba(220, 38, 38, 0.45), transparent 60%), linear-gradient(135deg, #181409 0%, #241a0d 100%)',
    accentColor: '#fbbf24',
  },
  {
    id: 'ireland',
    name: 'Ireland',
    code: 'IE',
    flag: '🇮🇪',
    oneLiner: 'Silicon Valley of Europe, top tech headquarters & 2-year stay-back visa.',
    highlight: 'European Tech Hub',
    span: '',
    glowColor: '34, 197, 94', // Irish Emerald Green
    flagGradient:
      'radial-gradient(circle at top right, rgba(34, 197, 94, 0.5), transparent 60%), radial-gradient(circle at bottom left, rgba(249, 115, 22, 0.35), transparent 60%), linear-gradient(135deg, #091811 0%, #0f261c 100%)',
    accentColor: '#22c55e',
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    code: 'NZ',
    flag: '🇳🇿',
    oneLiner: 'Safe, scenic, globally ranked universities with post-study work rights.',
    highlight: 'Top Living Quality',
    span: '',
    glowColor: '59, 130, 246', // Kiwi Pacific Blue
    flagGradient:
      'radial-gradient(circle at top right, rgba(225, 29, 72, 0.45), transparent 60%), radial-gradient(circle at bottom left, rgba(37, 99, 235, 0.55), transparent 60%), linear-gradient(135deg, #0a1122 0%, #141c33 100%)',
    accentColor: '#f43f5e',
  },
  {
    id: 'france',
    name: 'France',
    code: 'FR',
    flag: '🇫🇷',
    oneLiner: 'Grandes Écoles, affordable tuition & high European post-study ROI.',
    highlight: 'High European ROI',
    span: '',
    glowColor: '99, 102, 241', // French Bleu
    flagGradient:
      'radial-gradient(circle at top right, rgba(239, 68, 68, 0.4), transparent 60%), radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.55), transparent 60%), linear-gradient(135deg, #0d1226 0%, #151c38 100%)',
    accentColor: '#60a5fa',
  },
  {
    id: 'sweden',
    name: 'Sweden',
    code: 'SE',
    flag: '🇸🇪',
    oneLiner: 'Global innovation leader with 1,000+ English-taught Master’s degrees.',
    highlight: '#1 Innovation Index',
    span: '',
    glowColor: '234, 179, 8', // Swedish Gold
    flagGradient:
      'radial-gradient(circle at top right, rgba(234, 179, 8, 0.5), transparent 60%), radial-gradient(circle at bottom left, rgba(2, 132, 199, 0.55), transparent 60%), linear-gradient(135deg, #091824 0%, #122538 100%)',
    accentColor: '#facc15',
  },
  {
    id: 'dubai',
    name: 'Dubai (UAE)',
    code: 'AE',
    flag: '🇦🇪',
    oneLiner: 'Branch campuses of premier UK & Australian universities with tax-free living.',
    highlight: 'Global Hub & Tax Free',
    span: '',
    glowColor: '16, 185, 129', // UAE Emerald Green
    flagGradient:
      'radial-gradient(circle at top right, rgba(16, 185, 129, 0.5), transparent 60%), radial-gradient(circle at bottom left, rgba(239, 68, 68, 0.35), transparent 60%), linear-gradient(135deg, #091712 0%, #10241c 100%)',
    accentColor: '#10b981',
  },
];

const createParticleElement = (x: number, y: number, color: string) => {
  const el = document.createElement('div');
  el.className = 'magic-bento-particle';
  el.style.cssText = `
    left: ${x}px;
    top: ${y}px;
    background: rgba(${color}, 0.95);
    box-shadow: 0 0 8px rgba(${color}, 0.85);
  `;
  return el;
};

interface ParticleCardProps {
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const ParticleCard: React.FC<ParticleCardProps> = ({
  children,
  className = '',
  disableAnimations = false,
  style,
  particleCount = 12,
  glowColor = '245, 158, 11',
  enableTilt = true,
  clickEffect = true,
  enableMagnetism = true,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<HTMLElement[]>([]);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLElement[]>([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.25,
        ease: 'back.in(1.7)',
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        },
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true) as HTMLElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 80,
          y: (Math.random() - 0.5) * 80,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true,
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true,
        });
      }, index * 80);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 4,
          rotateY: 4,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000,
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableTilt && !enableMagnetism) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: 'power2.out',
          transformPerspective: 1000,
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.04;
        const magnetY = (y - centerY) * 0.04;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const handleCardClick = (e: MouseEvent) => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.5) 0%, rgba(${glowColor}, 0.25) 35%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 50;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => ripple.remove(),
        }
      );
    };

    const handleTouchStart = (e: TouchEvent) => {
      isHoveredRef.current = true;
      element.classList.add('is-touched');
      animateParticles();

      const touch = e.touches[0];
      if (touch) {
        updateCardGlowProperties(element, touch.clientX, touch.clientY, 1, 220);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        updateCardGlowProperties(element, touch.clientX, touch.clientY, 1, 220);
      }
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        element.classList.remove('is-touched');
        if (!element.classList.contains('is-in-focus') && !element.matches(':hover')) {
          isHoveredRef.current = false;
          clearAllParticles();
          element.style.setProperty('--glow-intensity', '0');
        }
      }, 500);
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('click', handleCardClick);
    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: true });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Trigger star particles when scrolled into focal viewing zone on mobile
    const focusObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'class') {
          const inFocus = element.classList.contains('is-in-focus');
          if (inFocus && !isHoveredRef.current) {
            isHoveredRef.current = true;
            animateParticles();
          } else if (
            !inFocus &&
            isHoveredRef.current &&
            !element.matches(':hover') &&
            !element.classList.contains('is-touched')
          ) {
            isHoveredRef.current = false;
            clearAllParticles();
          }
        }
      }
    });

    focusObserver.observe(element, { attributes: true });

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('click', handleCardClick);
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
      focusObserver.disconnect();
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

  return (
    <div
      ref={cardRef}
      className={`${className} magic-bento-particle-container`}
      style={{ ...style, position: 'relative', overflow: 'hidden' }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const updateCardGlowProperties = (card: HTMLElement, mouseX: number, mouseY: number, glow: number, radius: number) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty('--glow-x', `${relativeX}%`);
  card.style.setProperty('--glow-y', `${relativeY}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

interface GlobalSpotlightProps {
  gridRef: React.RefObject<HTMLDivElement>;
  disableAnimations?: boolean;
  enabled?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}

const GlobalSpotlight: React.FC<GlobalSpotlightProps> = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = 300,
  glowColor = '245, 158, 11',
}) => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;

    const spotlight = document.createElement('div');
    spotlight.className = 'magic-bento-global-spotlight';
    spotlight.style.setProperty('--spotlight-color', glowColor);
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current.closest('.magic-bento-section');
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

      const cards = gridRef.current.querySelectorAll<HTMLElement>('.magic-bento-card');

      if (!mouseInside) {
        gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' });
        cards.forEach((card) => {
          card.style.setProperty('--glow-intensity', '0');
        });
        return;
      }

      const proximity = spotlightRadius * 0.5;
      const fadeDistance = spotlightRadius * 0.75;
      let minDistance = Infinity;
      let closestCardGlow = glowColor;

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        if (effectiveDistance < minDistance) {
          minDistance = effectiveDistance;
          closestCardGlow = card.dataset.glowColor || glowColor;
        }

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(card, e.clientX, e.clientY, glowIntensity, spotlightRadius);
      });

      // Update global spotlight color to match hovered country's flag color!
      spotlightRef.current.style.setProperty('--spotlight-color', closestCardGlow);

      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
            : 0;

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: 'power2.out',
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY } as MouseEvent);
      }
    };

    const handleMouseLeave = () => {
      gridRef.current?.querySelectorAll<HTMLElement>('.magic-bento-card').forEach((card) => {
        card.style.setProperty('--glow-intensity', '0');
      });
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('touchstart', handleTouchMove, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('touchstart', handleTouchMove);
      document.removeEventListener('touchmove', handleTouchMove);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};

export default function MagicBento({
  destinations = DEFAULT_DESTINATIONS,
  onSelectCountry,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = 280,
  particleCount = 10,
  enableTilt = true,
  clickEffect = true,
  enableMagnetism = true,
  className = '',
}: MagicBentoProps) {
  const gridRef = useRef<HTMLDivElement | null>(null);

  // Enable all animations on mobile as well
  const shouldDisableAnimations = disableAnimations;

  useEffect(() => {
    if (shouldDisableAnimations) return;

    let rafId: number | null = null;

    const handleScrollFocal = () => {
      if (!gridRef.current) return;

      const isMobileOrTablet = window.innerWidth < 1024;
      if (!isMobileOrTablet) return;

      const cards = gridRef.current.querySelectorAll<HTMLElement>('.magic-bento-card');
      if (!cards.length) return;

      const viewportHeight = window.innerHeight;
      // Eye-level reading focal line in mobile viewport
      const focalCenter = viewportHeight * 0.48;
      // Generous focal range so the cards actively in view light up
      const focalRange = viewportHeight * 0.30;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - focalCenter);

        if (distance < focalRange) {
          const proximity = Math.max(0, 1 - distance / focalRange);
          const intensity = Math.pow(proximity, 1.2);

          card.style.setProperty('--scroll-glow-intensity', intensity.toFixed(2));
          card.style.setProperty('--glow-intensity', intensity.toFixed(2));

          if (!card.classList.contains('is-in-focus')) {
            card.classList.add('is-in-focus');
          }
        } else {
          card.style.setProperty('--scroll-glow-intensity', '0');
          card.style.setProperty('--glow-intensity', '0');
          if (!card.classList.contains('is-touched')) {
            card.classList.remove('is-in-focus');
          }
        }
      });
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScrollFocal);
    };

    const handleTouchDrag = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch || !gridRef.current) return;
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      const card = target?.closest<HTMLElement>('.magic-bento-card');
      if (card && gridRef.current.contains(card)) {
        card.classList.add('is-touched');
        card.classList.add('is-in-focus');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    window.addEventListener('touchmove', handleTouchDrag, { passive: true });

    // Initial check on mount so visible cards activate immediately
    handleScrollFocal();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('touchmove', handleTouchDrag);
    };
  }, [shouldDisableAnimations]);

  return (
    <div className={`magic-bento-section ${className}`}>
      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
        />
      )}

      <div className="magic-bento-grid" ref={gridRef}>
        {destinations.map((destination) => {
          const baseClassName = `magic-bento-card group ${destination.span || ''} ${
            enableBorderGlow ? 'magic-bento-card--border-glow' : ''
          }`;

          const cardStyle = {
            '--glow-color': destination.glowColor,
            '--card-flag-gradient': destination.flagGradient,
          } as React.CSSProperties;

          const cardContent = (
            <>
              {/* Country Flag Gradient Glow inside card - turns on upon hover */}
              <div className="magic-bento-card__flag-bg" aria-hidden="true" />

              {/* Dynamic spotlight cursor glow inside card */}
              <div className="magic-bento-card__spot-glow" aria-hidden="true" />

              {/* Main Card Content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-3.5 sm:p-4">
                <div>
                  <div className="flex items-center justify-between mb-2 gap-1.5">
                    <span
                      className="text-2xl sm:text-3xl select-none inline-block transition-transform duration-200 group-hover:scale-125 group-hover:rotate-6 origin-bottom-left"
                      role="img"
                      aria-label={destination.name}
                    >
                      {destination.flag}
                    </span>
                    {destination.highlight && (
                      <span className="magic-bento-card__badge text-[9.5px] font-bold px-2 py-0.5 rounded-full border transition-colors truncate max-w-[125px]">
                        {destination.highlight}
                      </span>
                    )}
                  </div>
                  <h3 className="magic-bento-card__title font-extrabold text-xs sm:text-sm leading-tight">
                    {destination.name}
                  </h3>
                  <p className="magic-bento-card__desc text-[10px] sm:text-[11px] mt-1 leading-snug line-clamp-2 font-normal">
                    {destination.oneLiner}
                  </p>
                </div>

                <div className="magic-bento-card__explore mt-2.5 pt-2 border-t flex items-center justify-between text-[10px] font-bold">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </>
          );

          if (enableStars) {
            return (
              <ParticleCard
                key={destination.id}
                className={baseClassName}
                style={cardStyle}
                disableAnimations={shouldDisableAnimations}
                particleCount={particleCount}
                glowColor={destination.glowColor}
                enableTilt={enableTilt}
                clickEffect={clickEffect}
                enableMagnetism={enableMagnetism}
                onClick={() => onSelectCountry?.(destination)}
              >
                {cardContent}
              </ParticleCard>
            );
          }

          return (
            <div
              key={destination.id}
              className={baseClassName}
              style={cardStyle}
              data-glow-color={destination.glowColor}
              onClick={() => onSelectCountry?.(destination)}
            >
              {cardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
}
