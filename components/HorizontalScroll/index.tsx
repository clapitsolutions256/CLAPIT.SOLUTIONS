"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
 * Pins the section and scrubs its panels sideways as the page scrolls.
 * - Desktop (lg+) with motion allowed: pinned horizontal track + progress bar.
 * - Mobile / reduced motion: panels simply stack vertically.
 * Uses the page's single Lenis instance (no extra smooth-scroller) and only
 * cleans up its own ScrollTriggers.
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
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const distance = () => track.scrollWidth - window.innerWidth;

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: 0.6,
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
        className="flex flex-col lg:h-screen lg:w-max lg:flex-row motion-reduce:lg:h-auto motion-reduce:lg:w-full motion-reduce:lg:flex-col"
      >
        {sections.map((section) => (
          <div
            key={section.id}
            className={`relative flex min-h-[80vh] w-full items-center lg:h-screen lg:w-screen lg:flex-shrink-0 motion-reduce:lg:h-auto motion-reduce:lg:min-h-[80vh] ${
              section.className ?? "bg-white"
            }`}
          >
            {section.content}
          </div>
        ))}
      </div>

      {/* Scroll progress (desktop only) */}
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 hidden h-1 w-48 -translate-x-1/2 overflow-hidden rounded-full bg-zinc-400/30 lg:block motion-reduce:lg:hidden"
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
