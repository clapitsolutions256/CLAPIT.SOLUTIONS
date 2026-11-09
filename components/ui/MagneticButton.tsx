"use client";

import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

/**
 * Circular CTA that is pulled toward the cursor (within its own hit area),
 * with a slowly rotating dashed ring and a soft glow. Springs back on leave.
 */
export default function MagneticButton({
  href,
  label = "Get in touch",
  strength = 0.35,
}: {
  href: string;
  label?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative flex h-60 w-60 items-center justify-center"
    >
      <motion.div style={{ x: sx, y: sy }} className="relative">
        <div
          className="absolute -inset-6 animate-pulse rounded-full bg-secondary/30 blur-2xl motion-reduce:animate-none"
          aria-hidden="true"
        />
        <Link
          href={href}
          className="group relative flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-full bg-secondary text-white shadow-[0_18px_48px_rgba(219,26,26,0.45)] transition-colors duration-300 hover:bg-brand-600"
        >
          <span
            className="absolute inset-2 animate-[spin_14s_linear_infinite] rounded-full border-2 border-dashed border-white/35 motion-reduce:animate-none"
            aria-hidden="true"
          />
          <span className="relative max-w-[6.5rem] text-center font-heading text-lg font-semibold leading-tight">
            {label}
          </span>
          <ArrowRight
            className="relative h-6 w-6 transition-transform duration-300 group-hover:translate-x-1.5"
            aria-hidden="true"
          />
        </Link>
      </motion.div>
    </div>
  );
}
