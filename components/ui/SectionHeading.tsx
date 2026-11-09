"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utilities/ui";
import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  action?: ReactNode;
  className?: string;
  as?: "h1" | "h2";
}

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * One heading pattern for every section: eyebrow → title → supporting copy,
 * with an optional action aligned to the right on wide screens.
 * Animates in as a stagger: eyebrow line draws, title rises out of a mask,
 * copy and action fade up after it.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  action,
  className,
  as = "h2",
}: SectionHeadingProps) {
  const reduce = useReducedMotion();
  const centered = align === "center";
  const dark = tone === "dark";
  const Title = as === "h1" ? motion.h1 : motion.h2;

  const fadeUp = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      className={cn(
        "flex flex-col gap-6",
        action && !centered && "md:flex-row md:items-end md:justify-between",
        centered && "items-center text-center",
        className
      )}
    >
      <div className={cn("max-w-2xl", centered && "mx-auto")}>
        {eyebrow && (
          <motion.p variants={fadeUp} className="eyebrow mb-4">
            {eyebrow}
          </motion.p>
        )}
        <div className="overflow-hidden pb-1">
          <Title
            variants={{
              hidden: reduce ? { opacity: 0 } : { opacity: 0, y: "100%" },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
            }}
            className={cn(
              "font-heading text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]",
              dark ? "text-white" : "text-ink"
            )}
          >
            {title}
          </Title>
        </div>
        {description && (
          <motion.p
            variants={fadeUp}
            className={cn(
              "mt-4 text-base leading-relaxed sm:text-lg",
              dark ? "text-zinc-400" : "text-zinc-600"
            )}
          >
            {description}
          </motion.p>
        )}
      </div>
      {action && (
        <motion.div variants={fadeUp} className="shrink-0">
          {action}
        </motion.div>
      )}
    </motion.div>
  );
}
