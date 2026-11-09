import React from "react";
import SectionHeading from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../ui/Reveal";

interface Service {
  name: string;
  icon: React.ElementType;
}

export default function ServicesProvided({ services }: { services: Service[] }) {
  if (!services?.length) return null;

  return (
    <section className="section bg-background">
      <div className="container">
        <SectionHeading eyebrow="Services" title="What we delivered" />
        <RevealGroup
          as="ul"
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {services.map((service, index) => (
            <RevealItem as="li" key={index}>
              <div className="group flex h-full items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-card-hover">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="text-[15px] font-semibold text-ink">{service.name}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
