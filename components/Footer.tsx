"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { SiTrustpilot, SiFiverr, SiUpwork } from "react-icons/si";
import { useState } from "react";
import { services } from "@/data/services";
import { Service } from "@/components/types";
import Image from "next/image";
import { IMAGES } from "@/public/images";

type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  id: string;
  title: string;
  type: "links" | "text";
  items: FooterLink[] | Service[];
};

const Footer = () => {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (id: string) => setOpen(open === id ? null : id);

  const aboutLinks: FooterLink[] = [
    { label: "About Us", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Our Case Studies", href: "/case-studies" },
  ];

  const serviceLinks: FooterLink[] = [
    { label: "Calculate Project Cost", href: "/pricing/calculate-outsource" },
    { label: "Calculate Team Cost", href: "/pricing/team-extension" },
    { label: "Calculate Marketing Cost", href: "/pricing/marketing" },
  ];

  const sections: FooterSection[] = [
    { id: "about", title: "About", type: "links", items: aboutLinks },
    { id: "services", title: "Services", type: "links", items: serviceLinks },
    {
      id: "capabilities",
      title: "Capabilities",
      type: "text",
      items: services,
    },
  ];

  return (
    <div className="px-3 pb-3 sm:px-4 sm:pb-4 lg:pb-10">
    <footer className="[font-family:var(--font-futura)] [letter-spacing:0.01em] mx-auto max-w-[1440px] bg-dark text-light px-4 py-10 md:px-20 rounded-[30px]">
      <div className="block md:hidden ">
        <div className="flex justify-center space-x-4 mb-6 text-xl ">
          {[FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube].map(
            (Icon, i) => (
              <span
                key={i}
                className="bg-secondary hover:bg-lightMedium text-light p-2 rounded-full"
              >
                <Icon />
              </span>
            )
          )}
        </div>

        <div className="text-center text-sm text-gray-300 mb-6">
        <p className="text-sm text-gray-300 mb-2">
            1440 Newport Ave, San Jose, CA 95125,
            <br />
            California, United States
          </p>
          <p className="text-sm text-gray-300 mb-6">
            Gulberg III, Lahore, Punjab, Pakistan
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="border-t border-gray-700 pt-4">
              <button
                onClick={() => toggle(section.id)}
                className="w-full flex justify-between items-center font-semibold text-base"
              >
                {section.title}
                <span className="transform transition-transform">
                  {open === section.id ? "▲" : "▼"}
                </span>
              </button>
              {open === section.id && (
                <ul className="mt-2 space-y-2 text-sm text-light">
                  {section.type === "links"
                    ? (section.items as FooterLink[]).map((link, i) => (
                        <li key={i}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))
                    : (section.items as Service[]).map((service) => (
                        <li
                          key={service.id}
                          className="cursor-pointer text-primary hover:text-secondary"
                        >
                          <Link href={service.href}>{service.title}</Link>
                        </li>
                      ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6 text-center">
        <h4 className="text-secondary font-semibold mb-4">Contact Us</h4>
          <p className="text-sm text-light mb-2">clapitsolutions@gmail.com</p>
          <p className="text-sm text-light mb-2"></p>
          <p className="text-sm text-light mb-2">mycodecircle302@gmail.com</p>
          <p className="text-sm text-light mb-8">+92 307 3346 890</p>
          <button className="w-full bg-secondary hover:bg-lightMedium text-dark font-semibold py-2 rounded-full">
            Schedule a Call
          </button>
        </div>

        <div className="flex justify-center space-x-6 text-2xl text-light my-6">
          <FaCcVisa />
          <FaCcMastercard />
          <FaMoneyCheckAlt />
        </div>

        <div className="flex justify-center space-x-6 text-xl text-light mb-6">
          <SiUpwork />
          <SiFiverr />
          <SiTrustpilot />
        </div>
      </div>

      <div className="hidden md:flex  justify-between gap-12 max-w-[1400px] mx-auto">
        <div className="max-w-xs">
          <h3 className="text-2xl font-bold mb-4 text-light">
            <Image src={IMAGES.CLAPIT} alt="CLAPIT SOLUTIONS" width={200} height={200} className="w-full h-full object-cover rounded-xl" />
          </h3>
          <p className="text-sm text-gray-300 mb-2">
            1440 Newport Ave, San Jose, CA 95125,
            <br />
            California, United States
          </p>
          <p className="text-sm text-gray-300 mb-6">
            Gulberg III, Lahore, Punjab, Pakistan
          </p>
          <div className="flex space-x-4 text-xl">
            {[FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube].map(
              (Icon, i) => (
                <span
                  key={i}
                  className="bg-secondary hover:bg-lightMedium text-light p-2 rounded-full"
                >
                  <Icon />
                </span>
              )
            )}
          </div>
        </div>
        <div className="border-l border-gray-700 my-10"></div>

        <div>
          <h4 className="text-secondary font-semibold mb-4">About</h4>
          <ul className="space-y-2 text-sm text-light">
            {aboutLinks.map((link, i) => (
              <li
                key={i}
                className="cursor-pointer text-primary hover:text-secondary"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div>
            <h4 className="text-secondary font-semibold mb-2 mt-2">Pricing</h4>
            <ul className="space-y-2 text-sm text-light">
              {serviceLinks.map((link, i) => (
                <li
                  key={i}
                  className="cursor-pointer text-primary hover:text-secondary"
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-l border-gray-700 my-10"></div>

        <div>
          <h4 className="text-secondary font-semibold mb-4">Capabilities</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm text-light max-w-xs">
            {services.map((service) => (
              <li
                key={service.id}
                className="cursor-pointer text-primary hover:text-secondary"
              >
                <Link href={service.href}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-l border-gray-700 my-10"></div>

        <div>
          <h4 className="text-secondary font-semibold mb-4">Contact Us</h4>
          <p className="text-sm text-light mb-2">clapitsolutions@gmail.com</p>
          <p className="text-sm text-light mb-2">+1 (647) 883-6143</p>
          <p className="text-sm text-light mb-2">mycodecircle302@gmail.com</p>
          <p className="text-sm text-light mb-8">+92 307 3346 890</p>
          <Link href="/contact-us" className="bg-secondary hover:bg-lightMedium px-4 py-3 rounded-full font-semibold text-light mb-4">
            Contact Us
          </Link>
          <div className="flex space-x-4 text-2xl text-light mt-5 pl-3">
            <FaCcVisa />
            <FaCcMastercard />
            <FaMoneyCheckAlt />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 my-10"></div>
      <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 space-y-4 sm:space-y-0">
        <div className="flex space-x-4">
          <Link href="/refund-policy">Refund Policy</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
        </div>
        {/* <div className="flex space-x-6 text-xl">
          <SiUpwork />
          <SiFiverr />
          <SiTrustpilot />
        </div> */}
      </div>

      <div className="flex flex-col sm:flex-row justify-between text-center mt-6 text-xs text-gray-500">
        <p>
          &copy; 2025 <span className="text-secondary">CLAPIT SOLUTIONS.</span>All
          Rights Reserved.
        </p>
        <p>
          <span className="text-secondary">CLAPIT SOLUTIONS.</span> Pvt Ltd
        </p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
