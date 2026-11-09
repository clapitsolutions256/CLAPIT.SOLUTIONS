"use client";

import { motion } from "framer-motion";
import { steps } from "@/data/getStarted";
import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { Button } from "../ui/button";

interface Industry {
  icon: string | ReactNode;
  title: string;
  href?: string;
  description: string;
}

interface TechStack {
  heading: string;
  paragraph: string;
  industries: Industry[];
}

interface GetStartedProps {
  data?: TechStack;
  bgColor?: string;
  button: boolean;
}

export default function GetStarted({ data, bgColor, button }: GetStartedProps) {
  const { heading, paragraph, industries } = data || steps;

  const CardContent = ({ icon, title, description }: Industry) => (
    <>
      <span
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-secondary to-lightMedium transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 font-heading text-lg font-semibold text-secondary transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white [&_svg]:h-5 [&_svg]:w-5">
        {icon}
      </div>
      <h3 className="mt-5 text-base font-semibold leading-snug text-ink sm:text-lg">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">{description}</p>
    </>
  );

  const cardClass =
    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-card-hover";

  return (
    <section className="section" style={{ backgroundColor: bgColor || "#fff" }}>
      <div className="container">
        <SectionHeading
          eyebrow={button ? "Our process" : undefined}
          title={heading}
          description={paragraph}
          action={
            button ? (
              <Button asChild variant="outline">
                <Link href="/pricing">
                  See our plans
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            ) : undefined
          }
        />

        <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ icon, title, description, href }, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {href && href.trim() !== "" && href !== "#" ? (
                <Link href={href} className={cardClass}>
                  <CardContent icon={icon} title={title} description={description} />
                </Link>
              ) : (
                <div className={cardClass}>
                  <CardContent icon={icon} title={title} description={description} />
                </div>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
