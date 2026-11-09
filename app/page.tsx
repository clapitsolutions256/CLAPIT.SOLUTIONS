import { generateMetadata as generatePageMetadata } from "@/utilities/metadata";
import ServicesSection from "@/components/Services/ServicesSwitchSection";
import CaseStudyScroll from "@/components/CaseStudies/CaseStudyScroll";
import Stats from "@/components/Stats";
import GetStarted from "@/components/GetStarted";
import ContactUs from "@/components/ContactUs";
import LoopVideo from "@/components/LoopVideo";
import { steps } from "@/data/getStarted";
import FAQSection from "@/components/Faqs";
import { faq } from "@/data/faq";
import WhyChooseUs from "@/components/WhyChooseUs";
import Blogs from "@/components/Blog";
import { categories, services } from "@/data/services";
import WhatOurClientSay from "@/components/WhatOurClientSay";
import OurPartners from "@/components/OurPartners";

export const metadata = generatePageMetadata({
  title: "CLAPIT SOLUTIONS - AI-Powered Development and Branding Agency",
  description:
    "CLAPIT SOLUTIONS is a leading AI-powered development and branding agency. We specialize in custom software development, web applications, mobile apps, AI integration, and strategic branding. Transform your business with cutting-edge technology and innovative solutions.",
  keywords: [
    "AI development company",
    "software development agency",
    "web development services",
    "mobile app development",
    "branding agency",
    "digital marketing",
    "custom software solutions",
    "Next.js development",
    "React development",
    "AI integration",
    "full-stack development",
    "ecommerce development",
    "SaaS development",
    "UI/UX design",
    "CLAPIT SOLUTIONS"
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://www.clapit.solutions',
});

export default function Home() {
  return (
    <div>
      <LoopVideo />
      <OurPartners />
      <WhyChooseUs />
      <ServicesSection services={services} categories={categories} />
      <Stats />
      <CaseStudyScroll />
      <WhatOurClientSay />
      <GetStarted data={steps} bgColor={"#fff"} button={true} />
      <FAQSection title={faq.title} subtitle={faq.subtitle} faqs={faq.faqs} />
      <Blogs limit={3} />
      <ContactUs />
    </div>
  );
}
