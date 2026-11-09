"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Code2,
  LineChart,
  MessagesSquare,
  Palette,
  Target,
  TrendingUp,
} from "lucide-react";
import { IMAGES } from "@/public/images";
import HorizontalScroll from "../HorizontalScroll";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import CountUp from "../ui/CountUp";
import MagneticButton from "../ui/MagneticButton";

const PILLARS = [
  {
    icon: Code2,
    title: "Technology",
    share: 50,
    desc: "Modern frameworks, scalable architectures and intelligent systems built for tomorrow's challenges.",
  },
  {
    icon: Palette,
    title: "Design",
    share: 30,
    desc: "Creative storytelling, visual identity and user experiences that connect and inspire.",
  },
  {
    icon: LineChart,
    title: "Strategy",
    share: 20,
    desc: "Data-driven insights, growth planning and optimisation that deliver measurable impact.",
  },
];

const STATS = [
  { value: "100+", label: "Successful launches" },
  { value: "75+", label: "Client partnerships" },
  { value: "10+", label: "Years of expertise" },
  { value: "5", label: "Industry recognitions" },
];

const BENEFITS = [
  { icon: Clock, label: "Quick turnaround", desc: "24–48h response" },
  { icon: MessagesSquare, label: "Expert consultation", desc: "No obligations" },
  { icon: Target, label: "Dedicated team", desc: "Quality guaranteed" },
  { icon: TrendingUp, label: "Growth focused", desc: "Long-term success" },
];

/* ---------- Panel 1: intro ---------- */
function IntroPanel() {
  const reduce = useReducedMotion();
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-6">
      {/* Slow-orbiting rings */}
      {[560, 820, 1080].map((size, i) => (
        <motion.div
          key={size}
          aria-hidden="true"
          className="absolute rounded-full border border-dashed border-zinc-300/70"
          style={{ width: size, height: size }}
          animate={reduce ? undefined : { rotate: i % 2 ? -360 : 360 }}
          transition={{ duration: 60 + i * 20, repeat: Infinity, ease: "linear" }}
        />
      ))}
      <div
        className="absolute h-[520px] w-[520px] rounded-full bg-secondary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative text-center">
        <Reveal>
          <p className="eyebrow justify-center">Why CLAPIT</p>
        </Reveal>
        <div className="mt-6 overflow-hidden">
          <motion.h2
            initial={reduce ? { opacity: 0 } : { y: "110%" }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl font-semibold leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-8xl"
          >
            Why believe <span className="text-secondary">in us</span>
          </motion.h2>
        </div>
        <Reveal delay={0.25}>
          <p className="mx-auto mt-8 max-w-xl text-lg text-zinc-600">
            A decade of shipping products for startups and enterprises — here&apos;s
            what sets our team apart.
          </p>
        </Reveal>
        <Reveal delay={0.4} className="mt-10 hidden items-center justify-center gap-3 text-sm font-medium text-zinc-500 lg:flex">
          Keep scrolling
          <motion.span
            animate={reduce ? undefined : { x: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="h-4 w-4 text-secondary" aria-hidden="true" />
          </motion.span>
        </Reveal>
      </div>
    </div>
  );
}

/* ---------- Panel 2: pillars ---------- */
function PillarsPanel() {
  return (
    <div className="container grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-0">
      <div>
        <Reveal>
          <p className="eyebrow mb-4">Innovation meets excellence</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
            Driven by <span className="text-secondary">innovation</span>, built on craft
          </h3>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-600">
            Combining technical expertise with creative vision, we deliver
            solutions that don&apos;t just meet your needs — they exceed
            expectations and drive measurable results.
          </p>
        </Reveal>
        <RevealGroup className="mt-8 flex flex-wrap gap-2" delay={0.3}>
          {["Web Development", "Mobile Apps", "Cloud Solutions", "AI Integration"].map((t) => (
            <RevealItem key={t}>
              <span className="inline-flex rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-secondary hover:text-secondary">
                {t}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <RevealGroup className="grid gap-4" stagger={0.12}>
        {PILLARS.map((p) => (
          <RevealItem key={p.title}>
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/40 hover:shadow-card-hover">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                  <p.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="text-lg font-semibold text-ink">{p.title}</h4>
                    <span className="font-heading text-2xl font-semibold text-secondary">
                      <CountUp value={`${p.share}%`} />
                    </span>
                  </div>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-zinc-600">{p.desc}</p>
                  {/* Share-of-focus bar fills on reveal */}
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-zinc-100">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-secondary to-lightMedium"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.share}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}

/* ---------- Panel 3: proof ---------- */
function ProofPanel() {
  return (
    <div className="relative flex h-full w-full items-center overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:64px_64px]"
        aria-hidden="true"
      />
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-secondary/25 blur-3xl" aria-hidden="true" />

      <div className="container relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-0">
        <div>
          <Reveal>
            <p className="eyebrow mb-4">Proven results</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
              Numbers that speak for themselves
            </h3>
          </Reveal>
          <RevealGroup className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10" stagger={0.1}>
            {STATS.map((s) => (
              <RevealItem key={s.label} className="bg-ink p-6 transition-colors duration-300 hover:bg-ink-800">
                <span className="block font-heading text-4xl font-semibold text-white sm:text-5xl">
                  <CountUp value={s.value} />
                </span>
                <span className="mt-2 block text-sm text-zinc-400">{s.label}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.15} y={40} className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-secondary/40 to-lightMedium/20 blur-2xl" aria-hidden="true" />
          <motion.div
            whileHover={{ rotate: -1, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5 p-3 backdrop-blur"
          >
            <Image
              src={IMAGES.Scroll}
              alt="A selection of apps and brands designed by CLAPIT"
              width={640}
              height={640}
              className="h-auto w-full rounded-[1.25rem]"
            />
          </motion.div>
        </Reveal>
      </div>
    </div>
  );
}

/* ---------- Panel 4: call to action ---------- */
function CtaPanel() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-6 py-20 lg:py-0">
      <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" aria-hidden="true" />

      <div className="relative flex max-w-4xl flex-col items-center text-center">
        <Reveal>
          <p className="eyebrow">Ready to get started?</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="mt-5 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-secondary to-lightMedium bg-clip-text text-transparent">
              extraordinary
            </span>{" "}
            together
          </h3>
        </Reveal>

        <RevealGroup className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-3 md:grid-cols-4" stagger={0.08} delay={0.2}>
          {BENEFITS.map((b) => (
            <RevealItem key={b.label}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left transition-colors duration-300 hover:border-secondary/50 hover:bg-white/[0.07]">
                <b.icon className="h-5 w-5 text-secondary" aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold text-white">{b.label}</p>
                <p className="mt-0.5 text-xs text-zinc-400">{b.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.35} className="mt-4">
          <MagneticButton href="/contact-us" />
        </Reveal>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const sections = [
    { id: "why-intro", className: "bg-background", content: <IntroPanel /> },
    { id: "why-pillars", className: "bg-white", content: <PillarsPanel /> },
    { id: "why-proof", className: "bg-ink", content: <ProofPanel /> },
    { id: "why-cta", className: "bg-black", content: <CtaPanel /> },
  ];

  return <HorizontalScroll sections={sections} label="Why believe in CLAPIT" />;
}
