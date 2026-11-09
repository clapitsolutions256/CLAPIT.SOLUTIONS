import React from "react";
import { Lightbulb } from "lucide-react";
import { CaseStudy } from "../types";
import SectionHeading from "../ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

export default function Objectives({ data }: { data: CaseStudy }) {
  const objectives = data.objectives ?? [];
  if (!objectives.length && !data.approachDescription) return null;

  return (
    <section className="section bg-white">
      <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow="The challenge" title="Objectives" />
          <RevealGroup as="ol" className="mt-10 space-y-4" stagger={0.08}>
            {objectives.map((objective, index) => (
              <RevealItem as="li" key={index}>
                <div className="flex gap-5 rounded-2xl border border-zinc-200 p-5">
                  <span className="font-heading text-2xl font-semibold text-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] leading-relaxed text-zinc-700 sm:text-base">{objective}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {data.approachDescription && (
          <Reveal delay={0.1} className="lg:pt-24">
            <div className="relative h-full overflow-hidden rounded-3xl bg-ink p-8 sm:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary/25 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-white">
                  <Lightbulb className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-semibold text-white sm:text-3xl">
                  {data.approachTitle || "Our approach"}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
                  {data.approachDescription}
                </p>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
