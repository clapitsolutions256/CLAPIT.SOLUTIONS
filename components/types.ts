import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { ReactNode, ReactElement } from "react";

export interface SectionData {
  id: string | number;
  content: React.ReactNode;
}

export interface HorizontalSection {
  highlightColor?: string;
  id: string | number;
  title: string;
  subtitle: string;
  description: string;
  icon: string | StaticImageData;
  backgroundColor: string;
  textColor: string;
  content?: React.ReactNode;
}

export interface HorizontalScrollProps {
  sections?: HorizontalSection[];
}

export interface Technology {
  name?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}
export interface Category {
  id: string;
  label: string;
}
export interface SubService {
  icon?: ReactElement | ReactNode;
  id?: number;
  title?: string;
  description?: string;
  features?: string[];
  benefits?: string[];
  technologies?: Technology[];
}

export interface SubServicesSection {
  heading: string;
  description?: string;
  items: SubService[];
}

export interface Service {
  expertTitle?: ReactNode;
  techCapabilities?: SubServicesSection;
  technologies?: Technology[];
  technologyTitle?: string;
  technologyDescription?: string;
  Industry?: string[];
  subServices?: SubServicesSection;
  id?: string;
  title: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  seoImage?: string;
  href: string;
  description: string;
  category: string;
  icon?: ReactNode;
  image?: string;
  questionsData?: {
    id: number;
    question: string;
    description: string;
    category?: string;
  }[];
  caseStudies?: {
    id?: string;
    icon: string | IconType;
    href: string;
    title: string;
    description: string;
    features: string[];
    techStack: string[];
    timeline?: string;
    budget?: string;
    results?: {
      metric: string;
      value: string;
      change?: string;
    }[];
  }[];
  industry?: {
    heading: string;
    paragraph: string;
    industries: {
      icon: ReactElement | ReactNode;
      title: string;
      href?: string;
      description: string;
    }[];
  };
  faq?: {
    title: string;
    subtitle: string;
    faqs: {
      title: string;
      answer: string;
    }[];
  };
}

export interface ServiceProvided {
  id: number;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ResultMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  id?: string;
  title?: string;
  industries?: string[];
  services?: string[];
  description?: string;
  details?: string;
  subtitle?: string;
  image?: string;
  video?: { src: string; isMobile?: boolean };
  link?: string;
  appStoreLink?: string;
  playStoreLink?: string;
  alt?: string;
  technologies?: string[];
  servicesProvided?: ServiceProvided[];
  results?: ResultMetric[];
  data?: {
    sections: {
      title: string;
      description: string;
      subDescriptions?: string[];
      images?: Array<{ src: string; alt: string; isMobile?: boolean }>;
      sliderImages?: Array<{ src: string; alt: string; isMobile?: boolean }>;
      video?: { src: string; isMobile?: boolean };
    }[];
  };
  objectives?: string[];
  approachTitle?: string;
  approachDescription?: string;
  Conclusion?: string;
}

export interface Stat {
  icon: ReactNode;
  label: string;
  description: string;
}

export type PricingOption = {
  title: string;
  icon?: ReactNode;
  databasesStacks?: string[];
  webStacks?: string[];
  devopsStacks?: string[];
  mobileStacks?: string[];
  erpStacks?: string[];
};

export type PricingPlanFeature = {
  icon: string;
  text: string;
};

export type MarketingPlan = {
  category: string;
  title: string;
  description: string;
  price: string;
  per: string;
  features: string[];
  buttonText: string;
  highlight: boolean;
  badge1?: string;
  badge2?: string;
};

export type PricingData = {
  description: ReactNode;
  reactStacks: string[];
  vueStacks: string[];
  angularStacks: string[];
  title: ReactNode;
  title2: ReactNode;
  svg: ReactNode;
  subtitle: ReactNode;
  options: Array<{
    price: ReactNode;
    features: string[];
    icon: string;
    title: string;
    link: string;
    svg?: ReactNode;
  }>;
  marketingPlans: {
    [key in "1 month" | "3 months" | "6 months"]: MarketingPlan[];
  };
  marketingPlansIncludedServices: {
    [key in
      | "Graphic design"
      | "Graphic & Brand Design + UX/UI"
      | "No-Code Development"]: string[];
  };
  features: PricingPlanFeature[];
  data?: {
    heading: string;
    subheading: string;
    button: {
      text: string;
      link: string;
    };
    awards: Array<{
      logo: string;
      title: string;
    }>;
  };
  costCalculator: {
    stepOneTitle: string;
    stepOneOptions: {
      title: string;
      icon: ReactNode;
    }[];
    stepTwoTitle: string;
    stepTwoOptions: { title: string; icon?: ReactNode }[];
    stepThreeTitle: string;
    stepThreeOptions: { title: string; icon?: ReactNode }[];
    stepFourTitle: string;
    stepFourOptions: { title: string; icon?: ReactNode }[];
    stepFiveTitle: string;
    stepFiveSubTitle: string | undefined;
    stepFiveOptions: { title: string; icon?: ReactNode }[];
    stepSixTitle: string;
    stepSixOptions: { title: string; subtitle?: string; icon?: ReactNode }[];
  };
  teamCostCalculator: {
    stepFiveSubTitle: string | undefined;
    stepSixTitle: string;
    stepSixOptions: string;
    stepOneTitle: string;
    stepOneOptions: PricingOption[];
    stepTwoTitle: string;
    stepTwoOptions: { title: string }[];
    stepThreeTitle: string;
    stepThreeOptions: {
      subtitle?: string;
      title: string;
      icon?: ReactNode;
    }[];
  };
};

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  coverImage: string | StaticImageData | null;
  tableOfContents: {
    id: string;
    label: string;
  }[];
  sections: {
    id: string;
    heading: string;
    image?: string | StaticImageData | null;
    video?: string;
    richContent: string;
    sliderImages?: Array<{
      src: string | StaticImageData;
      alt: string;
      isMobile?: boolean;
    }>;
  }[];
}
