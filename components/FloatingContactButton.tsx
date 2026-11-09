"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { cn } from "@/utilities/ui";

/**
 * Mobile-only contact shortcut. Stays hidden over the first screen (the hero
 * already has its own CTAs) and slides in once the visitor scrolls on.
 */
export default function FloatingContactButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href="/contact-us"
      aria-label="Contact Us"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        "fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-50 transition-all duration-300 ease-out md:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary shadow-[0_8px_24px_rgba(219,26,26,0.4)] ring-4 ring-white/70 transition-transform duration-200 active:scale-95">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </div>
    </Link>
  );
}
