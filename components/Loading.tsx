"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { IMAGES } from "@/public/images";

const SESSION_KEY = "clapit-intro-seen";

/**
 * Short branded intro shown once per browser session on first load
 * (logo + progress bar, ~0.9s). Route changes never show it, so navigation
 * stays instant.
 */
export default function Loader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* storage unavailable: just show it */
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) return;
    setShow(true);
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image src={IMAGES.CLAPIT} alt="" width={220} height={53} priority className="h-12 w-auto" />
            </motion.div>
            <div className="h-1 w-40 overflow-hidden rounded-full bg-zinc-100">
              <motion.div
                className="h-full rounded-full bg-secondary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
