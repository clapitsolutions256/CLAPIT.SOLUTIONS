"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// Mobile address-bar show/hide changes the viewport height; don't re-layout pins for it.
ScrollTrigger.config({ ignoreMobileResize: true });

interface SectionData {
  id: string | number;
  content: React.ReactNode;
  /** Tailwind classes for the panel background (defaults to white). */
  className?: string;
}

interface HorizontalScrollProps {
  sections: SectionData[];
  label?: string;
}

/**
 * Pins the section and scrubs its panels sideways as the page scrolls —
 * on desktop and mobile alike. Each panel is exactly one screen
 * (100svh × 100vw), so panel content must be designed to fit a phone.
 * With reduced motion the panels simply stack vertically.
 * Uses the page's single Lenis instance and only cleans up its own triggers.
 */
export default function HorizontalScroll({ sections, label }: HorizontalScrollProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();
    mm.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        mobile: "(max-width: 767px)",
      },
      (ctx) => {
        const { motion, mobile } = ctx.conditions as { motion: boolean; mobile: boolean };
        if (!motion) return;

        const distance = () => track.scrollWidth - window.innerWidth;
        // Phones get a longer scroll runway so each swipe pans gently.
        const runway = () => distance() * (mobile ? 1.6 : 1);

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${runway()}`,
            scrub: mobile ? 0.4 : 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressRef.current) {
                progressRef.current.style.transform = `scaleX(${self.progress})`;
              }
            },
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
          gsap.set(track, { clearProps: "transform" });
        };
      }
    );

    return () => mm.revert();
  }, [sections.length]);

  if (!sections?.length) return null;

  return (
    <section ref={sectionRef} aria-label={label} className="relative overflow-hidden">
      <div
        ref={trackRef}
        className="flex h-[100svh] w-max flex-row motion-reduce:h-auto motion-reduce:w-full motion-reduce:flex-col"
      >
        {sections.map((section) => (
          <div
            key={section.id}
            className={`relative flex h-[100svh] w-screen flex-shrink-0 items-center overflow-hidden motion-reduce:h-auto motion-reduce:min-h-[80svh] ${
              section.className ?? "bg-white"
            }`}
          >
            {section.content}
          </div>
        ))}
      </div>

      {/* Scroll progress */}
      <div
        className="pointer-events-none absolute bottom-6 left-1/2 h-1 w-32 -translate-x-1/2 overflow-hidden rounded-full bg-zinc-400/30 sm:bottom-8 sm:w-48 motion-reduce:hidden"
        aria-hidden="true"
      >
        <div
          ref={progressRef}
          className="h-full w-full origin-left scale-x-0 rounded-full bg-secondary"
        />
      </div>
    </section>
  );
}
