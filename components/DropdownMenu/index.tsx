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
    className="
      block lg:p-4 p-2 rounded-xl relative

      border border-[#d8d5d3]
      shadow-[0_2px_4px_rgba(0,0,0,0.08),0_6px_12px_rgba(0,0,0,0.12)]
      hover:-translate-y-1 transition-all duration-300
      lg:h-[16vh] h-[20vh] overflow-hidden
      before:absolute before:inset-1 before:rounded-lg
      before:bg-gradient-to-br before:from-[#f4f1ef] before:to-[#e6e0dd]
      before:shadow-[inset_3px_3px_8px_rgba(0,0,0,0.12),
                      inset_-3px_-3px_8px_rgba(255,255,255,0.4)]
      before:z-0
    "
  >
    <div className="relative z-10">
      <h3 className="lg:font-medium font-bold lg:text-[16px] text-[12px] text-dark mb-1">
        {item.title}
      </h3>

      {item.description && (
        <p className="sm:text-sm text-xs text-gray-500">
          {item.description.length > 100
            ? item.description.slice(0, 110) + "..."
            : item.description}
        </p>
      )}
    </div>
  </Link>
</motion.div>
  );

  return (
    <div>
      <motion.div
        className="w-full bg-white dark:bg-dark rounded-xl shadow-lg overflow-hidden max-h-[90vh] md:max-h-none flex flex-col"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
      >
        <style>
          {`
          ::-webkit-scrollbar {
            display: none;
          }
        `}
        </style>

        {/* Tabs */}
        {(hasDevelopment && hasMarketing) && (
          <div className="border-b border-gray-200 dark:border-gray-700 px-6 pt-4">
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab("development")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "development"
                    ? "text-secondary border-b-2 border-secondary"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                Development
              </button>
              <button
                onClick={() => setActiveTab("marketing")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "marketing"
                    ? "text-secondary border-b-2 border-secondary"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                Marketing
              </button>
            </div>
          </div>
        )}

        <div className="overflow-y-auto flex-1 " style={scrollbarHideStyles}>
          <div className="p-6">
            {/* Development Tab Content */}
            {((activeTab === "development" && hasDevelopment) || (!hasMarketing && hasDevelopment)) && (
              <div>
                {(!hasDevelopment || !hasMarketing) && (
                  <h2 className="text-2xl font-bold text-light mb-4">Development</h2>
                )}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {devItems.slice(0, 6).map((item) => (
                    <ServiceCard key={item.title || item.id} item={item} />
                  ))}
                </div>
              </div>
            )}

            {/* Marketing Tab Content */}
            {((activeTab === "marketing" && hasMarketing) || (!hasDevelopment && hasMarketing)) && (
              <div>
                {(!hasDevelopment || !hasMarketing) && (
                  <h2 className="text-2xl font-bold text-light mb-4">Marketing</h2>
                )}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {marketingItems.slice(0, 6).map((item) => (
                    <ServiceCard key={item.title || item.id} item={item} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-400 z-[999] p-4">
          <Link
            href={seeAll}
            onClick={() => {
              onClose();
            }}
            className="w-full text-left px-4 py-2 cursor-pointer text-sm text-gray-500 light:text-secondary dark:text-primary dark:light:text-secondary transition-colors"
          >
            View all {title} →
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
