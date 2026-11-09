import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CaseStudy } from "../types";
import { RevealGroup, RevealItem } from "../ui/Reveal";

/** Previous / next project cards at the end of a case study. */
export default function MoreProjects({
  prev,
  next,
}: {
  prev?: CaseStudy;
  next?: CaseStudy;
}) {
  const items = [
    prev && { study: prev, label: "Previous project", dir: "prev" as const },
    next && { study: next, label: "Next project", dir: "next" as const },
  ].filter(Boolean) as { study: CaseStudy; label: string; dir: "prev" | "next" }[];

  if (!items.length) return null;

  return (
    <section className="pb-8 pt-4">
      <div className="container">
        <RevealGroup className="grid gap-5 md:grid-cols-2" stagger={0.1}>
          {items.map(({ study, label, dir }) => (
            <RevealItem key={study.id} className="min-w-0">
              <Link
                href={`/case-studies/${study.id}`}
                className="group flex items-center gap-5 overflow-hidden rounded-3xl border border-zinc-200 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-card-hover sm:p-5"
              >
                <div className="relative h-20 w-24 flex-shrink-0 sm:h-28 overflow-hidden rounded-2xl bg-zinc-100 sm:w-40">
                  {study.image && (
                    <Image
                      src={study.image}
                      alt=""
                      fill
                      sizes="160px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                    {dir === "prev" && <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />}
                    {label}
                    {dir === "next" && <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />}
                  </p>
                  <h3 className="mt-2 truncate font-heading text-xl font-semibold text-ink transition-colors group-hover:text-secondary sm:text-2xl">
                    {study.title}
                  </h3>
                  <p className="mt-1 line-clamp-1 text-sm text-zinc-600">{study.subtitle}</p>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
