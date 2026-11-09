"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import SectionHeading from "../ui/SectionHeading";
import { Button } from "../ui/button";
import { CaseStudy } from "../types";

const HOME_LIMIT = 4;

/**
 * Stacked case-study cards: each card sticks below the header and, as the
 * next one slides over it, scales down, dims and blurs slightly — driven
 * continuously by scroll position rather than on/off triggers.
 */
export default function CaseStudyScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const featured = caseStudies.filter((study) => study.featured).slice(0, HOME_LIMIT);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (featured.length === 0) return null;

  return (
    <section className="bg-white pt-20 md:pt-28" id="work">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title="Products we've helped bring to life"
          description="A few recent projects across healthcare, manufacturing, retail and consumer apps."
          action={
            <Button asChild variant="outline">
              <Link href="/case-studies">
                View all projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          }
        />
      </div>

      <div ref={containerRef} className="container relative mt-12 pb-20 md:pb-28">
        {featured.map((study, index) => (
          <StackCard
            key={study.id}
            study={study}
            index={index}
            total={featured.length}
            progress={scrollYProgress}
            reduce={!!reduce}
          />
        ))}
      </div>
    </section>
  );
}

function StackCard({
  study,
  index,
  total,
  progress,
  reduce,
}: {
  study: CaseStudy & { featured?: boolean };
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  // Each later card pushes this one back a little further.
  const start = index / total;
  const targetScale = 1 - (total - index - 1) * 0.04;
  const scale = useTransform(progress, [start, 1], [1, reduce ? 1 : targetScale]);
  const dim = useTransform(progress, [start, Math.min(1, start + 1 / total)], [0, reduce ? 0 : 0.18]);
  const isLast = index === total - 1;

  return (
    <div
      className="sticky flex h-auto items-start pb-6 lg:h-[calc(100vh-7rem)] lg:items-center"
      style={{ top: `calc(96px + ${index * 20}px)` }}
    >
      <motion.article
        style={{ scale, transformOrigin: "top center" }}
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_-8px_40px_rgba(16,16,20,0.08)]"
      >
        <Link
          href={`/case-studies/${study.id}`}
          className="group grid lg:min-h-[520px] lg:grid-cols-2"
          aria-label={`Read the ${study.title} case study`}
        >
          <div className="flex flex-col justify-between gap-8 p-7 sm:p-10 lg:p-12">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-heading text-sm font-semibold text-zinc-400">
                  {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                {study.industries && (
                  <ul className="flex flex-wrap justify-end gap-2">
                    {study.industries.slice(0, 2).map((industry) => (
                      <li
                        key={industry}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
                      >
                        {industry}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <h3 className="mt-8 font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
                {study.title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600">{study.subtitle}</p>
              {study.description && (
                <p className="mt-4 line-clamp-3 text-[15px] leading-relaxed text-zinc-500">
                  {study.description}
                </p>
              )}
            </div>

            <div>
              {study.technologies && study.technologies.length > 0 && (
                <ul className="mb-8 flex flex-wrap gap-2">
                  {study.technologies.slice(0, 5).map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-600"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
              <span className="inline-flex items-center gap-2 font-semibold text-ink transition-colors group-hover:text-secondary">
                View case study
                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden bg-gradient-to-br from-zinc-100 via-zinc-50 to-brand-50 sm:min-h-[360px]">
            <div
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"
              aria-hidden="true"
            />
            {study.image && (
              <Image
                src={study.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={index === 0}
                className="object-contain p-8 drop-shadow-xl transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:p-12"
              />
            )}
          </div>
        </Link>

        {/* Dims as the next card covers it */}
        {!isLast && (
          <motion.div
            className="pointer-events-none absolute inset-0 bg-ink"
            style={{ opacity: dim }}
            aria-hidden="true"
          />
        )}
      </motion.article>
    </div>
  );
}
