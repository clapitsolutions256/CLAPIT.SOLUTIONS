import React from "react";
import { Check } from "lucide-react";
import { CaseStudy } from "../types";
import { cn } from "@/utilities/ui";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { BrowserFrame, PhoneFrame } from "./Frames";

type Section = NonNullable<CaseStudy["data"]>["sections"][number];
type Img = { src: any; alt: string; isMobile?: boolean };

function Media({ images, url }: { images: Img[]; url?: string }) {
  const phones = images.filter((i) => i.isMobile);
  const desktops = images.filter((i) => !i.isMobile);

  return (
    <div className="space-y-6">
      {desktops.length > 0 && (
        <>
          <Reveal y={40}>
            <BrowserFrame src={desktops[0].src} alt={desktops[0].alt} url={url} />
          </Reveal>
          {desktops.length > 1 && (
            <RevealGroup className="grid gap-6 sm:grid-cols-2" stagger={0.1}>
              {desktops.slice(1).map((img, i) => (
                <RevealItem key={i}>
                  <BrowserFrame src={img.src} alt={img.alt} sizes="(max-width: 640px) 100vw, 30vw" />
                </RevealItem>
              ))}
            </RevealGroup>
          )}
        </>
      )}

      {phones.length > 0 && (
        <div className="rounded-3xl bg-gradient-to-br from-zinc-100 via-zinc-50 to-brand-50 px-4 py-10 sm:px-8">
          <RevealGroup className="flex flex-wrap items-start justify-center gap-5 sm:gap-8" stagger={0.12}>
            {phones.map((img, i) => (
              <RevealItem
                key={i}
                className={cn("w-[44%] sm:w-[30%] max-w-[240px]", i % 2 === 1 && "sm:mt-10")}
              >
                <PhoneFrame src={img.src} alt={img.alt} className="mx-auto" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      )}
    </div>
  );
}

function Feature({
  section,
  index,
  url,
}: {
  section: Section;
  index: number;
  url?: string;
}) {
  const images: Img[] = [...(section.images ?? []), ...(section.sliderImages ?? [])];
  const hasMedia = images.length > 0 || !!section.video;
  const flip = index % 2 === 1;

  const text = (
    <div className={cn(hasMedia && "lg:sticky lg:top-28")}>
      <Reveal>
        <span className="font-heading text-sm font-semibold text-secondary">
          {String(index + 1).padStart(2, "0")}
        </span>
        {section.title && (
          <h3 className="mt-2 font-heading text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
            {section.title}
          </h3>
        )}
      </Reveal>
      {section.description && (
        <Reveal delay={0.08}>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">{section.description}</p>
        </Reveal>
      )}
      {section.subDescriptions && section.subDescriptions.length > 0 && (
        <RevealGroup
          as="ul"
          className={cn("mt-6 grid gap-3", !hasMedia && "sm:grid-cols-2")}
          stagger={0.06}
          delay={0.1}
        >
          {section.subDescriptions.map((item, i) => (
            <RevealItem as="li" key={i} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-secondary">
                <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
              </span>
              <span className="text-[15px] leading-relaxed text-zinc-700">
                {item.replace(/^✓\s*/, "")}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      )}
    </div>
  );

  if (!hasMedia) {
    return (
      <div className="rounded-3xl border border-zinc-200 bg-background p-7 sm:p-10">{text}</div>
    );
  }

  return (
    <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
      <div className={cn("lg:col-span-5", flip && "lg:order-2")}>{text}</div>
      <div className={cn("lg:col-span-7", flip && "lg:order-1")}>
        {images.length > 0 && <Media images={images} url={url} />}
        {section.video && (
          <Reveal y={40} className={images.length ? "mt-6" : ""}>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-[0_24px_60px_-20px_rgba(16,16,20,0.25)]">
              <video className="h-auto w-full" autoPlay loop muted playsInline>
                <source src={section.video.src} type="video/mp4" />
              </video>
            </div>
          </Reveal>
        )}
      </div>
    </div>
  );
}

/** Key features of the project, alternating text / screenshots. */
export default function Data({ data, url }: { data: CaseStudy["data"]; url?: string }) {
  const sections = data?.sections ?? [];
  if (!sections.length) return null;

  return (
    <section className="section bg-white">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-4">Inside the product</p>
          <h2 className="max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            Key features we built
          </h2>
        </Reveal>
        <div className="mt-16 space-y-24 md:space-y-32">
          {sections.map((section, i) => (
            <Feature key={i} section={section} index={i} url={url} />
          ))}
        </div>
      </div>
    </section>
  );
}
