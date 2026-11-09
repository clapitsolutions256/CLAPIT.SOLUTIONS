"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Category, Service } from "@/components/types";
import SectionHeading from "../ui/SectionHeading";
import { cn } from "@/utilities/ui";

export default function ServicesSection({
  services,
  categories,
}: {
  services: Service[];
  categories: Category[];
}) {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const filteredServices = services.filter(
    (service) => service.category === activeCategory
  );

  return (
    <section className="section bg-background" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          title="All the strength your product needs to grow"
          description="End-to-end engineering and marketing under one roof — so strategy, build and growth move at the same pace."
          action={
            <div
              role="tablist"
              aria-label="Service categories"
              className="inline-flex rounded-xl border border-zinc-200 bg-white p-1 shadow-card"
            >
              {categories.map((category) => {
                const active = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "relative h-10 rounded-lg px-5 text-sm font-semibold transition-colors",
                      active ? "text-white" : "text-zinc-600 hover:text-ink"
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="services-active-tab"
                        className="absolute inset-0 rounded-lg bg-ink"
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{category.label}</span>
                  </button>
                );
              })}
            </div>
          }
        />

        <AnimatePresence mode="wait" initial={false}>
          <motion.ul
            key={activeCategory}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07 } },
              exit: { opacity: 0, transition: { duration: 0.2 } },
            }}
            className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredServices.map((service) => (
              <motion.li
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <SpotlightCard service={service} />
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>
  );
}

/** Card with a cursor-following brand glow and a top accent line on hover. */
function SpotlightCard({ service }: { service: Service }) {
  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <Link
      href={service.href || `/services/${service.id}`}
      onMouseMove={onMove}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-card-hover"
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--mx, 50%) var(--my, 0%), rgba(219,26,26,0.09), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <span
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-secondary to-lightMedium transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />
      <div className="relative flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary [&_svg]:h-5 [&_svg]:w-5">
          {service.icon}
        </div>
        <ArrowUpRight
          className="h-5 w-5 text-zinc-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-secondary"
          aria-hidden="true"
        />
      </div>
      <h3 className="relative mt-6 text-lg font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-secondary">
        {service.title}
      </h3>
      <p className="relative mt-2 text-[15px] leading-relaxed text-zinc-600">
        {service.description}
      </p>
    </Link>
  );
}
