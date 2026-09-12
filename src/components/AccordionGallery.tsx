'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import './AccordionGallery.css';

export interface AccordionGalleryItem {
  image: string;
  label?: string;
  step?: string;
  description?: string;
  link?: string;
  alt?: string;
}

export interface AccordionGalleryProps {
  items?: AccordionGalleryItem[];
  defaultIndex?: number;
  accentColor?: string;
  overlayColor?: string;
  textColor?: string;
  height?: number;
  mobileHeight?: number;
  gap?: number;
  radius?: number;
  expandRatio?: number;
  orientation?: 'horizontal' | 'vertical' | 'auto';
  duration?: number;
  ease?: string;
  parallax?: number;
  tilt?: number;
  stagger?: number;
  trigger?: 'hover' | 'click';
  showLabels?: boolean;
  grayscale?: boolean;
  className?: string;
}

const DEFAULT_ITEMS: AccordionGalleryItem[] = [
  { image: 'https://picsum.photos/id/1015/900/1200', label: 'Canyon', link: '#' },
  { image: 'https://picsum.photos/id/1018/900/1200', label: 'Ridgeline', link: '#' },
  { image: 'https://picsum.photos/id/1039/900/1200', label: 'Falls', link: '#' },
  { image: 'https://picsum.photos/id/1043/900/1200', label: 'Harbour', link: '#' },
  { image: 'https://picsum.photos/id/1044/900/1200', label: 'Skyline', link: '#' },
];

export default function AccordionGallery({
  items = DEFAULT_ITEMS,
  defaultIndex = 0,
  accentColor = '#f59e0b',
  overlayColor = '#060010',
  textColor = '#ffffff',
  height = 460,
  mobileHeight = 580,
  gap = 10,
  radius = 16,
  expandRatio = 0.48,
  orientation = 'auto',
  duration = 0.6,
  ease = 'power3.out',
  parallax = 0.5,
  tilt = 7,
  stagger = 0.05,
  trigger = 'hover',
  showLabels = true,
  grayscale = true,
  className = '',
}: AccordionGalleryProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);
  const mediaRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const barRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const firstRunRef = useRef(true);
  const mediaSizeRef = useRef(320);

  // Responsive orientation: desktop is horizontal row, mobile (< 768px) is vertical column
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile((prev) => (prev !== mobile ? mobile : prev));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const vertical = orientation === 'vertical' || (orientation === 'auto' && isMobile);
  const count = items.length;
  const [active, setActive] = useState(Math.min(Math.max(defaultIndex, 0), count - 1));

  const effectiveGap = isMobile ? Math.min(gap, 8) : gap;
  const effectiveExpandRatio = isMobile ? 0.44 : expandRatio;
  const effectiveTilt = isMobile ? 3 : tilt;
  const effectiveDuration = isMobile ? 0.45 : duration;
  const containerHeight = vertical ? (isMobile ? mobileHeight : Math.round(height * 1.6)) : height;

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const applyLayout = useCallback(
    (animate: boolean) => {
      const panels = panelRefs.current;
      if (!panels.length) return;

      const r = Math.min(Math.max(effectiveExpandRatio, 0.2), 0.9);
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;
      const mediaSize = mediaSizeRef.current;

      tlRef.current?.kill();
      const dur = animate && !prefersReduced ? effectiveDuration : 0;
      const tl = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;
        const isActive = i === active;
        const media = mediaRefs.current[i];
        const bar = barRefs.current[i];
        const text = textRefs.current[i];

        const rot = isActive ? 0 : i < active ? effectiveTilt : -effectiveTilt;
        const rotProp = vertical ? { rotateX: -rot } : { rotateY: rot };

        tl.to(panel, { flexGrow: isActive ? grow : 1, ...rotProp, duration: dur, ease }, 0);

        if (media) {
          const drift = Math.max(-1.5, Math.min(1.5, active - i));
          const shift = drift * parallax * mediaSize * 0.06;
          const gray = grayscale ? (isActive ? 0 : 1) : 0;
          tl.to(
            media,
            {
              xPercent: -50,
              yPercent: -50,
              x: vertical ? 0 : isActive ? 0 : shift,
              y: vertical ? (isActive ? 0 : shift) : 0,
              '--ag-gray': gray,
              '--ag-dim': isActive ? 0 : 0.4,
              duration: dur,
              ease,
            },
            0
          );
        }

        if (showLabels && bar && text) {
          if (isActive) {
            tl.to([bar, text], { opacity: 1, x: 0, duration: dur, ease, stagger: prefersReduced ? 0 : stagger }, 0);
          } else {
            tl.to([bar, text], { opacity: 0, x: -14, duration: dur * 0.6, ease }, 0);
          }
        }
      });

      tlRef.current = tl;
    },
    [
      active,
      count,
      effectiveExpandRatio,
      effectiveDuration,
      ease,
      vertical,
      effectiveTilt,
      parallax,
      grayscale,
      showLabels,
      stagger,
      prefersReduced,
    ]
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const total = vertical ? rect.height : rect.width;
      const usable = Math.max(total - effectiveGap * (count - 1), 120);
      const size = Math.max(140, usable * Math.min(Math.max(effectiveExpandRatio, 0.2), 0.9) * 1.25);
      mediaSizeRef.current = size;
      el.style.setProperty('--ag-media-size', `${size}px`);
      applyLayout(!firstRunRef.current);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [applyLayout, effectiveGap, count, effectiveExpandRatio, vertical]);

  useEffect(() => {
    applyLayout(!firstRunRef.current);
    firstRunRef.current = false;
  }, [applyLayout]);

  useEffect(
    () => () => {
      tlRef.current?.kill();
    },
    []
  );

  const lastManualIndexRef = useRef<number | null>(null);
  const lastManualScrollYRef = useRef<number>(0);

  // Scroll-driven expansion on mobile: as user scrolls down through the section, steps open sequentially
  useEffect(() => {
    if (!isMobile) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const el = rootRef.current;
          if (!el) {
            ticking = false;
            return;
          }

          // If user recently tapped or touched a step, keep it active until they scroll by >50px
          if (lastManualIndexRef.current !== null) {
            if (Math.abs(window.scrollY - lastManualScrollYRef.current) < 50) {
              ticking = false;
              return;
            }
            lastManualIndexRef.current = null;
          }

          const rect = el.getBoundingClientRect();
          const winHeight = window.innerHeight;

          // When the container is in the active viewport range
          if (rect.top < winHeight && rect.bottom > 0) {
            const startY = winHeight * 0.72; // triggers when container top enters lower viewport
            const endY = winHeight * 0.18;   // completes when container top reaches upper viewport
            const travelDistance = rect.height + (startY - endY);

            if (travelDistance > 0) {
              const scrolled = startY - rect.top;
              const rawProgress = scrolled / travelDistance;
              const clampedProgress = Math.max(0, Math.min(0.999, rawProgress));
              const targetIndex = Math.floor(clampedProgress * count);

              setActive((prev) => (prev !== targetIndex ? targetIndex : prev));
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile, count]);

  // Native touch listener on mobile container for smooth touch sliding
  useEffect(() => {
    if (!isMobile) return;
    const el = rootRef.current;
    if (!el) return;

    const handleNativeTouch = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      const panel = target?.closest('.ag-panel');
      if (panel) {
        const idx = Number(panel.getAttribute('data-index'));
        if (!isNaN(idx) && idx >= 0 && idx < count) {
          lastManualIndexRef.current = idx;
          lastManualScrollYRef.current = window.scrollY;
          setActive(idx);
        }
      }
    };

    el.addEventListener('touchstart', handleNativeTouch, { passive: true });
    el.addEventListener('touchmove', handleNativeTouch, { passive: true });

    return () => {
      el.removeEventListener('touchstart', handleNativeTouch);
      el.removeEventListener('touchmove', handleNativeTouch);
    };
  }, [isMobile, count]);

  const handleEnter = (i: number) => {
    if (trigger === 'hover') {
      lastManualIndexRef.current = i;
      lastManualScrollYRef.current = window.scrollY;
      setActive(i);
    }
  };

  const handleClick = (i: number, e: React.MouseEvent) => {
    lastManualIndexRef.current = i;
    lastManualScrollYRef.current = window.scrollY;
    if (i !== active) {
      e.preventDefault();
      setActive(i);
    }
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    }
  };

  return (
    <div
      ref={rootRef}
      className={`accordion-gallery${vertical ? ' accordion-gallery--vertical' : ''}${className ? ` ${className}` : ''}`}
      style={{
        '--ag-accent': accentColor,
        '--ag-overlay': overlayColor,
        '--ag-text': textColor,
        '--ag-gap': `${effectiveGap}px`,
        '--ag-radius': `${radius}px`,
        height: `${containerHeight}px`,
      } as React.CSSProperties}
      role="list"
      aria-label="Image accordion gallery"
    >
      {items.map((item, i) => {
        const isActive = i === active;
        const Tag = item.link ? 'a' : 'div';
        return (
          <Tag
            key={i}
            data-index={i}
            ref={(el: any) => {
              panelRefs.current[i] = el;
            }}
            className={`ag-panel${isActive ? ' ag-panel--active' : ''}`}
            style={{ borderRadius: `${radius}px` }}
            href={item.link || undefined}
            onClick={(e) => handleClick(i, e)}
            onMouseEnter={() => handleEnter(i)}
            onPointerEnter={() => handleEnter(i)}
            onTouchStart={() => handleEnter(i)}
            onFocus={() => setActive(i)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
            aria-label={item.label}
          >
            <span className="ag-panel__frame">
              <span
                className="ag-panel__media"
                ref={(el) => {
                  mediaRefs.current[i] = el;
                }}
              >
                <img
                  src={item.image}
                  alt={item.alt || item.label || ''}
                  draggable="false"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('photo-1522202176988-66273c2fd55f')) {
                      target.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80';
                    }
                  }}
                />
              </span>
              <span className="ag-panel__overlay" aria-hidden="true" />
            </span>

            {/* Persistent Step Pill / Compact Title for clear mobile navigation */}
            <div className="ag-panel__badge" aria-hidden="true">
              <span className={`ag-badge-pill ${isActive ? 'ag-badge-pill--active' : ''}`}>
                {item.step || `Step 0${i + 1}`}
              </span>
              {!isActive && vertical && item.label && (
                <span className="ag-badge-title truncate">{item.label}</span>
              )}
            </div>

            {/* Expanded caption reveal */}
            {showLabels && (
              <span className="ag-panel__label" aria-hidden="true">
                <span
                  className="ag-panel__bar"
                  ref={(el) => {
                    barRefs.current[i] = el;
                  }}
                />
                <span
                  className="ag-panel__text flex flex-col"
                  ref={(el) => {
                    textRefs.current[i] = el;
                  }}
                >
                  <span className="text-sm sm:text-base lg:text-lg font-black text-white leading-tight drop-shadow-md">
                    {item.label}
                  </span>
                  {item.description && (
                    <span className="text-[11px] sm:text-xs text-slate-200 font-medium line-clamp-2 mt-0.5 opacity-90">
                      {item.description}
                    </span>
                  )}
                </span>
              </span>
            )}
          </Tag>
        );
      })}
    </div>
  );
}
