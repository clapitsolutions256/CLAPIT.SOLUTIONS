"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { CSSProperties, useState } from "react";

const scrollbarHideStyles: CSSProperties = {
  msOverflowStyle: "none" as const,
  scrollbarWidth: "none" as const,
  WebkitOverflowScrolling: "touch",
};

export interface Service {
  title: string;
  href: string;
  description?: string;
  category: string;
}
interface Category {
  id: string;
  label: string;
}
interface DropdownMenuProps {
  onClose: () => void;
  developmentServices?: Service[];
  marketingServices?: Service[];
  developmentIndustries?: any[];
  marketingIndustries?: any[];
  seeAll: string;
  title: string;
}

export default function DropdownMenu({
  onClose,
  developmentServices = [],
  marketingServices = [],
  developmentIndustries = [],
  marketingIndustries = [],
  seeAll,
  title,
}: DropdownMenuProps) {
  const [activeTab, setActiveTab] = useState<"development" | "marketing">("development");
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0 },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 24,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const devItems = developmentServices.length > 0 ? developmentServices : developmentIndustries;
  const marketingItems = marketingServices.length > 0 ? marketingServices : marketingIndustries;
  
  const hasDevelopment = devItems.length > 0;
  const hasMarketing = marketingItems.length > 0;

  const ServiceCard = ({ item }: { item: any }) => (
    <motion.div key={item.title || item.id} variants={itemVariants}>
      <Link
        href={item.href}
        onClick={onClose}
        className="group block h-full rounded-xl border border-transparent p-4 transition-colors hover:border-zinc-200 hover:bg-zinc-50"
      >
        <h3 className="flex items-center gap-1.5 text-[15px] font-semibold text-ink group-hover:text-secondary">
          {item.title}
          <span aria-hidden="true" className="translate-x-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100">→</span>
        </h3>
        {item.description && (
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-zinc-600">
            {item.description}
          </p>
        )}
      </Link>
    </motion.div>
  );

  const showDev = (activeTab === "development" && hasDevelopment) || (!hasMarketing && hasDevelopment);
  const showMarketing = (activeTab === "marketing" && hasMarketing) || (!hasDevelopment && hasMarketing);
  const items = showDev ? devItems : showMarketing ? marketingItems : [];

  return (
    <motion.div
      className="flex max-h-[80vh] w-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_24px_64px_rgba(16,16,20,0.18)]"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      {hasDevelopment && hasMarketing && (
        <div className="flex items-center justify-between border-b border-zinc-200 px-6">
          <div className="flex gap-6" role="tablist" aria-label="Service categories">
            {(["development", "marketing"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`-mb-px border-b-2 py-4 text-sm font-semibold capitalize transition-colors ${
                  activeTab === tab
                    ? "border-secondary text-ink"
                    : "border-transparent text-zinc-500 hover:text-ink"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <Link
            href={seeAll}
            onClick={onClose}
            className="hidden text-sm font-semibold text-secondary hover:underline sm:inline"
          >
            View all {title} →
          </Link>
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-3 sm:p-4" style={scrollbarHideStyles}>
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 9).map((item: any) => (
            <ServiceCard key={item.title || item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="border-t border-zinc-200 px-6 py-4 sm:hidden">
        <Link href={seeAll} onClick={onClose} className="text-sm font-semibold text-secondary">
          View all {title} →
        </Link>
      </div>
    </motion.div>
  );
}
