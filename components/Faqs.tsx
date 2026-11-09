"use client";

import React, { useId, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import FAQSchema from "./StructuredData/FAQSchema";
import { cn } from "@/utilities/ui";

interface FAQItem {
  title: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  subtitle: string;
  faqs: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ title, subtitle, faqs }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const baseId = useId();

  const faqSchemaItems = faqs.map((faq) => ({
    question: faq.title,
    answer: faq.answer,
  }));

  return (
    <section className="section bg-white">
      <FAQSchema faqs={faqSchemaItems} />
      <div className="container grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <motion.div
            className="lg:sticky lg:top-28"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="font-heading text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">{subtitle}</p>
            <p className="mt-8 text-[15px] text-zinc-600">
              Can&apos;t find what you&apos;re looking for?{" "}
              <Link href="/contact-us" className="font-semibold text-secondary hover:underline">
                Talk to our team →
              </Link>
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-8">
          <motion.ul
            className="divide-y divide-zinc-200 border-y border-zinc-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          >
            {faqs.map((faq, index) => {
              const open = openFaq === index;
              const panelId = `${baseId}-panel-${index}`;
              const buttonId = `${baseId}-button-${index}`;
              return (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  <h3 className="m-0">
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenFaq(open ? null : index)}
                      className="flex w-full items-start justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={cn(
                          "font-sans text-base font-semibold leading-snug transition-colors sm:text-lg",
                          open ? "text-secondary" : "text-ink hover:text-secondary"
                        )}
                      >
                        {faq.title}
                      </span>
                      <span
                        className={cn(
                          "mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                          open
                            ? "rotate-45 border-secondary bg-secondary text-white"
                            : "border-zinc-300 text-ink"
                        )}
                        aria-hidden="true"
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-3xl pb-6 pr-12 text-[15px] leading-relaxed text-zinc-600 sm:text-base">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
