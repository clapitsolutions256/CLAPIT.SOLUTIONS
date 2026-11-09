import React from "react";
import SectionHeading from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../ui/Reveal";

interface ResultItem {
  label: string;
  value: string;
}

export default function Result({ results }: { results: ResultItem[] }) {
  if (!results || results.length === 0) return null;

  return (
    <section className="px-3 sm:px-4">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-3xl bg-ink py-20 md:py-24">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-secondary/60 to-transparent"
          aria-hidden="true"
        />
        <div className="container">
          <SectionHeading tone="dark" align="center" eyebrow="Outcome" title="Results at a glance" />
          <RevealGroup
            className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4"
            stagger={0.08}
          >
            {results.map((result, index) => (
              <RevealItem key={index} className="bg-ink p-6 text-center sm:p-8">
                <p className="font-heading text-2xl font-semibold text-white sm:text-3xl">{result.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
                  {result.label}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
