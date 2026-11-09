"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MessagesSquare, Target, TrendingUp } from "lucide-react";

const BENEFITS = [
  { icon: Clock, label: "Quick turnaround", desc: "Reply within 24–48 hours" },
  { icon: MessagesSquare, label: "Expert consultation", desc: "No obligations" },
  { icon: Target, label: "Dedicated team", desc: "Quality guaranteed" },
  { icon: TrendingUp, label: "Growth focused", desc: "Built for long-term success" },
];

/** Closing call-to-action banner, reused across pages. */
export default function ContactUs() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-3xl bg-ink px-6 py-12 sm:px-12 sm:py-16 lg:px-16"
        >
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px]"
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-4">Let&apos;s work together</p>
              <h2 className="font-heading text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let&apos;s build something extraordinary together
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-zinc-400">
                Know what you want? Great. Got questions? Even better. Tell us
                about your project and we&apos;ll get back with a clear plan.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact-us"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-secondary px-7 text-base font-semibold text-white transition-colors hover:bg-brand-600"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View pricing
                </Link>
              </div>
            </div>

            <motion.ul
              className="grid gap-3 sm:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
            >
              {BENEFITS.map((b) => (
                <motion.li
                  key={b.label}
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition-colors duration-300 hover:border-secondary/50 hover:bg-white/[0.06]"
                >
                  <b.icon className="h-6 w-6 text-secondary transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  <p className="mt-4 font-semibold text-white">{b.label}</p>
                  <p className="mt-1 text-sm text-zinc-400">{b.desc}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
