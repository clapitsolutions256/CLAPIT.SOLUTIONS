"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/public/images";
import { cn } from "@/utilities/ui";

const SESSION_KEY = "clapit-intro-seen";

/**
 * Short branded intro shown once per browser session on first load
 * (logo + progress bar). Removal is timer-driven, not animation-driven:
 * it stops intercepting clicks at 0.9s and leaves the DOM at 1.4s even if
 * no animation frame ever runs, so it can never get stuck over the page.
 */
export default function Loader() {
  const [phase, setPhase] = useState<"off" | "show" | "fade">("off");

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      /* storage unavailable: just show it */
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) return;

    // Mark as seen only once the intro has actually finished, so an effect
    // that is cleaned up and re-run (React StrictMode) can't strand it on screen.
    setPhase("show");
    const fade = setTimeout(() => setPhase("fade"), 900);
    const done = setTimeout(() => {
      setPhase("off");
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
    }, 1400);
    return () => {
      clearTimeout(fade);
      clearTimeout(done);
      setPhase("off");
    };
  }, []);

  if (phase === "off") return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100000] flex items-center justify-center bg-white transition-opacity duration-500 ease-out",
        phase === "fade" ? "pointer-events-none opacity-0" : "opacity-100"
      )}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="animate-[intro-rise_0.5s_cubic-bezier(0.22,1,0.36,1)_both]">
          <Image src={IMAGES.CLAPIT} alt="" width={220} height={53} priority className="h-12 w-auto" />
        </div>
        <div className="h-1 w-40 overflow-hidden rounded-full bg-zinc-100">
          <div className="h-full w-full origin-left animate-[intro-bar_0.8s_cubic-bezier(0.65,0,0.35,1)_both] rounded-full bg-secondary" />
        </div>
      </div>
    </div>
  );
}
