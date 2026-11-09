import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { CaseStudy } from "../types";
import { Reveal } from "../ui/Reveal";
import { BrowserFrame, PhoneFrame } from "./Frames";

/** Collect the mobile screenshots of a study (used for app hero mockups). */
export function mobileImages(study: CaseStudy) {
  return (study.data?.sections ?? []).flatMap((s) =>
    (s.images ?? []).filter((img) => img.isMobile)
  );
}

export default function CaseStudiesDetailHeader({ study }: { study: CaseStudy }) {
  const isApp = Boolean(study.appStoreLink || study.playStoreLink);
  const phones = mobileImages(study).slice(0, 2);
  const tech = study.technologies ?? [];

  return (
    <section className="px-3 pt-24 sm:px-4">
      <div className="relative isolate mx-auto max-w-[1440px] overflow-hidden rounded-3xl bg-ink [clip-path:inset(0_round_1.5rem)]">
        {/* Background texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:56px_56px]"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-secondary/25 blur-3xl" aria-hidden="true" />

        <div className="relative grid items-center gap-12 px-6 pb-12 pt-10 sm:px-10 lg:grid-cols-12 lg:gap-10 lg:px-16 lg:pb-16 lg:pt-14">
          <div className="lg:col-span-6">
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              All case studies
            </Link>

            <Reveal delay={0.05}>
              {study.industries && study.industries.length > 0 && (
                <ul className="mt-8 flex flex-wrap gap-2">
                  {study.industries.map((i) => (
                    <li key={i} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
                      {i}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {study.title}
              </h1>
            </Reveal>
            {study.subtitle && (
              <Reveal delay={0.15}>
                <p className="mt-4 text-lg font-medium text-secondary sm:text-xl">{study.subtitle}</p>
              </Reveal>
            )}
            {study.details && (
              <Reveal delay={0.2}>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">{study.details}</p>
              </Reveal>
            )}

            <Reveal delay={0.25} className="mt-8 flex flex-wrap gap-3">
              {study.link && (
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 items-center gap-2 rounded-lg bg-secondary px-6 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(219,26,26,0.35)] transition-colors hover:bg-brand-600"
                >
                  Visit live site
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              )}
              {study.appStoreLink && (
                <a
                  href={study.appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-3 rounded-lg bg-white px-5 text-ink transition-colors hover:bg-zinc-200"
                >
                  <FaApple className="h-6 w-6" aria-hidden="true" />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] font-medium">Download on the</span>
                    <span className="block text-sm font-semibold">App Store</span>
                  </span>
                </a>
              )}
              {study.playStoreLink && (
                <a
                  href={study.playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-3 rounded-lg border border-white/20 bg-white/5 px-5 text-white transition-colors hover:bg-white/15"
                >
                  <FaGooglePlay className="h-5 w-5" aria-hidden="true" />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] font-medium text-zinc-300">Get it on</span>
                    <span className="block text-sm font-semibold">Google Play</span>
                  </span>
                </a>
              )}
            </Reveal>
          </div>

          <Reveal delay={0.2} y={40} className="lg:col-span-6">
            {isApp && phones.length > 0 ? (
              <div className="flex items-end justify-center gap-4 sm:gap-6">
                {phones.map((p, i) => (
                  <PhoneFrame
                    key={i}
                    src={p.src}
                    alt={p.alt}
                    priority
                    className={i === 1 ? "hidden translate-y-8 sm:block" : ""}
                  />
                ))}
              </div>
            ) : (
              study.image && (
                <BrowserFrame
                  src={study.image}
                  alt={study.alt || study.title || "Project screenshot"}
                  url={study.link}
                  priority
                  className="lg:translate-x-6"
                />
              )
            )}
          </Reveal>
        </div>

        {/* Key facts strip */}
        <dl className="relative grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
          {[
            { label: "Industry", value: study.industries?.[0] },
            { label: "Services", value: study.services?.slice(0, 2).join(", ") },
            { label: "Platform", value: isApp ? "iOS & Android" : "Web (responsive)" },
            { label: "Tech stack", value: tech.slice(0, 3).join(", ") },
          ]
            .filter((f) => f.value)
            .map((f) => (
              <div key={f.label} className="border-white/10 px-6 py-5 odd:border-r md:border-r md:last:border-r-0 sm:px-10 lg:px-16">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">{f.label}</dt>
                <dd className="mt-1.5 text-sm font-medium text-zinc-200">{f.value}</dd>
              </div>
            ))}
        </dl>
      </div>
    </section>
  );
}
