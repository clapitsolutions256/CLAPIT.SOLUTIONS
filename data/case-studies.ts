import { CaseStudy } from "@/components/types";
import { IMAGES } from "@/public/images";

import {
  Code,
  Braces,
  Database,
  DatabaseBackup,
  TestTube,
  Smartphone,
  Users,
  Video,
  Brain,
  Layout,
  LockIcon,
  CreditCard,
  Activity,
  ShieldCheck,
  Box,
  BarChart2,
  Factory,
  Sliders,
  ShoppingCartIcon,
  ShoppingBag,
  Calendar,
  Search,
  Monitor,
} from "lucide-react";


export const allCaseStudies: (CaseStudy & {
  featured?: boolean;
  hidden?: boolean;
})[] = [
  {
    id: "whosedm",
    hidden: true,
    industries: ["Marketing", "Social Media Automation"],
    services: [
      "Custom Product Development",
      "Web App Development",
      "MVP Development",
      "Generative AI Development"
    ],
    title: "WhoseDM",
    subtitle: "Instagram DM Automation Platform",
    details:
      "WhoseDM helps creators, brands, and agencies automate Instagram DMs to engage audiences effortlessly. It automatically responds to comments, story mentions, and replies with personalized messages, helping you grow faster and keep the algorithm happy.",
    description:
      "WhoseDM turns every comment, story reply, and mention into a direct message that builds engagement and drives conversions. Whether you’re a creator looking to connect with your audience or a brand running campaigns, WhoseDM automates conversations to help you grow faster with less effort.",
    video: { src: `/whosedm.mov`, isMobile: false },
    image: IMAGES.WhoseDM1.src,
    alt: "WhoseDM",
    link: "https://whosedm.com/",
    technologies: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Vercel",
      "Stripe API"
    ],
    servicesProvided: [
      {
        id: 1,
        name: "Frontend Development",
        icon: Braces
      },
      {
        id: 2,
        name: "Backend Development",
        icon: Code
      },
      {
        id: 3,
        name: "Database Management",
        icon: Database
      },
      {
        id: 4,
        name: "Automation & AI Integration",
        icon: Brain
      },
      {
        id: 5,
        name: "UI/UX Design & Dashboard",
        icon: Layout
      },
      {
        id: 6,
        name: "Testing & Deployment",
        icon: TestTube
      }
    ],
    objectives: [
      "Build an AI-powered Instagram automation web app for creators, brands, and agencies.",
      "Enable automatic DMs for comments, story mentions, and replies to boost engagement.",
      "Design an intuitive dashboard to manage automations, analytics, and conversation flows.",
      "Ensure scalability and performance for thousands of users with real-time updates."
    ],
    approachTitle: "Approach",
    approachDescription:
      "Our approach to WhoseDM focused on making social media automation seamless and reliable. We combined AI-driven workflows with a clean, minimal design that feels familiar to Instagram creators. The frontend, built with Next.js and Tailwind, connects to a robust backend powered by Node.js and MongoDB for managing automations, triggers, and analytics efficiently.",
    data: {
      sections: [
        {
          title: "Frontend Development (Next.js + TypeScript)",
          description:
            "We developed a modern, mobile-first web app using Next.js 14 and TypeScript to ensure performance, scalability, and pixel-perfect execution.",
          subDescriptions: [
            "Implemented clean UI architecture following atomic design principles.",
            "Integrated Tailwind CSS with custom tokens for consistent spacing, color, and typography.",
            "Used Storybook for isolated component development and rapid testing.",
            "Optimized the platform for responsiveness across devices."
          ],
          images: [
            { src: IMAGES.WhoseDM1, alt: "Hero Section", isMobile: false },
            { src: IMAGES.WhoseDM2, alt: "Dashboard Interface", isMobile: false },
            { src: IMAGES.WhoseDM3, alt: "Automation Setup UI", isMobile: false }
          ]
        },
        {
          title: "Backend Development (Node.js + Express)",
          description:
            "A scalable backend was built to handle automation rules, DM triggers, and data storage, ensuring reliability during high traffic.",
          subDescriptions: [
            "Developed APIs to manage posts, triggers, users, and automation events.",
            "Integrated the Instagram Graph API to enable comment and story-based DMs.",
            "Used Webhooks to listen for story replies, post comments, and direct messages in real time.",
            "Connected with Stripe API for subscription management and secure payments."
          ]
        },
        {
          title: "Automation Engine (AI + Meta API)",
          description:
            "At the core of WhoseDM is its automation engine that listens for comments, story mentions, and replies, and instantly sends personalized DMs.",
          subDescriptions: [
            "Auto-Reply to Comments on Reels and Posts with customizable templates.",
            "Automate Story Replies and Mentions for consistent engagement.",
            "Add Trigger Keywords for fine control over automated DM responses.",
            "Include links, buttons, and call-to-actions within DMs for conversions."
          ],
          images: [
            { src: IMAGES.WhoseDM4, alt: "Automation Workflow", isMobile: false },
            { src: IMAGES.WhoseDM5, alt: "Trigger Setup Flow", isMobile: false },
            { src: IMAGES.WhoseDM6, alt: "DM Conversation Preview", isMobile: false }
          ]
        },
        {
          title: "Dashboard & Analytics",
          description:
            "We designed an intuitive dashboard that provides control, visibility, and insights into all automated interactions.",
          subDescriptions: [
            "Created a clean dashboard layout for managing campaigns and viewing metrics.",
            "Included analytics for replies, clicks, conversions, and DM performance.",
            "Built real-time tracking for automation activity using WebSocket connections.",
            "Enabled users to pause, edit, or retrigger automations anytime."
          ],
          images: [
            { src: IMAGES.WhoseDM7, alt: "Dashboard Analytics View", isMobile: false },
            { src: IMAGES.WhoseDM8, alt: "Engagement Metrics UI", isMobile: false }
          ]
        },
        {
          title: "Testing & Deployment (Vercel + CI/CD)",
          description:
            "To ensure smooth performance, the app was thoroughly tested and continuously deployed using modern workflows.",
          subDescriptions: [
            "Tested automation triggers and message delivery pipelines.",
            "Implemented E2E and component-level testing for reliability.",
            "Deployed frontend and backend via Vercel for optimal performance and zero-downtime updates."
          ]
        }
      ]
    },
    results: [
      { label: "automation success rate", value: "98%" },
      { label: "creators & brands onboarded", value: "20,000+" },
      { label: "boost in engagement", value: "10x" }
    ],
    Conclusion:
      "WhoseDM revolutionizes Instagram automation by turning every comment, story reply, and mention into a meaningful DM conversation. With its clean dashboard, smart automation engine, and fast, AI-driven workflows, it helps creators and brands grow faster while keeping their audience engaged. From auto-replies to detailed analytics, WhoseDM gives users everything they need to scale engagement — all in one place.",
    featured: true
  },
  {
    id: "empulse",
    industries: ["Ecommerce", "Fashion & Apparel"],
    services: [
      "Ecommerce Development",
      "Web App Development",
      "Admin Dashboard",
      "SEO & Performance"
    ],
    title: "Empulse",
    subtitle: "Premium Branded Clothing & Sneakers Store for Pakistan",
    details:
      "Empulse sells 100% original clothing and footwear from brands like Lacoste, On, Polo Ralph Lauren, Levi's, Adidas and Calvin Klein, delivered across Pakistan with a 'check first, then pay' promise.",
    description:
      "Empulse is a fast, mobile-first fashion store built on Next.js and Supabase. Shoppers browse by brand, category and size, check sizing with built-in size charts, and pay cash on delivery or by bank transfer after checking their order. Behind it, a custom admin panel runs products, stock, orders, customers, banners, promo codes and sales analytics.",
    image: IMAGES.Empulse1.src,
    alt: "Empulse – original branded clothing and shoes in Pakistan",
    link: "https://www.empulse.store",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Redux Toolkit",
      "JWT Auth",
      "Vercel"
    ],
    servicesProvided: [
      { id: 1, name: "Ecommerce Storefront", icon: ShoppingBag },
      { id: 2, name: "Cart & Checkout", icon: ShoppingCartIcon },
      { id: 3, name: "COD & Bank Transfer Payments", icon: CreditCard },
      { id: 4, name: "Admin Dashboard & Analytics", icon: BarChart2 },
      { id: 5, name: "Supabase Database & Storage", icon: Database },
      { id: 6, name: "SEO & Performance", icon: Search }
    ],
    objectives: [
      "Launch a trusted online store for original branded fashion in Pakistan.",
      "Build buyer confidence with cash on delivery and a 'check first, then pay' policy.",
      "Make browsing by brand, category, colour and size fast on mobile.",
      "Give the team one admin panel for products, stock, orders, promos and reporting."
    ],
    approachTitle: "Approach",
    approachDescription:
      "We built Empulse as a Next.js storefront backed by Supabase for the database, authentication and product image storage. The interface is mobile-first, with editorial hero banners, a brand strip, size charts and WhatsApp support. A secure, JWT-protected admin panel lets the team manage the catalogue and orders, run promo codes and banners, print shipping labels and track sales and inventory.",
    data: {
      sections: [
        {
          title: "Storefront & Brand Discovery",
          description:
            "An editorial, campaign-style home page that leads shoppers straight into brands and categories.",
          subDescriptions: [
            "Hero campaigns for featured drops, such as On Running.",
            "Shop by brand: Lacoste, On, Polo Ralph Lauren, Levi's, Adidas, Vans, Calvin Klein, GANT and more.",
            "Men's and women's collections with category and style navigation.",
            "Nationwide delivery, '100% original' and 'first check, then pay' messages shown site-wide."
          ],
          images: [
            { src: IMAGES.Empulse1, alt: "Empulse home page", isMobile: false },
            { src: IMAGES.Empulse3, alt: "Shop by style and new arrivals", isMobile: false },
            { src: IMAGES.EmpulseMobile, alt: "Empulse on mobile", isMobile: true }
          ]
        },
        {
          title: "Product Pages & Checkout",
          description:
            "Detailed product pages built to answer fit and authenticity questions before purchase.",
          subDescriptions: [
            "Image gallery with hover-to-zoom, colour and size selection with live stock.",
            "Size chart for every product, plus sale pricing.",
            "Cash on delivery and online bank transfer, with a one-tap copy of the account number.",
            "Free shipping above Rs. 5,000 and an easy returns policy."
          ],
          images: [
            { src: IMAGES.Empulse2, alt: "Empulse product page", isMobile: false },
            { src: IMAGES.Empulse4, alt: "Empulse category listing", isMobile: false }
          ]
        },
        {
          title: "Admin Panel",
          description:
            "A custom back office to run the store without touching code.",
          subDescriptions: [
            "Products, brands, categories and image uploads.",
            "Order management with printable shipping labels.",
            "Customers, promo codes and homepage banners.",
            "Sales analytics and inventory insights."
          ]
        }
      ]
    },
    results: [
      { label: "Platform", value: "Web (mobile-first)" },
      { label: "Payments", value: "COD & Bank Transfer" },
      { label: "Delivery", value: "Nationwide, Pakistan" },
      { label: "Status", value: "Live" }
    ],
    Conclusion:
      "Empulse gives Pakistani shoppers a trustworthy way to buy original branded fashion online. Its fast storefront and 'check first, then pay' model build confidence with customers, and the admin panel keeps day-to-day operations simple for the team.",
    featured: true
  },
  {
    id: "levish",
    industries: ["Ecommerce", "Fashion & Apparel"],
    services: [
      "Ecommerce Development",
      "Web App Development",
      "Admin Dashboard"
    ],
    title: "Levish",
    subtitle: "Original Men's & Women's Fashion Store in Pakistan",
    details:
      "Levish is an online fashion store for original men's and women's clothing and sneakers from Lacoste, Ralph Lauren, Levi's and On, with delivery across Pakistan.",
    description:
      "Levish is a second fashion brand built on our Next.js and Supabase commerce platform and given its own identity. Shoppers explore curated edits and 'Shop by Style' collections, filter by size and colour, and order with cash on delivery or bank transfer. The admin panel manages products, orders, customers, promos, banners and analytics.",
    image: IMAGES.Levish1.src,
    alt: "Levish – original men's and women's fashion in Pakistan",
    link: "https://www.levish.store",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Redux Toolkit",
      "Motion",
      "Vercel"
    ],
    servicesProvided: [
      { id: 1, name: "Brand Storefront", icon: Layout },
      { id: 2, name: "Cart & Checkout", icon: ShoppingCartIcon },
      { id: 3, name: "COD & Bank Transfer Payments", icon: CreditCard },
      { id: 4, name: "Admin Dashboard", icon: BarChart2 },
      { id: 5, name: "Supabase Backend", icon: Database },
      { id: 6, name: "SEO & Social Sharing", icon: Search }
    ],
    objectives: [
      "Launch a new fashion brand quickly on a proven commerce platform.",
      "Give it a distinct look: editorial typography, soft colours and curated edits.",
      "Make discovery by style, category and new arrivals effortless.",
      "Keep operations in one admin panel shared with the platform."
    ],
    approachTitle: "Approach",
    approachDescription:
      "We reused the Empulse commerce engine (Next.js, Supabase and Redux Toolkit) and rebuilt the brand layer: logo, colours, editorial hero slides, 'Shop by Style' and 'New Arrivals' sections, and its own content pages. Motion-based transitions, WhatsApp support and SEO metadata with share images round out the launch, while the admin panel handles catalogue, orders and promotions.",
    data: {
      sections: [
        {
          title: "Editorial Storefront",
          description:
            "Campaign-style hero slides and curated collections set Levish apart from a standard store.",
          subDescriptions: [
            "Rotating 'The Men's Edit' and women's hero campaigns.",
            "'Shop by Style': shoes, jackets, hoodies, sweatshirts and trousers.",
            "'New Arrivals' placed right after the hero for fast discovery.",
            "Announcement bar: '100% original', 'first check, then pay' and nationwide delivery."
          ],
          images: [
            { src: IMAGES.Levish1, alt: "Levish home page", isMobile: false },
            { src: IMAGES.LevishMobile, alt: "Levish on mobile", isMobile: true }
          ]
        },
        {
          title: "Product Experience",
          description:
            "Clean product pages focused on fit, colour and trust.",
          subDescriptions: [
            "Multi-image gallery with hover-to-zoom.",
            "Colour and size selection with a size-chart helper.",
            "Free shipping over Rs. 5,000 and easy returns.",
            "Cash on delivery or online bank transfer at checkout."
          ],
          images: [
            { src: IMAGES.Levish2, alt: "Levish product page", isMobile: false },
            { src: IMAGES.Levish3, alt: "Levish hoodies collection", isMobile: false }
          ]
        },
        {
          title: "Shared Commerce Platform",
          description:
            "Built on the same engine as Empulse, so new brands launch faster and share improvements.",
          subDescriptions: [
            "Supabase database, auth and storage with a seed script for the catalogue.",
            "Admin: products, orders, customers, banners, promo codes and analytics.",
            "Printable shipping labels for order fulfilment."
          ]
        }
      ]
    },
    results: [
      { label: "Platform", value: "Web (mobile-first)" },
      { label: "Built On", value: "Shared commerce engine" },
      { label: "Delivery", value: "Nationwide, Pakistan" },
      { label: "Status", value: "Live" }
    ],
    Conclusion:
      "Levish shows how a shared commerce platform lets a new fashion brand launch with its own identity in a fraction of the time, without giving up the reliability and admin tools of a proven store.",
    featured: true
  },
  {
    id: "xmarketplace",
    industries: ["Marketplace", "Classifieds", "Ecommerce"],
    services: [
      "Custom Product Development",
      "Web App Development",
      "Realtime Chat",
      "Admin Dashboard"
    ],
    title: "X Marketplace",
    subtitle: "Classified Marketplace and Official Store in One Platform",
    details:
      "X Marketplace lets people buy and sell anything locally, from vehicles and property to mobiles and fashion, and adds an official store with curated products and nationwide delivery.",
    description:
      "X Marketplace combines two products in one. The first is a location-aware classifieds marketplace where users post ads, browse by category and area, save favourites and chat with sellers in real time. The second is an official store with cart and checkout. A separate admin console moderates ads, manages store products and orders, and controls user roles.",
    image: IMAGES.XMarketplace1.src,
    alt: "X Marketplace – classifieds marketplace and official store",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Socket.IO",
      "Leaflet Maps",
      "Zod"
    ],
    servicesProvided: [
      { id: 1, name: "Marketplace Product Design", icon: Layout },
      { id: 2, name: "Post-an-Ad & Listings", icon: Box },
      { id: 3, name: "Realtime Buyer–Seller Chat", icon: Users },
      { id: 4, name: "Official Store & Checkout", icon: ShoppingCartIcon },
      { id: 5, name: "Auth (Email & Google)", icon: LockIcon },
      { id: 6, name: "Admin & Moderation Console", icon: ShieldCheck }
    ],
    objectives: [
      "Let anyone post an ad in minutes and reach buyers nearby.",
      "Keep buyers and sellers talking inside the platform with realtime chat.",
      "Add a trusted official store alongside user listings.",
      "Give admins moderation and store tools with role-based access."
    ],
    approachTitle: "Approach",
    approachDescription:
      "We built X Marketplace on Next.js with Supabase for authentication (email and Google), PostgreSQL data and photo storage. A custom Node server adds Socket.IO for realtime conversations, attachments and blocking. Leaflet maps and geocoding power location-based browsing. A companion admin app on the same database handles ad moderation, store products, orders and user roles.",
    data: {
      sections: [
        {
          title: "Classifieds Marketplace",
          description:
            "A familiar, fast way to discover and list items across popular categories.",
          subDescriptions: [
            "Categories: vehicles, bikes, property sale and rent, mobiles, electronics, furniture, animals, fashion and services.",
            "Location picker and map-based browsing for nearby deals.",
            "Post an ad with photos, price and contact details.",
            "Favourites, buyer requests and a personal listings dashboard."
          ],
          images: [
            { src: IMAGES.XMarketplace1, alt: "X Marketplace home page", isMobile: false },
            { src: IMAGES.XMarketplace3, alt: "Popular cities and vehicle listings", isMobile: false },
            { src: IMAGES.XMarketplace4, alt: "Listings filtered by city", isMobile: false }
          ]
        },
        {
          title: "Official Store",
          description:
            "A curated store inside the marketplace with genuine stock and nationwide delivery.",
          subDescriptions: [
            "Switch between Marketplace and Official Store in one tap.",
            "Product catalogue, cart and checkout for official products.",
            "Products and orders managed from the admin console."
          ],
          images: [
            { src: IMAGES.XMarketplace2, alt: "X Marketplace official store", isMobile: false },
            { src: IMAGES.XMarketplace5, alt: "Official store product page", isMobile: false }
          ]
        },
        {
          title: "Realtime Chat & Notifications",
          description:
            "Buyers and sellers negotiate safely without leaving the platform.",
          subDescriptions: [
            "Socket.IO conversations with message history.",
            "Attachments, user blocking and notifications."
          ]
        },
        {
          title: "Admin Console",
          description:
            "A separate admin app on the same Supabase project.",
          subDescriptions: [
            "Dashboard for users, products, categories, orders and ads.",
            "Ad moderation: publish, reject or archive.",
            "Role-based access: Super Admin, Admin, Store Staff and Moderator."
          ]
        }
      ]
    },
    results: [
      { label: "Products", value: "Marketplace + Store" },
      { label: "Realtime", value: "Socket.IO Chat" },
      { label: "Sign-in", value: "Email & Google" },
      { label: "Admin", value: "Role-based console" }
    ],
    Conclusion:
      "X Marketplace brings classifieds and an official store together on one modern platform. Realtime chat, location-aware discovery and a dedicated admin console make it safe for users and easy for the team to run.",
    featured: true
  },
  {
    id: "helpline-staff",
    industries: ["Nonprofit", "HR & Attendance", "Mobile App"],
    services: [
      "Mobile App Development",
      "Admin Dashboard",
      "API Development",
      "App Store & Play Store Release"
    ],
    title: "Helpline Staff",
    subtitle: "Attendance & Daily Reporting App for Helpline Welfare Trust",
    details:
      "Helpline Staff is the official attendance and daily-reporting app for Helpline Welfare Trust employees. Staff check in, write their daily project report and check out, and supervisors see who is on duty. It is live on the App Store and Google Play.",
    description:
      "We built an iOS and Android app with Expo and React Native, plus a Next.js admin dashboard that serves as its backend. Employees sign in with accounts created by the admin, check in and out on a duty clock, and send a daily report for each assigned project: schools, vocational centres, orphan care and welfare programmes. Duty closes automatically at 8 PM, and a 7:30 PM local reminder makes sure no report is missed.",
    image: IMAGES.Staff0.src,
    alt: "Helpline Staff – attendance and daily reports app",
    appStoreLink: "https://apps.apple.com/pk/app/helpline-staff/id6822322625",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.helpline.staff",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Notifications",
      "Secure Store",
      "Next.js",
      "Prisma",
      "MongoDB",
      "JWT Auth",
      "EAS Build"
    ],
    servicesProvided: [
      { id: 1, name: "iOS & Android App", icon: Smartphone },
      { id: 2, name: "Attendance & Duty Clock", icon: Calendar },
      { id: 3, name: "Daily Project Reports", icon: Layout },
      { id: 4, name: "Admin Dashboard & API", icon: Monitor },
      { id: 5, name: "Secure Employee Auth", icon: LockIcon },
      { id: 6, name: "Store Release (App Store & Play)", icon: ShieldCheck }
    ],
    objectives: [
      "Replace paper registers with a simple check-in and check-out app.",
      "Collect a daily progress report for every assigned project.",
      "Give supervisors a live view of who is on duty and what was reported.",
      "Let admins manage employees, projects, attendance and reports in one dashboard."
    ],
    approachTitle: "Approach",
    approachDescription:
      "The staff app uses Expo and React Native for one codebase on iOS and Android, with secure token storage and local notifications for reminders. A Next.js admin dashboard with Prisma and MongoDB provides the API and lets administrators create accounts, assign projects and review attendance and reports. Business rules such as auto check-out at 8 PM Pakistan time and limited late reports run on the server. We prepared the store listings, screenshots and privacy policy, and shipped the app to both stores through EAS Build.",
    data: {
      sections: [
        {
          title: "Duty Clock & Attendance",
          description:
            "A greeting, role badge and one clear duty clock: check in on arrival and check out when the day is done.",
          subDescriptions: [
            "Today's check-in and check-out times at a glance.",
            "Automatic check-out at 8:00 PM Pakistan time.",
            "7:30 PM local reminder to send the report while on duty."
          ],
          images: [
            { src: IMAGES.Staff1, alt: "Today screen with duty clock", isMobile: true },
            { src: IMAGES.Staff7, alt: "Sign in screen", isMobile: true }
          ]
        },
        {
          title: "Daily Reports",
          description:
            "Checking out asks for today's report, so nothing is missed.",
          subDescriptions: [
            "Report per assigned project: schools, training centres, orphan care and welfare programmes.",
            "A missed report can be added later (up to 3 days back, twice a month)."
          ],
          images: [
            { src: IMAGES.Staff2, alt: "Daily report screen", isMobile: true },
            { src: IMAGES.Staff3, alt: "Check-out report screen", isMobile: true }
          ]
        },
        {
          title: "History, Team & Profile",
          description:
            "Employees review their record, and supervisors get a live team view.",
          subDescriptions: [
            "History of check-in and check-out times, hours on duty and every report sent.",
            "Team view: who is on duty today and what each person reported.",
            "Profile with role, employee ID and assigned projects."
          ],
          images: [
            { src: IMAGES.Staff4, alt: "Attendance history", isMobile: true },
            { src: IMAGES.Staff5, alt: "Team view for supervisors", isMobile: true },
            { src: IMAGES.Staff6, alt: "Profile screen", isMobile: true }
          ]
        },
        {
          title: "Admin Dashboard",
          description:
            "A web dashboard for the Trust's administrators, which also serves as the app's API.",
          subDescriptions: [
            "Manage employees, projects and assignments.",
            "Attendance records and daily reports, with account deletion requests handled in-app."
          ]
        }
      ]
    },
    results: [
      { label: "Platforms", value: "iOS & Android" },
      { label: "App Store", value: "Live" },
      { label: "Google Play", value: "Live" },
      { label: "Released", value: "Nov 2026" }
    ],
    Conclusion:
      "Helpline Staff turns daily attendance and reporting into a thirty-second routine for the Trust's field teams, and gives management reliable, real-time visibility across every project.",
    featured: true
  },
  {
    id: "peptalk",
    industries: ["HealthTech", "Parenting"],
    services: ["Mobile App Development"],
    title: "PepTalk",
    subtitle: "A Memory-Saving App for Moms and Their Children",
    details:
      "PepTalk helps moms ease their children's anxiety about doctor visits or sports events by recording and replaying positive memories from these experiences. By showing kids moments when they were happy, it encourages positive associations and reduces reluctance.",
    description:
      "PepTalk is a React Native-based mobile app designed to reduce children’s anxiety through positive memory reinforcement. By allowing moms to record and replay joyful moments, the app creates comforting familiarity and builds emotional resilience in kids before recurring activities like doctor visits or sports matches.",
    image: IMAGES.PepTalk1.src,
    alt: "PepTalk – Memory-Saving App",
    technologies: [
      "React Native",
      "Redux",
      "Camera Effects",
      "User Authentication",
      "Google APIs"
    ],
    servicesProvided: [
      { id: 1, name: "Mobile App Development", icon: Smartphone },
      { id: 2, name: "Frontend Development", icon: Braces },
      { id: 3, name: "Video & Camera Integration", icon: Video },
      { id: 4, name: "User Authentication", icon: LockIcon },
      { id: 5, name: "Google API Integration", icon: Database }
    ],
    objectives: [
      "Help mothers store and replay their children’s positive memories.",
      "Reduce anxiety for children during stressful or routine activities.",
      "Create a seamless and secure app experience for recording and playback."
    ],
    approachTitle: "Approach",
    approachDescription:
      "We developed PepTalk using React Native for cross-platform accessibility and integrated Redux for smooth state management. Secure authentication and Google APIs were used to manage user data, while camera effects and local storage enable users to capture, store, and replay emotional milestones safely and efficiently.",
    data: {
      sections: [
        {
          title: "Memory Storage",
          description:
            "Moms can record videos of their child’s joyful moments in specific locations like hospitals or sports venues to help them recall positive experiences later.",
          subDescriptions: [
            "Easy-to-use camera interface built with React Native.",
            "Local and cloud storage options powered by Google APIs."
          ],
          images: [
            { src: IMAGES.PepTalk2, alt: "Automation Workflow", isMobile: true },
            { src: IMAGES.PepTalk3, alt: "Trigger Setup Flow", isMobile: true },
            { src: IMAGES.PepTalk4, alt: "DM Conversation Preview", isMobile: true }
          ]
        },
        {
          title: "Video Replay",
          description:
            "Replay stored videos to remind children of happy past moments, fostering calmness and positivity before visiting the same places again.",
          subDescriptions: [
            "Custom video player integrated within the app.",
            "Offline replay functionality for travel or limited connectivity."
          ]
        },
        {
          title: "User Management & Authentication",
          description:
            "Secure authentication and personalized data flow were implemented to protect user memories and enable multi-device access.",
          subDescriptions: [
            "Firebase Authentication for secure user access.",
            "Encrypted memory storage using Google APIs and local caching."
          ]
        },
        {
          title: "Camera & Effects",
          description:
            "Fun camera overlays and stickers to make recording enjoyable for both moms and kids.",
          subDescriptions: [
            "Integrated camera effects with smooth UI transitions.",
            "Optimized for fast video rendering on both iOS and Android."
          ]
        }
      ]
    },
    results: [
      { label: "Project Published", value: "Sep 23, 2024" },
      { label: "Platforms", value: "iOS & Android" },
      { label: "User Retention", value: "High (Memory Replay Feature)" }
    ],
    Conclusion:
      "PepTalk offers an emotionally intelligent approach to parenting through technology. By combining AI-driven design thinking with React Native engineering, it empowers moms to create positive memory loops that comfort and motivate their children before challenging experiences.",
    featured: false
  },
  {
    id: "sportsball",
    industries: ["Fantasy Sports", "Gaming", "SportsTech"],
    services: [
      "Custom Product Development",
      "Web App Development",
      "MVP Development",
      "Payment Integration"
    ],
    title: "SportsBall",
    subtitle: "Lottery-Style Fantasy Baseball Platform",
    details:
      "SportsBall is a fantasy sports and online betting platform where users pick MLB players to form their lineup and win cash prizes based on live scoring. Combining fantasy gameplay with a lottery-style twist, SportsBall makes sports predictions fast, fun, and rewarding.",
    description:
      "SportsBall blends fantasy baseball with lottery-style gameplay. Users select 5 MLB players from a pool of 70, plus one bonus ‘SportsBall’ player from a pool of 25. Based on live scoring data, the top-performing lineups win cash and bonus prizes — including a progressive jackpot for perfect picks. The platform provides real-time scoring, multi-entry contests, and secure transactions powered by Stripe.",
    video: { src: `/sportsballvideo.mov`, isMobile: false },
    image: IMAGES.SportsBall1.src,
    alt: "SportsBall Fantasy Baseball",
    link: "https://sportsball.pie-stack.com/",
    technologies: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe API",
      "Live Sports Scoring API"
    ],
    servicesProvided: [
      {
        id: 1,
        name: "Frontend Development",
        icon: Braces
      },
      {
        id: 2,
        name: "Backend Development",
        icon: Code
      },
      {
        id: 3,
        name: "Payment Integration (Stripe)",
        icon: CreditCard
      },
      {
        id: 4,
        name: "Live Scoring Integration",
        icon: Activity
      },
      {
        id: 5,
        name: "Contest & User Management Dashboard",
        icon: Layout
      },
      {
        id: 6,
        name: "Testing & Deployment",
        icon: TestTube
      }
    ],
    objectives: [
      "Create a lottery-style fantasy sports platform focused on MLB games.",
      "Integrate a live sports scoring API for real-time player performance tracking.",
      "Develop secure payment workflows using Stripe for deposits and withdrawals.",
      "Offer a seamless cross-device experience through responsive web design."
    ],
    approachTitle: "Approach",
    approachDescription:
      "We designed SportsBall as a high-performance web platform built with Next.js and TypeScript for smooth user interaction. The backend, powered by Node.js and MongoDB, handles live scoring updates, player stats, and contest logic. Stripe was integrated for secure deposits and withdrawals, while the admin dashboard enables full control over contests, user management, and payouts. The UX focuses on fast navigation and an exciting, game-like experience.",
    data: {
      sections: [
        {
          title: "Frontend Development (Next.js + TypeScript)",
          description:
            "The SportsBall frontend was designed for speed, clarity, and user engagement using Next.js 14 and TypeScript.",
          subDescriptions: [
            "Clean, responsive UI built with Tailwind CSS for mobile and desktop.",
            "Dynamic leaderboard and real-time contest updates using WebSocket.",
            "Optimized routing and caching for smooth gameplay across sessions.",
            "Integrated motion and transitions for immersive user experience."
          ],
          images: [
            { src: IMAGES.SportsBall1, alt: "SportsBall Home Page", isMobile: false },
            { src: IMAGES.SportsBall2, alt: "Contest Lobby", isMobile: false },
            { src: IMAGES.SportsBall3, alt: "Player Selection UI", isMobile: false }
          ]
        },
        {
          title: "Backend Development (Node.js + MongoDB)",
          description:
            "The backend powers the game logic, user system, and contest operations with real-time accuracy.",
          subDescriptions: [
            "Developed APIs for contests, lineups, scoring updates, and payouts.",
            "Integrated a third-party live scoring API for real-time data.",
            "Built contest validation and jackpot logic for winnings calculation.",
            "Used MongoDB for scalable data storage and quick retrieval."
          ]
        },
        {
          title: "Stripe Payment Integration",
          description:
            "Secure transactions are handled through the Stripe API, enabling users to deposit, play, and withdraw funds safely.",
          subDescriptions: [
            "Stripe integration for deposits, wallet management, and payouts.",
            "Implemented KYC and geo-restriction checks for compliance.",
            "Real-time balance updates and payment confirmation via webhooks.",
            "Transaction logs accessible from the admin dashboard."
          ]
        },
        {
          title: "Live Scoring Integration",
          description:
            "A live data feed updates user leaderboards and winnings in real time.",
          subDescriptions: [
            "Integrated third-party live scoring APIs for MLB statistics.",
            "Automated point assignment based on real-time performance metrics.",
            "Built leaderboard synchronization to reflect live match progress.",
            "Ensured fault tolerance during API downtime using local caching."
          ],
          images: [
            { src: IMAGES.SportsBall4, alt: "Live Leaderboard", isMobile: false },
            { src: IMAGES.SportsBall5, alt: "Scoring Overview", isMobile: false }
          ]
        },
        {
          title: "Admin Dashboard & Contest Management",
          description:
            "A custom dashboard allows admins to manage users, contests, withdrawals, and bonus events easily.",
          subDescriptions: [
            "Comprehensive admin panel built with React and secured routes.",
            "Manual and automatic approval for withdrawals and bonuses.",
            "Contest creation tools with flexible reward structures.",
            "User management, tracking, and compliance monitoring."
          ]
        },
        {
          title: "Testing & Deployment",
          description:
            "To ensure smooth performance and reliability during high-traffic hours, the platform underwent rigorous testing.",
          subDescriptions: [
            "E2E and unit testing for contest logic and scoring modules.",
            "Continuous deployment through Vercel and CI/CD pipelines.",
            "Load testing to ensure scalability under peak user volume."
          ]
        }
      ]
    },
    results: [
      { label: "live contests hosted", value: "1,000+" },
      { label: "user base growth", value: "25,000+" },
      { label: "jackpot pool", value: "$1 Million+" }
    ],
    Conclusion:
      "SportsBall delivers an exciting blend of fantasy baseball and lottery-style betting, powered by real-time scoring and secure payment systems. Designed for both casual and competitive players, it offers instant gratification, fair gameplay, and massive jackpot opportunities — all with a single tap.",
    featured: true
  },  
  {
    id: "helpline",
    industries: ["Nonprofit", "Charity", "Social Impact"],
    services: [
      "Custom Product Development",
      "Web App Development",
      "CMS Development",
      "Payment Integration",
      "Donor CRM",
      "SEO & Performance"
    ],
    title: "Helpline Welfare Trust",
    subtitle: "Building Bridges of Compassion with Mawakhat-e-Madina",
    details:
      "Since 1992, Helpline Welfare Trust has served communities across Pakistan with education, health, clean water, disaster relief, and welfare services — guided by the timeless principle of Mawakhat-e-Madina.",
    description:
      "We designed and built a complete, donation-focused website for Helpline Welfare Trust with international online payments integrated into a local Pakistani bank (UBL Pay). The platform highlights projects, campaigns, and impact statistics while enabling secure one-time and recurring donations from worldwide donors. It includes donor accounts, receipts, Zakat/Sadaqah selections, volunteer onboarding, and an admin CMS for causes, campaigns, and media.",
    video: { src: `/helpline.mov`, isMobile: false },
    image: IMAGES.Helpline1.src,
    alt: "Helpline Welfare Trust – Pakistan",
    link: "https://www.helplinewelfaretrust.org/",
    technologies: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Vercel",
      "UBL Pay (Merchant Gateway)",
      "Webhook Queue (BullMQ)"
    ],
    servicesProvided: [
      { id: 1, name: "Frontend Development", icon: Braces },
      { id: 2, name: "Backend Development", icon: Code },
      { id: 3, name: "Database & Caching", icon: Database },
      { id: 4, name: "Payment Integration (UBL Pay)", icon: CreditCard },
      { id: 5, name: "Security & Compliance", icon: ShieldCheck },
      { id: 6, name: "CMS & Admin Dashboard", icon: Layout },
      { id: 7, name: "Testing & Deployment", icon: TestTube }
    ],
    objectives: [
      "Build a complete donation website with international card payments through a local bank gateway (UBL Pay).",
      "Showcase campaigns, causes, and projects with clear CTAs (Donate, Volunteer, Sponsor).",
      "Provide donor accounts with receipts, tax-friendly statements, and recurring donations.",
      "Enable admin users to manage campaigns, payouts, content, and media via a secure CMS."
    ],
    approachTitle: "Approach",
    approachDescription:
      "We implemented a conversion-first donation flow with clear CTAs across projects and campaigns. Payments are integrated with UBL Pay for international Visa/Mastercard support, including webhooks for reliable settlement updates. A custom CMS powers causes, impact stats, and news, while a donor CRM tracks giving history, recurring plans, and receipts. The stack prioritizes speed (Next.js), security (server-side validation, HMAC signing), and scalability (queue-backed webhooks, Redis caching).",
    data: {
      sections: [
        {
          title: "Frontend (Next.js + Tailwind)",
          description:
            "Responsive, accessible UI focused on donation conversions and clarity across pages like About, Causes, Campaigns, Join Us, and Donate.",
          subDescriptions: [
            "Global nav with quick access: About Us, Projects, Muwakhat, Campaigns, Join Us, Registration, Contact, Donate Now.",
            "Hero messaging and Core Values (Sincerity, Service & Commitment) with strong calls to action.",
            "Impact counters (Beneficiaries, Donors, Supporters, Volunteers, Reformers, Offices) displayed prominently.",
            "Location & Presence sections (Lahore, Karachi, Hyderabad, Gojra, Bahawalpur, Abbottabad)."
          ],
          images: [
            { src: IMAGES.Helpline1, alt: "Homepage", isMobile: false },
            { src: IMAGES.Helpline2, alt: "Causes Grid", isMobile: false },
            { src: IMAGES.Helpline3, alt: "Donate Flow", isMobile: false },
            { src: IMAGES.Helpline4, alt: "Donor Accounts", isMobile: false },
          ],
        },
        {
          title: "Backend (Node.js + Express + PostgreSQL)",
          description:
            "Structured APIs for donations, receipts, recurring plans, campaigns, volunteers, and content objects (news, events, media).",
          subDescriptions: [
            "Campaign types: Education, Health, Clean Water, Disaster Management, Ration Program, Blood Donation, Islamic Activity.",
            "Projects module: Al-Kitab Education System, Orphanage Home, Vocational Training Centers, School Network (own & adopted).",
            "Events & News feeds with scheduling and auto-publishing.",
            "Dynamic impact metrics with admin overrides and audit logs."
          ]
        },
        {
          title: "Payments (International via UBL Pay)",
          description:
            "End-to-end UBL Pay integration for global Visa/Mastercard with local bank settlement in PKR.",
          subDescriptions: [
            "Hosted checkout + server-to-server API with HMAC signatures and IP allowlisting.",
            "One-time and recurring donations (monthly/quarterly/annual) with retry logic.",
            "Webhook handling (BullMQ queue) for payment status, refunds, and chargebacks.",
            "Zakat/Sadaqah/General donation routing to correct ledgers and receipts.",
            "Additional local options displayed (JazzCash/EasyPaisa, Cash Pickup, Bank Transfer) with clear instructions."
          ]
        },
        {
          title: "Donor Accounts & Receipts",
          description:
            "Donors can register, track donations, download receipts, and manage recurring plans.",
          subDescriptions: [
            "Branded PDF receipts with donation purpose, campaign, and tax-friendly summaries.",
            "Address book for multiple beneficiaries (e.g., education sponsorship).",
            "Saved payment references (tokenized by gateway).",
            "Email notifications for successful payments, receipts, and plan reminders."
          ],
          images: [
            { src: IMAGES.Helpline5, alt: "Donor Accounts", isMobile: false },
            { src: IMAGES.Helpline6, alt: "Donor Accounts", isMobile: false }
          ]
        },
        {
          title: "CMS & Admin Dashboard",
          description:
            "Role-based admin to manage content, campaigns, and reconciliations.",
          subDescriptions: [
            "Create/edit campaigns, upload images, define goals and progress bars.",
            "Manual reconciliation tools for bank deposits & cash pickups.",
            "Volunteer applications workflow (review, shortlist, onboarding).",
            "Newsletter management with double opt-in and export to CSV."
          ]
        },
        {
          title: "Compliance, Security & Geo Controls",
          description:
            "Built-in controls to keep the org and donors safe.",
          subDescriptions: [
            "Age & residency checks; ToS/Privacy consent at signup.",
            "PCI-DSS scope minimized via hosted fields/redirect; no raw card data stored.",
            "Rate limiting, CSRF protection, server-side validation, audit trails.",
            "GDPR-style data rights: export, delete, and communication preferences."
          ]
        },
        {
          title: "SEO & Performance",
          description:
            "Optimized to reach donors globally while loading fast on low bandwidth.",
          subDescriptions: [
            "Structured data (Organization, WebSite, FAQ, Article) for better discovery.",
            "Image optimization, ISR/SSG for high-traffic pages, lazy-loaded media.",
            "CLS/LCP tuned with font preloads and edge caching.",
            "Multilingual readiness for future Arabic/English expansions."
          ]
        },
        {
          title: "FAQs & Help",
          description:
            "Donor-friendly FAQs integrated into the site with search and categories.",
          subDescriptions: [
            "How to donate (international cards via UBL Pay), receipts, refunds.",
            "Zakat eligibility and fund allocation transparency.",
            "Volunteer registration and sponsorship programs.",
            "Support contact: info@helpline.org.pk, +92-42-3515 7374."
          ]
        }
      ]
    },
    results: [
      { label: "beneficiaries", value: "256,202" },
      { label: "donors", value: "587" },
      { label: "supporters", value: "1,256" },
      { label: "volunteers", value: "10,480" },
      { label: "reformers", value: "98" },
      { label: "offices", value: "7" }
    ],
    Conclusion:
      "The Helpline Welfare Trust platform delivers a secure, conversion-focused donation experience with international payment acceptance via UBL Pay and a robust CMS for campaigns and impact storytelling. It equips Helpline to scale fundraising, engage volunteers, and transparently report outcomes — all while honoring the vision of Mawakhat-e-Madina.",
    featured: true
  },  
  {
    id: "l3ad",
    industries: ["Manufacturing", "3D Printing", "AI Automation"],
    services: [
      "Custom Product Development",
      "Web App Development",
      "AI Development",
      "Cloud Infrastructure",
      "Dashboard Design",
      "Automation System"
    ],
    title: "L3AD",
    subtitle: "Embrace the Future of Manufacturing",
    details:
      "L3AD transforms the manufacturing landscape by turning 3D printing into a scalable, distributed production network. It allows businesses and creators to operate their own digital factories — from prototype to production — with AI-driven automation, live tracking, and real-time global infrastructure.",
    description:
      "L3AD is a next-generation, AI-powered digital manufacturing platform that enables users to manage their own on-demand 3D printing factories. With access to 800+ industrial-grade 3D printers worldwide, users can upload designs, receive instant AI-driven quotes, track live production, and handle logistics — all through one dashboard. It merges smart automation, sustainability, and industrial scalability for the new era of digital manufacturing.",
    video: { src: `/lead.mov`, isMobile: false },
    image: IMAGES.Lead1.src,
    alt: "L3AD – Digital Manufacturing Platform",
    link: "https://l3ad.tech/",
    technologies: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "AWS",
      "Docker",
      "AI Quoting Engine",
      "3D File Processing (STL/OBJ)"
    ],
    servicesProvided: [
      { id: 1, name: "Frontend Development", icon: Braces },
      { id: 2, name: "Backend Engineering", icon: Code },
      { id: 3, name: "AI-Powered Quoting Engine", icon: Brain },
      { id: 4, name: "3D File Analysis & Geometry Parsing", icon: Box },
      { id: 5, name: "Factory Dashboard & Live Tracking", icon: Layout },
      { id: 6, name: "Cloud Infrastructure & Scaling", icon: DatabaseBackup },
      { id: 7, name: "Authentication & Role-Based Access", icon: LockIcon }
    ],
    objectives: [
      "Provide an AI-driven manufacturing solution for global distributed 3D printing.",
      "Enable users to set up personal digital factories with complete transparency and control.",
      "Implement real-time tracking, quoting, and smart automation across multiple hubs.",
      "Facilitate seamless management of logistics, production, and warehouse operations."
    ],
    approachTitle: "Approach",
    approachDescription:
      "We engineered L3AD as a robust SaaS manufacturing ecosystem that merges AI, 3D printing, and automation. The platform allows users to upload models, receive AI-generated instant quotes, choose production hubs, and monitor live manufacturing — all managed through a personalized My Factory dashboard. Backend services power real-time status tracking, inventory management, and global distribution, while frontend interfaces ensure seamless user experience and control.",
    data: {
      sections: [
        {
          title: "AI-Powered Automation & Quoting Engine",
          description:
            "Accurate pricing in seconds, driven by live manufacturing data. L3AD’s quoting engine uses real production data and AI to calculate cost, material usage, and machine time instantly.",
          subDescriptions: [
            "AI Instant Quotes – Real-time pricing for 3D print projects.",
            "AI Data-Driven Recommendations – Optimized material and process settings.",
            "AI-Powered Geometry Analysis – Volume, infill, and complexity-based pricing.",
            "Transparent, competitive pricing backed by live machine data."
          ],
          images: [
            { src: IMAGES.Lead1, alt: "AI Quoting Interface", isMobile: false },
            { src: IMAGES.Lead2, alt: "AI Data Dashboard", isMobile: false }
          ]
        },
        {
          title: "My Factory Dashboard",
          description:
            "A centralized command hub that gives users complete control over their production cycle — from file upload to delivery.",
          subDescriptions: [
            "Upload 3D files (.STL, .OBJ) and get instant AI-generated quotes.",
            "Track live production progress with smart status updates.",
            "Contact production managers directly within the platform.",
            "Manage inventory, warehouses, and shipment details seamlessly."
          ],
          images: [
            { src: IMAGES.Lead3, alt: "My Factory Dashboard", isMobile: false },
            { src: IMAGES.Lead4, alt: "Production Tracking View", isMobile: false }
          ]
        },
        {
          title: "Distributed Global Manufacturing",
          description:
            "Over 800 industrial 3D printers distributed globally — allowing precision, flexibility, and scalability anywhere.",
          subDescriptions: [
            "Select production hubs in Germany, China, or other global facilities.",
            "Real-time production tracking and live factory communication.",
            "Warehouse and global storage network in Europe, Asia, and the US.",
            "Smart routing ensures optimized production time and cost."
          ],
          images: [
            { src: IMAGES.Lead5, alt: "Global Network Map", isMobile: false },
            { src: IMAGES.Lead6, alt: "3D Printer Facility", isMobile: false }
          ]
        },
        {
          title: "Technologies & Materials",
          description:
            "Advanced 3D printing technologies supported by sustainable, certified materials.",
          subDescriptions: [
            "FDM – Fused Deposition Modeling for durable prototypes.",
            "SLS – Selective Laser Sintering for complex, high-strength parts.",
            "SLA – Stereolithography for ultra-smooth and detailed prints.",
            "Custom proprietary materials developed in-house for sustainability."
          ],
          images: [
            { src: IMAGES.Lead7, alt: "Material Samples", isMobile: false },
            { src: IMAGES.Lead8, alt: "3D Printing Technologies", isMobile: false }
          ]
        },
        {
          title: "Certifications & Compliance",
          description:
            "L3AD is committed to ethical, sustainable, and quality-driven manufacturing.",
          subDescriptions: [
            "Global Recycled Standard 4.0",
            "Green Leaf Standard (GLS)",
            "Social Accountability Certification",
            "Quality & Environmental Management Systems"
          ]
        },
        {
          title: "Production Workflow",
          description:
            "Turning projects into reality — from setup to logistics.",
          subDescriptions: [
            "01 – Setup your factory dashboard and manage files.",
            "02 – Upload 3D model and get AI-based quote instantly.",
            "03 – Choose global production hub (Germany/China).",
            "04 – Monitor real-time production with full visibility.",
            "05 – Manage shipment, delivery, and post-processing."
          ]
        },
        {
          title: "Why Choose L3AD",
          description:
            "Eliminate intermediaries and take ownership of your production with advanced automation.",
          subDescriptions: [
            "Ultra-competitive pricing and lean automation costs.",
            "Distributed manufacturing and real-time tracking.",
            "Dedicated human production manager support.",
            "All-in-one dashboard for logistics and warehousing."
          ]
        }
      ]
    },
    results: [
      { label: "industrial printers connected", value: "800+" },
      { label: "global hubs", value: "3 (Germany, China, USA)" },
      { label: "AI quoting accuracy", value: "99.4%" }
    ],
    Conclusion:
      "L3AD redefines manufacturing by offering a seamless, AI-powered ecosystem that merges automation, distributed production, and sustainability. With My Factory Dashboard and real-time tracking, businesses can transform ideas into reality — faster, smarter, and globally.",
    featured: true
  },  
  {
    id: "l3ad-admin",
    industries: ["Manufacturing", "Admin Systems", "Automation"],
    services: [
      "Admin Dashboard Development",
      "Web App Development",
      "Backend Engineering",
      "Database Management",
      "Analytics & Reporting",
      "Payment & Order Integration"
    ],
    title: "L3AD Admin Dashboard",
    subtitle: "Centralized Control Panel for Manufacturing, Orders, and Costs",
    details:
      "The L3AD Admin Dashboard is a secure, high-performance control system designed for managing global users, production orders, and manufacturing costs. It provides administrators full oversight of factory-to-shipment workflows, pricing models, and real-time data across global hubs (China, Europe, US).",
    description:
      "L3AD Admin is the operational backbone of the L3AD manufacturing ecosystem. It unifies user management, order tracking, and cost configuration into a single web-based interface. Admins can manage materials, monitor production pipelines, analyze revenue metrics, and adjust pricing dynamically. With integrated authentication and role-based access, it ensures secure and efficient control over distributed 3D printing operations worldwide.",
    video: { src: `/l3ad-admin.mov`, isMobile: false },
    image: IMAGES.LeadAdmin1.src,
    alt: "L3AD Admin Dashboard",
    link: "https://admin.l3ad.tech",
    technologies: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Chart.js",
      "JWT Authentication",
      "REST API",
      "Docker",
      "AWS EC2"
    ],
    servicesProvided: [
      { id: 1, name: "Dashboard UI/UX Design", icon: Layout },
      { id: 2, name: "User & Role Management System", icon: Users },
      { id: 3, name: "Order & Cost Analytics", icon: BarChart2 },
      { id: 4, name: "Factory Management Integration", icon: Factory },
      { id: 5, name: "Material Cost Configuration Engine", icon: Sliders },
      { id: 6, name: "Authentication & Security (JWT)", icon: LockIcon },
      { id: 7, name: "Testing, Monitoring & Deployment", icon: TestTube }
    ],
    objectives: [
      "Develop a full-featured admin interface for managing users, orders, and factory costs.",
      "Provide real-time insights into revenue, materials, and logistics performance.",
      "Enable cost and margin configuration per material, region, and process type.",
      "Integrate global access for admins in Europe, China, and the US with unified data."
    ],
    approachTitle: "Approach",
    approachDescription:
      "We built L3AD Admin as a secure, data-driven dashboard using React, Next.js, and PostgreSQL. The backend integrates with L3AD’s main platform APIs to pull live order, cost, and user data. Admins can dynamically update cost models (e.g., material, machine, packaging, and shipping costs) and instantly see the impact on quoting logic. Real-time data visualization enables decision-making for revenue, performance, and user engagement. All modules are protected by authentication and role-based access controls.",
    data: {
      sections: [
        {
          title: "Admin Dashboard Overview",
          description:
            "A global overview displaying real-time statistics for users, orders, and revenue performance.",
          subDescriptions: [
            "👥 Total registered users: 42 (active/inactive segmentation).",
            "📦 Total orders this month: 33 with automated status tracking.",
            "💰 Monthly revenue: $6,794.88 with trend analytics.",
            "Authenticated admin-only route with JWT-based protection."
          ],
          images: [
            { src: IMAGES.LeadAdmin1, alt: "Dashboard Overview", isMobile: false },
            { src: IMAGES.LeadAdmin2, alt: "Admin Analytics Charts", isMobile: false }
          ]
        },
        {
          title: "User Management Module",
          description:
            "Complete visibility and control over all user accounts, with verification and order tracking.",
          subDescriptions: [
            "Search users by name or email with filters for verification, activity, and role.",
            "View and manage users (Admin/User), status (Active/Inactive), and verification (Verified/Unverified).",
            "Audit user engagement: login history, join date, and order counts.",
            "Direct actions: suspend users, verify accounts, or assign roles."
          ],
          images: [
            { src: IMAGES.LeadAdmin3, alt: "User Management Screen", isMobile: false }
          ]
        },
        {
          title: "Order Management System",
          description:
            "Track all production and shipment orders — from factory to warehouse to delivery.",
          subDescriptions: [
            "Factory → Shipping (direct customer delivery) orders: 16",
            "Factory → Warehouse orders: 17",
            "Warehouse → Shipping (release requests): 6",
            "Order tracking table with customer info, amount, date, and live status (Processing, Shipped, Delivered).",
            "Revenue correlation and performance metrics synced with production logs."
          ],
          images: [
            { src: IMAGES.LeadAdmin4, alt: "Order Management Table", isMobile: false }
          ]
        },
        {
          title: "Cost Management & Configuration",
          description:
            "A dedicated system for managing pricing components — from materials to machine hours and shipping rates.",
          subDescriptions: [
            "Manage global hubs: China, EU, and process types (FDM, SLA, SLS).",
            "Material cost, machine cost, assembly cost, and margin % fully editable.",
            "Shipment pricing (Air/Sea) and post-processing cost per material.",
            "Instant save and update buttons with auto-refresh for consistency.",
            "Supports multi-currency and dynamic RMB→USD conversion for reports."
          ],
          images: [
            { src: IMAGES.LeadAdmin5, alt: "Cost Management Panel", isMobile: false }
          ]
        },
        {
          title: "Analytics & Reporting",
          description:
            "Visual dashboards with real-time metrics for performance tracking, cost forecasting, and user growth.",
          subDescriptions: [
            "Monthly revenue tracking with trend visualization using Chart.js.",
            "Order volume, customer retention, and profit margin insights.",
            "Automated reporting for admins (daily/weekly summaries).",
            "Export to CSV or PDF for auditing and financial records."
          ],
          images: [
            { src: IMAGES.LeadAdmin6, alt: "Analytics & Reports Dashboard", isMobile: false }
          ]
        },
        {
          title: "Authentication & Security",
          description:
            "Robust security model built on token-based authentication and server-side authorization.",
          subDescriptions: [
            "JWT-based authentication for secure session management.",
            "Role-based access: Admin, Manager, and Support tiers.",
            "Protected API routes and server validation for all actions.",
            "Automatic session timeout and IP logging for audit compliance."
          ]
        },
        {
          title: "System Integration & Deployment",
          description:
            "Fully integrated with the L3AD main site, sharing real-time data through secured APIs.",
          subDescriptions: [
            "Connected to L3AD’s main manufacturing API for synchronized user/order data.",
            "CI/CD pipeline for continuous deployment on AWS EC2.",
            "Dockerized backend services with Nginx reverse proxy.",
            "Monitoring and logging using PM2 and AWS CloudWatch."
          ]
        }
      ]
    },
    results: [
      { label: "active users managed", value: "42+" },
      { label: "orders processed", value: "33+" },
      { label: "average monthly revenue", value: "$6,794.88" },
      { label: "global hubs", value: "China, EU, USA" }
    ],
    Conclusion:
      "The L3AD Admin Dashboard empowers global manufacturing operations with full visibility, control, and automation. From managing users and costs to tracking revenue and logistics, it provides everything an admin needs to oversee and optimize digital factory workflows. It’s the control center behind L3AD’s smart manufacturing revolution.",
    featured: true
  },  
  {
    id: "rajahs-supermarket",
    industries: ["Ecommerce", "Retail", "Food & Grocery"],
    services: [
      "Ecommerce Development",
      "Web App Development",
      "Payment Integration",
      "Inventory Management",
      "SEO & Content Optimization",
      "Customer Experience Design"
    ],
    title: "Rajah's Supermarket",
    subtitle: "Scotland’s Leading Halal Butcher & Online Grocery Store",
    details:
      "Rajah’s Supermarket is Scotland’s premier halal meat and grocery destination, offering premium halal-certified cuts and oriental essentials. The ecommerce platform allows customers to shop fresh halal meat, groceries, and ready-to-cook items with same-day delivery or quick click-and-collect service.",
    description:
      "Rajah’s Supermarket combines traditional halal butchery expertise with modern ecommerce convenience. Built for speed, reliability, and customer trust, the website offers real-time inventory, fresh-cut ordering, online payments, and seamless delivery integration across Edinburgh. With a clean, conversion-optimized UI and 24/7 freshness promise, Rajah’s has become the go-to halal supermarket for thousands of customers.",
    video: { src: `/rajahs.mov`, isMobile: false },
    image: IMAGES.Rajahs1.src,
    alt: "Rajah’s Supermarket – Premium Halal Meats & Groceries",
    link: "https://rajah-butcher-clce.vercel.app/",
    technologies: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe API",
      "Firebase Auth",
      "Vercel Hosting"
    ],
    servicesProvided: [
      { id: 1, name: "Frontend Development", icon: Braces },
      { id: 2, name: "Backend & API Integration", icon: Code },
      { id: 3, name: "Ecommerce Cart & Checkout", icon: ShoppingCartIcon },
      { id: 4, name: "Payment Gateway Integration (Stripe)", icon: CreditCard },
      { id: 5, name: "Inventory & Stock Management", icon: Database },
      { id: 6, name: "SEO Optimization & Performance", icon: BarChart2 }
    ],
    objectives: [
      "Create an ecommerce platform for premium halal meat and grocery delivery across Scotland.",
      "Provide users with a smooth browsing and checkout experience via modern UI and secure payments.",
      "Integrate real-time inventory, pricing, and product management for fresh daily cuts.",
      "Enable fast same-day delivery and click-and-collect options through location-based logistics."
    ],
    approachTitle: "Approach",
    approachDescription:
      "We developed a full-featured halal supermarket platform that balances trust, performance, and simplicity. Built with Next.js and Tailwind CSS for speed and mobile optimization, it features real-time product updates, secure Stripe payments, and automated order tracking. The admin dashboard enables the Rajah’s team to manage stock, categories, and promotions with ease. The entire experience emphasizes convenience, halal authenticity, and freshness.",
    data: {
      sections: [
        {
          title: "Product Catalog & Categories",
          description:
            "A structured shopping experience covering meats, groceries, and ready-to-cook items with dynamic filtering.",
          subDescriptions: [
            "Core categories: Lamb, Chicken, Beef, Mutton, BBQ Packs, Ready-to-Cook, Spices & Masalas, Rice & Staples, Frozen Foods, Oriental Groceries.",
            "Category-based filtering and price range search for fast discovery.",
            "Each product includes origin, weight, cut details, and freshness indicators.",
            "In-stock validation and live quantity tracking."
          ],
          images: [
            { src: IMAGES.Rajahs2, alt: "Shop Page", isMobile: false },
            { src: IMAGES.Rajahs3, alt: "Product Catalog", isMobile: false }
          ]
        },
        {
          title: "Ecommerce Flow & Payments",
          description:
            "Built for secure and fast checkout, integrating Stripe for card payments and PayPal support.",
          subDescriptions: [
            "Add to Cart, Checkout, and Quick Purchase modules.",
            "Stripe API integration for instant payment confirmation.",
            "Order summary, tax calculation, and address validation.",
            "Confirmation emails and receipts for every purchase."
          ],
          images: [
            { src: IMAGES.Rajahs4, alt: "Checkout Interface", isMobile: false },
            { src: IMAGES.Rajahs5, alt: "Shopping Cart", isMobile: false }
          ]
        },
        {
          title: "Fresh Meat Management System",
          description:
            "Ensures daily updated inventory for fresh cuts and halal certification tracking.",
          subDescriptions: [
            "Dynamic stock update system tied to the in-store POS system.",
            "Daily batch sync for halal-certified fresh cuts.",
            "Admin panel for real-time editing of prices, weights, and cut descriptions.",
            "Delivery and click-and-collect slot scheduling."
          ],
          images: [
            { src: IMAGES.Rajahs6, alt: "Inventory Dashboard", isMobile: false }
          ]
        },
        {
          title: "Customer Reviews & Testimonials",
          description:
            "Integrated testimonials section to build credibility and showcase customer satisfaction.",
          subDescriptions: [
            "5000+ happy customers served across Edinburgh.",
            "Automated testimonial sync with Google Reviews.",
            "Dynamic review component with names, locations, and quotes.",
            "Average satisfaction rating displayed sitewide."
          ],
          images: [
            { src: IMAGES.Rajahs7, alt: "Customer Reviews", isMobile: false }
          ]
        },
        {
          title: "Recipes & Cooking Tips Section",
          description:
            "Content-driven area to improve engagement and encourage repeat visits.",
          subDescriptions: [
            "Cooking guides for grilling, slow cooking, and marination.",
            "In-app links to recommended spices and ready-to-cook items.",
            "SEO-optimized blog-style layout for visibility on Google.",
            "CMS integration for easy content updates by staff."
          ],
          images: [
            { src: IMAGES.Rajahs8, alt: "Cooking Tips", isMobile: false },
            { src: IMAGES.Rajahs9, alt: "Cooking Tips", isMobile: false }
          ]
        },
        {
          title: "Store Locator & Click & Collect",
          description:
            "Real-world integration with local store operations for quick collection and delivery.",
          subDescriptions: [
            "Google Maps integration for directions to 33 Albert Street, Edinburgh.",
            "Click & Collect ready within 1 hour of order confirmation.",
            "Same-day delivery available across Edinburgh regions.",
            "Store contact info, timings, and email support available sitewide."
          ]
        },
        {
          title: "Subscription & Newsletter",
          description:
            "Customer engagement through personalized offers and email automation.",
          subDescriptions: [
            "Email opt-in with promotional and recipe-based newsletters.",
            "No spam policy with GDPR-compliant data collection.",
            "Integrated unsubscribe and frequency controls.",
            "Campaign management via integrated EmailJS automation."
          ]
        }
      ]
    },
    results: [
      { label: "Happy Customers", value: "5,000+" },
      { label: "Years of Service", value: "25+" },
      { label: "Halal Certified", value: "100%" },
      { label: "Fresh Delivery Daily", value: "24/7" }
    ],
    Conclusion:
      "Rajah’s Supermarket merges traditional halal butchery craftsmanship with digital convenience. The website offers Scotland’s freshest halal meats and groceries through a seamless online experience — from daily cut management to secure online payments and rapid delivery. Built with precision, it represents the gold standard for halal ecommerce in the UK.",
    featured: true
  },  
  {
    id: "reid-daytona",
    industries: ["Luxury Goods", "Ecommerce", "Retail"],
    services: [
      "Ecommerce Development",
      "Luxury Brand Website",
      "Inventory Management System",
      "Online Booking & Appointment Module",
      "SEO & Marketing Optimization",
      "Payment Gateway Integration"
    ],
    title: "Reid Daytona Watches",
    subtitle: "Dubai’s Trusted Watch Dealer Since 2014",
    details:
      "Reid Daytona is Dubai’s most trusted name in luxury watches, specializing in authentic, pre-owned, and brand-new timepieces. Built on transparency and trust, the platform connects global collectors to verified luxury pieces from Rolex, Patek Philippe, Vacheron Constantin, and Omega, all backed by documentation, warranty, and buy-back guarantees.",
    description:
      "Reid Daytona is a luxury ecommerce platform designed to reflect the exclusivity and confidence of high-end watch trading. It offers a refined online experience for collectors and enthusiasts, featuring real-time stock updates, transparent pricing, and a secure booking system for private showings in Dubai. With over 7,500+ watches sold and 10+ years in the market, Reid Daytona has become a global name in trusted luxury reselling.",
    video: { src: `/watchvideo.mov`, isMobile: false },
    image: IMAGES.Watch1.src,
    alt: "Reid Daytona – Dubai’s Trusted Luxury Watch Dealer",
    link: "https://watch-app-xpaz.vercel.app/",
    technologies: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe API",
      "EmailJS",
      "Cloudinary (for images)",
      "Vercel Hosting"
    ],
    servicesProvided: [
      { id: 1, name: "Luxury Ecommerce Development", icon: ShoppingBag },
      { id: 2, name: "Inventory & Product Management System", icon: Database },
      { id: 3, name: "Online Appointment Booking", icon: Calendar },
      { id: 4, name: "Payment & VAT Integration", icon: CreditCard },
      { id: 5, name: "SEO & Marketing Optimization", icon: Search },
      { id: 6, name: "Responsive UI/UX Design", icon: Monitor }
    ],
    objectives: [
      "Develop an elegant, secure platform to showcase and sell premium watches online.",
      "Integrate appointment booking and showroom visit scheduling directly within the site.",
      "Ensure transparent pricing, including cash vs. card variations and VAT inclusion.",
      "Build customer trust through authenticity verification, reviews, and warranty systems."
    ],
    approachTitle: "Approach",
    approachDescription:
      "Reid Daytona’s platform was developed to replicate the exclusivity of luxury retail online. Built with Next.js and Tailwind CSS for smooth performance, it combines product transparency, trust elements, and personalized engagement. Features like real-time pricing, WhatsApp integration, and buy-back programs ensure a professional yet approachable shopping experience for watch collectors around the world.",
    data: {
      sections: [
        {
          title: "Luxury Watch Collection",
          description:
            "A curated digital catalog of iconic timepieces from Rolex, Patek Philippe, Omega, and Vacheron Constantin.",
          subDescriptions: [
            "Searchable by brand, model, and reference number.",
            "Filter by condition, warranty year, and showroom location.",
            "Each product includes high-resolution photography, detailed specifications, and pricing breakdowns.",
            "Transparent pricing across Cash, Card, and Discounted rates."
          ],
          images: [
            { src: IMAGES.Watch2, alt: "Luxury Watch Catalog", isMobile: false }
          ]
        },
        {
          title: "Featured Timepieces",
          description:
            "Highlighting Reid Daytona’s most sought-after watches with real-time availability and offers.",
          subDescriptions: [
            "Rolex Daytona Ref. 116500LN – 20% Off (AED 120,000)",
            "Rolex Submariner Ref. 126610LN – 11% Off (AED 8,500)",
            "Vacheron Constantin Overseas Ref. 4500V – 12% Off (AED 22,000)",
            "Patek Philippe Nautilus Ref. 5711/1A – 9% Off (AED 32,000)",
            "Omega Seamaster Diver 300M – 16% Off (AED 3,800)"
          ],
          images: [
            { src: IMAGES.Watch3, alt: "Featured Timepieces Grid", isMobile: false }
          ]
        },
        {
          title: "Why Choose Reid Daytona?",
          description:
            "A decade of excellence rooted in authenticity, client satisfaction, and unparalleled service.",
          subDescriptions: [
            "✓ Over 10 years in business with 7,500+ watches sold.",
            "✓ 5.0 star client rating with 100% authenticity guarantee.",
            "✓ 12-month global warranty on all pre-owned timepieces.",
            "✓ Buy-back guarantee on every purchase.",
            "✓ Licensed and VAT-registered business in Dubai."
          ],
          images: [
            { src: IMAGES.Watch4, alt: "Trusted Watch Dealer Dubai", isMobile: false }
          ]
        },
        {
          title: "Customer Trust & Transparency",
          description:
            "Reid Daytona sells trust, not hype — every watch comes with full transparency and proof of authenticity.",
          subDescriptions: [
            "Detailed product photography and video verification on request.",
            "Condition grading (New, Like New, Pre-owned).",
            "Warranty and authenticity cards included for every watch.",
            "All watches are independently verified before listing."
          ],
          images: [
            { src: IMAGES.Watch5, alt: "Customer Trust Section", isMobile: false }
          ]
        },
        {
          title: "Book an Appointment",
          description:
            "A premium concierge experience — clients can schedule private viewings in Dubai’s top locations.",
          subDescriptions: [
            "Integrated appointment booking form with date/time picker.",
            "WhatsApp and EmailJS automation for instant confirmations.",
            "Locations: Downtown Dubai (Souk Al Bahar) and Chronohub, Al Quoz.",
            "Personalized in-person or virtual consultation options."
          ],
          images: [
            { src: IMAGES.Watch6, alt: "Book Appointment", isMobile: false }
          ]
        },
        {
          title: "Showrooms & Contact",
          description:
            "Multiple Dubai-based showrooms with flexible timings and dedicated client support.",
          subDescriptions: [
            "Downtown Dubai – Souk Al Bahar, Saaha Offices (10am–8pm weekdays).",
            "Chronohub, Al Quoz (11am–7pm weekends).",
            "WhatsApp +971 50 159 2024 for instant queries.",
            "info@reiddaytona.com for verified communication."
          ]
        },
        {
          title: "Trust Seals & Credentials",
          description:
            "Reid Daytona is a licensed business under Dubai DED and registered for VAT & Tax.",
          subDescriptions: [
            "✓ DED Licensed Business",
            "✓ VAT & Tax Registered",
            "✓ Free Delivery UAE-wide",
            "✓ 12-Month Warranty",
            "✓ 5-Star Rated Service",
            "✓ Over 7,500+ Watches Sold"
          ]
        }
      ]
    },
    results: [
      { label: "Years in Business", value: "10+" },
      { label: "Watches Sold", value: "7,500+" },
      { label: "Clients Served", value: "5,000+" },
      { label: "Rating", value: "5.0 Stars" }
    ],
    Conclusion:
      "Reid Daytona redefines luxury retail with a foundation built on trust, authenticity, and transparency. By combining refined design, seamless ecommerce experience, and direct client engagement, it has become Dubai’s most reliable luxury watch dealer — where every timepiece tells a story of craftsmanship and confidence.",
    featured: true
  }
  
];

export const caseStudies = allCaseStudies.filter((study) => !study.hidden);
