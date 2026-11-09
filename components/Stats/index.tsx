"use client";

import { stats } from "@/data/stats";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

export default function Stats() {
  return (
    <section className="bg-ink">
      <div className="container section relative">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-secondary/60 to-transparent"
          aria-hidden="true"
        />
        <SectionHeading
          tone="dark"
          eyebrow="How we work"
          title="A team built around your outcomes"
          description="Small senior teams, transparent process and a relentless focus on the results that matter to your business."
        />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden bg-ink p-7 transition-colors duration-300 hover:bg-ink-800"
            >
              <span
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-secondary to-lightMedium transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-secondary/0 blur-2xl transition-colors duration-500 group-hover:bg-secondary/20"
                aria-hidden="true"
              />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:scale-110 group-hover:border-secondary/50 [&_svg]:text-secondary">
                {stat.icon}
              </div>
              <h3 className="relative mt-6 text-lg font-semibold text-white">{stat.label}</h3>
              <p className="relative mt-2 text-[15px] leading-relaxed text-zinc-400">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
