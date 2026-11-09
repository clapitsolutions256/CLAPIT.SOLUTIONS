"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/** Counts up to `value` (e.g. "100+", "5") the first time it scrolls into view. */
export default function CountUp({ value, duration = 1.6 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const [display, setDisplay] = useState(match ? 0 : value);

  useEffect(() => {
    if (!match) return;
    if (reduce) {
      setDisplay(target);
      return;
    }
    if (!inView) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, target, duration]);

  return (
    <span ref={ref} aria-label={value}>
      <span aria-hidden="true">
        {display}
        {match ? suffix : ""}
      </span>
    </span>
  );
}
