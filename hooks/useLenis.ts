"use client";

import Lenis from "lenis";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function useLenis() {
  const pathname = usePathname();
  
  // Reset scroll position immediately on route change
  useEffect(() => {
    // Use setTimeout to ensure this runs after Next.js route change is complete
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);
  
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Keep GSAP ScrollTrigger (pinned/scrubbed sections) in lock-step with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Reset Lenis scroll position with immediate effect
    lenis.scrollTo(0, { immediate: true });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
    };
  }, [pathname]); // Re-run effect when pathname changes
}
