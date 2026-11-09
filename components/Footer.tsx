import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";
import { services } from "@/data/services";
import { IMAGES } from "@/public/images";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/105115282", icon: FaLinkedinIn },
  { label: "Instagram", href: "https://www.instagram.com/clapit.solutions/", icon: FaInstagram },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61578368938271", icon: FaFacebookF },
];

const COMPANY_LINKS = [
  { label: "About us", href: "/about" },
  { label: "Our people", href: "/people" },
  { label: "Industries", href: "/industries" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact-us" },
];

const PRICING_LINKS = [
  { label: "Pricing overview", href: "/pricing" },
  { label: "Project cost calculator", href: "/pricing/calculate-outsource" },
  { label: "Team extension cost", href: "/pricing/team-extension" },
  { label: "Marketing cost", href: "/pricing/marketing" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund Policy", href: "/refund-policy" },
];

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-sans text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-zinc-400 transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Footer = () => {
  const devServices = services.filter((s) => s.category === "development").slice(0, 6);

  return (
    <footer className="bg-ink text-zinc-400">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="CLAPIT SOLUTIONS home" className="inline-block rounded-xl bg-white px-4 py-3">
              <Image src={IMAGES.CLAPIT} alt="CLAPIT SOLUTIONS" width={168} height={40} className="h-9 w-auto" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              AI-powered development and branding agency helping businesses
              design, build and grow digital products.
            </p>
            <ul className="mt-6 flex gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`CLAPIT SOLUTIONS on ${label}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition-colors hover:border-secondary hover:bg-secondary hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-5">
            <LinkColumn title="Company" links={COMPANY_LINKS} />
            <LinkColumn title="Pricing" links={PRICING_LINKS} />
            <LinkColumn
              title="Services"
              links={devServices.map((s) => ({ label: s.title, href: s.href || `/services/${s.id}` }))}
            />
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-sans text-sm font-semibold text-white">Get in touch</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" aria-hidden="true" />
                <span className="space-y-1">
                  <a href="mailto:clapitsolutions@gmail.com" className="block hover:text-white">
                    clapitsolutions@gmail.com
                  </a>
                  <a href="mailto:mycodecircle302@gmail.com" className="block hover:text-white">
                    mycodecircle302@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" aria-hidden="true" />
                <span className="space-y-1">
                  <a href="tel:+16478836143" className="block hover:text-white">+1 (647) 883-6143</a>
                  <a href="tel:+923073346890" className="block hover:text-white">+92 307 3346 890</a>
                </span>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" aria-hidden="true" />
                <span className="leading-relaxed">
                  1440 Newport Ave, San Jose, CA 95125, USA
                  <br />
                  Gulberg III, Lahore, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-sm sm:flex-row">
          <p>&copy; {new Date().getFullYear()} CLAPIT SOLUTIONS Pvt Ltd. All rights reserved.</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
