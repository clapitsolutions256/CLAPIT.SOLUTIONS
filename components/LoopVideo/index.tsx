"use client";
import { IMAGES } from "@/public/images";
import React, { useEffect, useState } from "react";
import NextImage from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Monitor, Cpu, BarChart3, Headphones, ArrowRight } from "lucide-react";

const IMAGES_ARRAY = [
  IMAGES.slider1,
  IMAGES.slider16,
  IMAGES.slider7,
  IMAGES.slider8,
  IMAGES.slider9,
  IMAGES.slider10,
  IMAGES.slider12,
  IMAGES.slider13,
];

const SLIDES = IMAGES_ARRAY.filter(Boolean) as unknown as string[];

const SLIDE_INTERVAL_MS = 5000;

const FEATURES = [
  {
    icon: Cpu,
    title: "AI Solutions",
    description: "Intelligent automation & integration",
  },
  {
    icon: Monitor,
    title: "Custom Development",
    description: "Web & mobile applications",
  },
  {
    icon: BarChart3,
    title: "Digital Strategy",
    description: "Data-driven growth plans",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Round-the-clock assistance",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const LoopVideo: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 28, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: EASE } },
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % SLIDES.length;
    const img = new window.Image();
    img.src = SLIDES[nextIndex] as string;
  }, [currentIndex]);

  return (
    <section className="px-3 pb-3 pt-24 sm:px-4">
      <div className="relative isolate mx-auto w-full max-w-[1440px] overflow-hidden rounded-3xl bg-ink [clip-path:inset(0_round_1.5rem)]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]" aria-hidden="true">
          {SLIDES.map((src: string, index: number) => (
            <NextImage
              key={index}
              src={src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="absolute inset-0 object-cover transition-[opacity,transform] ease-out motion-reduce:transition-opacity"
              style={{
                opacity: index === currentIndex ? 0.55 : 0,
                transform: index === currentIndex && !reduce ? "scale(1.08)" : "scale(1)",
                transitionDuration: index === currentIndex ? "1000ms, 6000ms" : "1000ms, 1000ms",
                willChange: "opacity, transform",
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex min-h-[calc(100svh-96px)] flex-col justify-between px-6 pb-8 pt-16 sm:px-10 md:px-14 lg:px-20 lg:pt-24">
          <motion.div className="max-w-3xl" variants={container} initial="hidden" animate="visible">
            <motion.p variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-zinc-200 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden="true" />
              AI-powered development &amp; branding agency
            </motion.p>
            <motion.h1 variants={item} className="font-heading text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Innovate &amp; build with{" "}
              <span className="relative inline-block text-secondary">
                AI-powered
                <motion.span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-secondary/70"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
                />
              </span>{" "}
              solutions
            </motion.h1>
            <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
              We design, build and scale web, mobile and AI solutions — and the
              brands around them — for companies that want to grow faster.
            </motion.p>
            <motion.div variants={item} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact-us"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-secondary px-7 text-base font-semibold text-white shadow-[0_10px_30px_rgba(219,26,26,0.35)] transition-all hover:-translate-y-0.5 hover:bg-brand-600"
              >
                Book a free consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/25 bg-white/5 px-7 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
              >
                View our work
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } } }}
            initial="hidden"
            animate="visible"
          >
            {FEATURES.map((feature) => (
              <motion.div
                key={feature.title}
                variants={item}
                className="group flex items-center gap-4 bg-ink/70 px-5 py-5 backdrop-blur-md transition-colors duration-300 hover:bg-ink/90"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary/25">
                  <feature.icon className="h-5 w-5 text-secondary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{feature.title}</p>
                  <p className="mt-0.5 text-sm text-zinc-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LoopVideo;
