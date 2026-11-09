import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import FloatingContactButton from "@/components/FloatingContactButton";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loading";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { heading, body, futura } from "./font";
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from '@next/third-parties/google'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://www.clapit.solutions';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "CLAPIT SOLUTIONS - AI-Powered Development and Branding Agency",
    template: "%s | CLAPIT SOLUTIONS"
  },
  description:
    "CLAPIT SOLUTIONS combines AI-driven development and strategic branding expertise to turn your vision into lasting success. We deliver innovative software solutions and impactful brand experiences tailored for growth. Expert in web development, mobile apps, AI integration, and digital marketing.",
  keywords: [
    "AI development",
    "branding agency",
    "software development",
    "web development",
    "mobile app development",
    "AI-powered solutions",
    "digital marketing",
    "brand strategy",
    "custom software",
    "Next.js development",
    "React development",
    "full-stack development",
    "UI/UX design",
    "ecommerce development",
    "SaaS development",
    "CLAPIT SOLUTIONS"
  ],
  authors: [{ name: "CLAPIT SOLUTIONS" }],
  creator: "CLAPIT SOLUTIONS",
  publisher: "CLAPIT SOLUTIONS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "CLAPIT SOLUTIONS",
    title: "CLAPIT SOLUTIONS - AI-Powered Development and Branding Agency",
    description:
      "CLAPIT SOLUTIONS combines AI-driven development and strategic branding expertise to turn your vision into lasting success. We deliver innovative software solutions and impactful brand experiences tailored for growth.",
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "CLAPIT SOLUTIONS - AI-Powered Development and Branding Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CLAPIT SOLUTIONS - AI-Powered Development and Branding Agency",
    description:
      "CLAPIT SOLUTIONS combines AI-driven development and strategic branding expertise to turn your vision into lasting success.",
    images: [`${baseUrl}/images/og-image.jpg`],
    creator: "@clapit",
  },
  robots: {
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
  alternates: {
    canonical: baseUrl,
  },
  category: "Technology",
  other: {
    "theme-color": "#FFFFFF",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CLAPIT SOLUTIONS",
    "url": baseUrl,
    "logo": `${baseUrl}/images/logo.png`,
    "description": "CLAPIT SOLUTIONS combines AI-driven development and strategic branding expertise to turn your vision into lasting success.",
    "foundingDate": "2020",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@clapit.solutions",
      "availableLanguage": ["English"],
      "areaServed": "Worldwide"
    },
    "sameAs": [
      "https://www.linkedin.com/company/105115282",
      "https://www.facebook.com/profile.php?id=61578368938271",
      "https://www.instagram.com/clapit.solutions/"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1440 Newport Ave",
      "addressLocality": "San Jose",
      "addressRegion": "CA",
      "postalCode": "95125",
      "addressCountry": "US"
    }
  };


  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CLAPIT SOLUTIONS",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-X78G5LPNHQ"/>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="San Jose" />
        <meta name="ICBM" content="37.3382, -121.8863" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
      </head>

      <body
        className={`${heading.variable} ${body.variable} ${futura.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Loader />
        <CustomCursor />
        <SmoothScroll>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Analytics/>
          <SpeedInsights />
          <Footer />
          <FloatingContactButton />
        </SmoothScroll>
      </body>

    </html>
  );
}
