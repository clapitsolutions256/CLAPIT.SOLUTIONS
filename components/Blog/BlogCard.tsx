import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  image: string | StaticImageData | null | undefined;
  category?: string;
}

// Generate gradient colors based on category
const getCategoryGradient = (category?: string): string => {
  const categoryMap: Record<string, string> = {
    "Web Design": "from-blue-500 to-cyan-500",
    "UI/UX Design": "from-purple-500 to-pink-500",
    "Advertising Design": "from-orange-500 to-red-500",
    "Branding": "from-indigo-500 to-purple-500",
    "Graphic Design": "from-green-500 to-emerald-500",
    "Infographic Design & Illustration": "from-yellow-500 to-orange-500",
    "Motion Graphics": "from-pink-500 to-rose-500",
    "development": "from-blue-600 to-indigo-600",
    "business": "from-emerald-600 to-teal-600",
  };
  
  return categoryMap[category || ""] || "from-secondary to-lightMedium";
};

// Generate placeholder with first letter of title
const generatePlaceholder = (title: string, category?: string) => {
  const firstLetter = title.charAt(0).toUpperCase();
  const gradient = getCategoryGradient(category);
  
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center relative`}>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 text-white text-6xl md:text-7xl font-bold opacity-80">
        {firstLetter}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
    </div>
  );
};

export default function BlogCard({
  id,
  title,
  description,
  image,
  category,
}: BlogCardProps) {
  const hasImage = image && (typeof image === "string" ? image.length > 0 : true);

  return (
    <Link
      href={`/blogs/${id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
        {hasImage ? (
          <Image
            src={image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt=""
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          generatePlaceholder(title, category)
        )}
        {category && (
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink shadow-sm">
            {category}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-secondary sm:text-xl">
          {title}
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-[15px] leading-relaxed text-zinc-600">
          {description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
          Read article
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
