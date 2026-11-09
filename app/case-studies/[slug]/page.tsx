import { caseStudies } from "@/data/case-studies";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { generateCaseStudyMetadata } from "@/utilities/metadata";
import CaseStudiesDetailHeader from "@/components/CaseStudies/CaseStudiesDetailHeader";
import DescriptionSection from "@/components/CaseStudies/DescriptionSection";
import ServicesProvided from "@/components/CaseStudies/ServicesProvided";
import Objectives from "@/components/CaseStudies/Objectives";
import Result from "@/components/CaseStudies/Result";
import Conclusion from "@/components/CaseStudies/Conclusion";
import Data from "@/components/CaseStudies/Data";
import ArticleSchema from "@/components/StructuredData/ArticleSchema";
import BreadcrumbSchema from "@/components/StructuredData/BreadcrumbSchema";
import ContactUs from "@/components/ContactUs";
import MoreProjects from "@/components/CaseStudies/MoreProjects";

interface Params {
  slug: string;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((study) => study.id === slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return generateCaseStudyMetadata(study);
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((study) => study.id === slug);
  if (!study) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://www.clapit.solutions';
  const studyUrl = `${baseUrl}/case-studies/${slug}`;
  
  // Get image URL
  let imageUrl = `${baseUrl}/images/og-image.jpg`;
  if (study.image) {
    if (typeof study.image === 'string') {
      imageUrl = study.image;
    } else if (study.image && typeof study.image === 'object') {
      const imgObj = study.image as any;
      if ('src' in imgObj) {
        imageUrl = imgObj.src;
      }
    }
  }

  const index = caseStudies.findIndex((s) => s.id === slug);
  const prev = index > 0 ? caseStudies[index - 1] : undefined;
  const next = index < caseStudies.length - 1 ? caseStudies[index + 1] : undefined;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Case Studies", url: "/case-studies" },
    { name: study.title || "Case Study", url: `/case-studies/${slug}` },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ArticleSchema
        title={`${study.title || "Case Study"} - CLAPIT SOLUTIONS`}
        description={study.description || study.details || ""}
        url={studyUrl}
        image={imageUrl}
        publisher={{
          name: "CLAPIT SOLUTIONS",
          logo: `${baseUrl}/images/logo.png`,
        }}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <CaseStudiesDetailHeader study={study} />
      <DescriptionSection study={study} />
      <ServicesProvided services={study.servicesProvided || []} />
      <Objectives data={study} />
      <Data data={study.data} url={study.link} />
      <Result results={study.results || []} />
      <Conclusion study={study} />
      <MoreProjects prev={prev} next={next} />
      <ContactUs />
    </div>
  );
}

export function generateStaticParams() {
  return caseStudies
    .filter((study) => study.id !== undefined)
    .map((study) => ({
      slug: study.id!.toString(),
    }));
}
