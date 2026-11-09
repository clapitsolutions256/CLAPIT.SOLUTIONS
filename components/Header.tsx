"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import DropdownMenu from "./DropdownMenu";
import { Button } from "./ui/button";
import { services } from "@/data/services";
import { IMAGES } from "@/public/images";
import { cn } from "@/utilities/ui";

const NAV_LINKS = [
  { href: "/case-studies", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/people", label: "People" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blogs", label: "Blogs" },
];

const toMenuItems = (category: string) =>
  services
    .filter((s) => s.category === category)
    .map((s) => ({
      title: s.title,
      href: s.href || `/services/${s.id}`,
      description: s.description,
      category: s.category,
    }));

export const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const dropdownMenu = document.querySelector(".dropdown-menu");
      const menuButtons = document.querySelectorAll(".menu-button");
      if (
        dropdownMenu?.contains(target) ||
        Array.from(menuButtons).some((button) => button.contains(target))
      ) {
        return;
      }
      setServicesOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    handleScroll();
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(`${href}/`);

  const closeAll = () => {
    setIsMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[1000] bg-white transition-[box-shadow,border-color] duration-300",
          scrolled || isMobileMenuOpen
            ? "border-b border-zinc-200 shadow-[0_1px_12px_rgba(16,16,20,0.06)]"
            : "border-b border-transparent"
        )}
      >
        <nav
          aria-label="Main"
          className="container flex h-[72px] items-center justify-between gap-6"
        >
          <Link href="/" className="shrink-0" aria-label="CLAPIT SOLUTIONS home">
            <Image
              src={IMAGES.CLAPIT}
              alt="CLAPIT SOLUTIONS"
              width={168}
              height={40}
              priority
              className="h-9 w-auto sm:h-10"
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <button
              type="button"
              onClick={() => setServicesOpen((o) => !o)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className={cn(
                "menu-button inline-flex h-10 items-center gap-1 rounded-lg px-3.5 text-[15px] font-medium transition-colors",
                servicesOpen || isActive("/services")
                  ? "text-secondary"
                  : "text-zinc-700 hover:bg-zinc-100 hover:text-ink"
              )}
            >
              Services
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  servicesOpen && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "inline-flex h-10 items-center rounded-lg px-3.5 text-[15px] font-medium transition-colors",
                  isActive(link.href)
                    ? "text-secondary"
                    : "text-zinc-700 hover:bg-zinc-100 hover:text-ink"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden lg:inline-flex">
              <Link href="/contact-us">Get in touch</Link>
            </Button>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink hover:bg-zinc-100 lg:hidden"
              onClick={() => setIsMobileMenuOpen((o) => !o)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="overflow-hidden border-t border-zinc-200 bg-white lg:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="container space-y-1 py-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setServicesOpen(true);
                  }}
                  className="menu-button flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-base font-medium text-ink hover:bg-zinc-100"
                >
                  Services
                  <ChevronDown className="h-4 w-4 -rotate-90" aria-hidden="true" />
                </button>
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeAll}
                    className={cn(
                      "block rounded-lg px-3 py-3 text-base font-medium hover:bg-zinc-100",
                      isActive(link.href) ? "text-secondary" : "text-ink"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3">
                  <Button asChild size="lg" className="w-full">
                    <Link href="/contact-us" onClick={closeAll}>
                      Get in touch
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {servicesOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-ink/30 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute left-1/2 top-20 w-full max-w-7xl -translate-x-1/2 px-4">
              <div className="dropdown-menu">
                <DropdownMenu
                  onClose={() => setServicesOpen(false)}
                  developmentServices={toMenuItems("development")}
                  marketingServices={toMenuItems("marketing")}
                  seeAll="/services"
                  title="services"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
