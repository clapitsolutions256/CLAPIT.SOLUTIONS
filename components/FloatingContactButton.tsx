"use client";
import Link from "next/link";
import React from "react";

export default function FloatingContactButton() {
  return (
    <Link
      href="/contact-us"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-50 md:hidden"
      aria-label="Contact Us"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary shadow-[0_8px_24px_rgba(219,26,26,0.4)] ring-4 ring-white/70 transition-transform duration-200 active:scale-95">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
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

