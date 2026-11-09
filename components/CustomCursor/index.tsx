"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Brand cursor: a precise dot plus a lagging ring that grows over links and
 * buttons. Only mounts on fine-pointer devices with motion allowed; the native
 * cursor stays visible so nothing is ever hidden from the user.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(
        !!t.closest("a, button, [role='button'], input, textarea, select, label")
      );
    };
    const leave = () => setVisible(false);
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[99999]">
      <motion.div
        className="absolute left-0 top-0 rounded-full border border-secondary"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 52 : 32,
          height: hovering ? 52 : 32,
          backgroundColor: hovering ? "rgba(219,26,26,0.10)" : "rgba(219,26,26,0)",
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.85 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      />
      <motion.div
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-secondary"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible && !hovering ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
