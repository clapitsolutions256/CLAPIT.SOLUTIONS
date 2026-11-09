import React from "react";
import { CaseStudy } from "../types";
import { Reveal } from "../ui/Reveal";

/** Overview copy + a sticky "project facts" card (industries, services, stack). */
export default function DescriptionSection({ study }: { study: CaseStudy }) {
  if (!study?.title) return null;

  return (
    <section className="section bg-white">
      <div className="container grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow mb-4">Overview</p>
            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              About the project
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600">{study.description}</p>
          </Reveal>

          {study.video && (
            <Reveal delay={0.15} className="mt-10">
              <div
                className={
                  study.video.isMobile
                    ? "mx-auto w-full max-w-[280px] overflow-hidden rounded-[2.4rem] bg-ink p-2.5 shadow-2xl"
                    : "overflow-hidden rounded-2xl border border-zinc-200 shadow-[0_24px_60px_-20px_rgba(16,16,20,0.25)]"
                }
              >
                <video
                  className={study.video.isMobile ? "w-full rounded-[1.9rem]" : "h-auto w-full"}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={study.video.src} type="video/mp4" />
                </video>
              </div>
            </Reveal>
          )}
        </div>

        <aside className="lg:col-span-5">
          <Reveal delay={0.15} className="lg:sticky lg:top-28">
            <div className="rounded-3xl border border-zinc-200 bg-background p-7 sm:p-8">
              <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">
                Project facts
              </h3>
              <dl className="mt-6 space-y-6">
                {study.industries && study.industries.length > 0 && (
                  <div>
                    <dt className="text-sm font-semibold text-ink">Industry</dt>
                    <dd className="mt-1 text-[15px] text-zinc-600">{study.industries.join(" · ")}</dd>
                  </div>
                )}
                {study.services && study.services.length > 0 && (
                  <div>
                    <dt className="text-sm font-semibold text-ink">What we did</dt>
                    <dd className="mt-1 text-[15px] text-zinc-600">{study.services.join(" · ")}</dd>
                  </div>
                )}
                {study.technologies && study.technologies.length > 0 && (
                  <div>
                    <dt className="text-sm font-semibold text-ink">Tech stack</dt>
                    <dd className="mt-3 flex flex-wrap gap-2">
                      {study.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700"
                        >
                          {t}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}
