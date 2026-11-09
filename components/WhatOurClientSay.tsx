"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { textTestimonials } from "@/data/testimonials";
import SectionHeading from "./ui/SectionHeading";
import { cn } from "@/utilities/ui";

const AUTOPLAY_MS = 7000;

export default function WhatOurClientSay() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = textTestimonials.length;

  const go = useCallback(
    (delta: number) => setCurrentIndex((prev) => (prev + delta + total) % total),
    [total]
  );

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce || total < 2) return;
    const id = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, go, total]);

  if (total === 0) return null;
  const testimonial = textTestimonials[currentIndex];

  return (
    <section className="section bg-background">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Client stories"
          title="What our clients say"
        />

        <div
          className="relative mx-auto mt-12 max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <figure className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white px-6 py-10 shadow-card sm:px-12 sm:py-14">
            <Quote
              className="absolute right-8 top-8 h-16 w-16 text-brand-100"
              aria-hidden="true"
            />
            <div className="flex gap-1" aria-label="Rated 5 out of 5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
              ))}
            </div>

            <div className="relative min-h-[200px] sm:min-h-[180px]" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <blockquote className="mt-6 text-lg leading-relaxed text-ink sm:text-xl">
                    “{testimonial.text}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-ink font-heading text-lg font-semibold text-white"
                      aria-hidden="true"
                    >
                      {testimonial.name?.charAt(0)}
                    </span>
                    <span>
                      <span className="block font-semibold text-ink">{testimonial.name}</span>
                      {testimonial.position && (
                        <span className="block text-sm text-zinc-500">{testimonial.position}</span>
                      )}
                    </span>
                  </figcaption>
                </motion.div>
              </AnimatePresence>
            </div>
          </figure>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {textTestimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className="flex h-6 items-center"
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-current={index === currentIndex}
                >
                  <span
                    className={cn(
                      "block h-1.5 rounded-full transition-all duration-300",
                      index === currentIndex ? "w-8 bg-secondary" : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
                    )}
                  />
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white text-ink transition-colors hover:border-ink"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-ink-700"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
