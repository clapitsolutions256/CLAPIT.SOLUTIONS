import React from "react";
import { Quote } from "lucide-react";
import { CaseStudy } from "../types";
import { Reveal } from "../ui/Reveal";

export default function Conclusion({ study }: { study: CaseStudy }) {
  if (!study.Conclusion) return null;

  return (
    <section className="section bg-white">
      <div className="container">
        <Reveal>
          <figure className="relative mx-auto max-w-4xl text-center">
            <Quote className="mx-auto h-10 w-10 text-secondary" aria-hidden="true" />
            <blockquote className="mt-6 font-heading text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
              {study.Conclusion}
            </blockquote>
            <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Conclusion
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
