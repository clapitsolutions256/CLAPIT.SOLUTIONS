"use client";
import Image from "next/image";
import { logos } from "@/data/testimonials";

/**
 * Trusted-by logo strip. Pure CSS marquee: pauses on hover/focus and is
 * replaced by a static wrap when the visitor prefers reduced motion.
 */
export default function OurPartners() {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section aria-labelledby="partners-heading" className="border-b border-zinc-100 bg-white py-14 md:py-16">
      <div className="container">
        <p
          id="partners-heading"
          className="text-center text-sm font-medium uppercase tracking-[0.14em] text-zinc-500"
        >
          Trusted by growing businesses worldwide
        </p>
      </div>

      <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="flex w-max animate-[marquee_40s_linear_infinite] items-center group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center">
          {duplicatedLogos.map((logo, index) => (
            <li
              key={`logo-${index}`}
              aria-hidden={index >= logos.length}
              className={`mx-8 flex h-16 w-[120px] flex-shrink-0 items-center justify-center md:mx-12 md:w-[140px] ${index >= logos.length ? "motion-reduce:hidden" : ""}`}
            >
              <Image
                src={logo.logo}
                alt={index < logos.length ? logo.name : ""}
                width={140}
                height={64}
                className="h-12 w-auto object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-14"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
