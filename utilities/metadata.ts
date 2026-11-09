import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://www.clapit.solutions';
const siteName = "CLAPIT SOLUTIONS";
const defaultOgImage = `${baseUrl}/images/og-image.jpg`;

export interface MetadataOptions {
  title: string;
  description: string;
  keywords?: string | string[];
  url?: string;
  image?: string | { src: string } | { url: string };
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
}

/**
 * Generate comprehensive metadata for any page
 * Eliminates duplication and ensures consistent SEO across all pages
 */
export function generateMetadata(options: MetadataOptions): Metadata {
  const {
    title,
    description,
    keywords,
    url,
    image,
    type = "website",
    publishedTime,
    noIndex = false,
  } = options;

  // Normalize keywords to array
  const keywordsArray = Array.isArray(keywords)
    ? keywords
    : keywords
    ? keywords.split(',').map(k => k.trim())
    : [];

  // Normalize image URL
  let imageUrl: string | undefined;
  if (image) {
    if (typeof image === 'string') {
      imageUrl = image;
    } else if ('src' in image) {
      imageUrl = image.src;
    } else if ('url' in image) {
      imageUrl = image.url;
    }
  }
  const ogImage = imageUrl || defaultOgImage;

  // Build full title
  const fullTitle = url ? title : `${title} | ${siteName}`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywordsArray.length > 0 ? keywordsArray : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url: url || baseUrl,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type,
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@clapit",
    },
    alternates: {
      canonical: url || baseUrl,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };

  return metadata;
}

/**
 * Generate metadata for service pages
 */
export function generateServiceMetadata(
  service: {
    seoTitle?: string;
    title?: string;
    seoDescription?: string;
    description?: string;
    seoKeywords?: string | string[];
    seoImage?: string | { src: string } | any;
    id?: string;
  }
): Metadata {
  const serviceTitle = service.title || "Service";
  const serviceId = service.id || "";
  const title = service.seoTitle || `${serviceTitle} | ${siteName}`;
  const description =
    service.seoDescription ||
    service.description ||
    `Professional ${serviceTitle} services by ${siteName}. Expert development and branding solutions.`;
  const keywords = service.seoKeywords || [
    serviceTitle,
    siteName,
    "development",
    "branding",
  ];

  return generateMetadata({
    title,
    description,
    keywords,
    url: `${baseUrl}/services/${serviceId}`,
    image: service.seoImage,
    type: "website",
  });
}

/**
 * Generate metadata for blog posts
 */
export function generateBlogMetadata(
  blog: {
    title?: string;
    description?: string;
    slug?: string;
    coverImage?: string | { src: string } | any | null;
    category?: string;
  }
): Metadata {
  const blogTitle = blog.title || "Blog Post";
  const blogDescription = blog.description || "Read our latest blog post";
  const blogSlug = blog.slug || "";
  const keywords = [
    blog.category || "development",
    "technology",
    "development",
    siteName,
  ];

  // Normalize coverImage
  let image: string | { src: string } | undefined;
  if (blog.coverImage) {
    if (typeof blog.coverImage === 'string') {
      image = blog.coverImage;
    } else if (blog.coverImage && typeof blog.coverImage === 'object' && 'src' in blog.coverImage) {
      image = { src: blog.coverImage.src };
    }
  }

  return generateMetadata({
    title: blogTitle,
    description: blogDescription,
    keywords,
    url: `${baseUrl}/blogs/${blogSlug}`,
    image,
    type: "article",
    publishedTime: new Date().toISOString(),
  });
}

/**
 * Generate metadata for case study pages
 */
export function generateCaseStudyMetadata(
  study: {
    title?: string;
    description?: string;
    details?: string;
    id?: string;
    image?: string | any;
    industries?: string[];
    services?: string[];
  }
): Metadata {
  const studyTitle = study.title || "Case Study";
  const studyId = study.id || "";
  const title = `${studyTitle} – Case Study`; // layout template appends " | CLAPIT SOLUTIONS"
  const description =
    study.description ||
    study.details ||
    `Explore how ${siteName} delivered ${studyTitle} - a successful project showcasing our expertise.`;
  const keywords = [
    ...(study.industries || []),
    ...(study.services || []),
    "case study",
    siteName,
    "portfolio",
  ];

  // Normalize image
  let imageUrl: string | undefined;
  if (study.image) {
    if (typeof study.image === 'string') {
      imageUrl = study.image;
    } else if (study.image && typeof study.image === 'object' && 'src' in study.image) {
      imageUrl = study.image.src;
    }
  }

  return generateMetadata({
    title,
    description,
    keywords,
    url: `${baseUrl}/case-studies/${studyId}`,
    image: imageUrl,
    type: "article",
  });
}

/**
 * Generate metadata for industry pages
 */
export function generateIndustryMetadata(
  industry: {
    seoTitle?: string;
    title?: string;
    seoDescription?: string;
    description?: string;
    seoKeywords?: string | string[];
    seoImage?: string | { src: string } | any;
    id?: string;
    category: "development" | "marketing";
  }
): Metadata {
  const industryTitle = industry.title || "Industry";
  const industryId = industry.id || "";
  const categoryLabel =
    industry.category === "development" ? "Development Industry" : "Marketing Industry";
  const title =
    industry.seoTitle || `${industryTitle} - ${categoryLabel} | ${siteName}`;
  const description =
    industry.seoDescription ||
    industry.description ||
    `Expert ${industryTitle} ${industry.category} services by ${siteName}. Custom solutions for your industry.`;
  const keywords = industry.seoKeywords || [
    industryTitle,
    industry.category,
    industry.category === "development"
      ? "software development"
      : "digital marketing",
    siteName,
  ];

  // Normalize seoImage
  let image: string | { src: string } | undefined;
  if (industry.seoImage) {
    if (typeof industry.seoImage === 'string') {
      image = industry.seoImage;
    } else if (industry.seoImage && typeof industry.seoImage === 'object' && 'src' in industry.seoImage) {
      image = { src: industry.seoImage.src };
    }
  }

  return generateMetadata({
    title,
    description,
    keywords,
    url: `${baseUrl}/industries/${industry.category}/${industryId}`,
    image,
    type: "website",
  });
}

/**
 * Generate metadata for static pages
 */
export function generateStaticPageMetadata(options: {
  title: string;
  description: string;
  keywords?: string | string[];
  path: string;
  image?: string;
}): Metadata {
  return generateMetadata({
    title: options.title,
    description: options.description,
    keywords: options.keywords,
    url: `${baseUrl}${options.path}`,
    image: options.image,
    type: "website",
  });
}

