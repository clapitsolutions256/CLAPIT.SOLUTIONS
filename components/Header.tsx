"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import DropdownMenu from "./DropdownMenu";
import { Button } from "./ui/legacy-button";
import { services } from "@/data/services";
import { industriesData, } from "@/data/industries";
import { IMAGES } from "@/public/images";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("development");
  const [activeMenu, setActiveMenu] = useState<
    "services" | null
  >(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const isDropdownOpen = activeMenu !== null;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const dropdownMenu = document.querySelector(".dropdown-menu");
      const menuButtons = document.querySelectorAll(".menu-button");

      if (
        (dropdownMenu && dropdownMenu.contains(event.target as Node)) ||
        Array.from(menuButtons).some((button) =>
          button.contains(event.target as Node)
        )
      ) {
        return;
      }

      setActiveMenu(null);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  };

  const handleMenuClick = (menu: "services") => {
    setIsMobileMenuOpen(false);
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  const getDropdownProps = () => {
    if (activeMenu === "services") {
      // Show both Development and Marketing services
      const developmentServices = services
        .filter((s) => s.category === "development")
        .map((s) => ({
          title: s.title,
          href: s.href || `/services/${s.id}`,
          description: s.description,
          category: s.category,
        }));

      const marketingServices = services
        .filter((s) => s.category === "marketing")
        .map((s) => ({
          title: s.title,
          href: s.href || `/services/${s.id}`,
          description: s.description,
          category: s.category,
        }));

      return {
        developmentServices,
        marketingServices,
        seeAll: "/services",
        title: "services",
      };
    }
    return {
      developmentServices: [],
      marketingServices: [],
      seeAll: "/services",
      title: "services",
    };
  };

  const mobileMenuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <div className="[font-family:var(--font-futura)] [letter-spacing:0.01em]">
      <nav
        className={`fixed top-0 left-0 right-0 px-4   m-4 rounded-2xl z-[1000] transition-all duration-300 w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto ${
          scrolled || isMobileMenuOpen
            ? "bg-white shadow-lg dark:bg-dark"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto ">
          <div className="flex items-center justify-between h-16 ">
            <Link
              href="/"
              className={`text-2xl font-bold text-dark ${
                scrolled || isMobileMenuOpen
                  ? "text-gray-900 dark:text-white"
                  : "text-dark"
              }`}
            >
              <Image
                src={IMAGES.CLAPIT}
                alt="CLAPIT SOLUTIONS"
                width={150}
                height={150}
                className="w-full h-full object-cover rounded-lg"
              />
            </Link>

            <div className="flex items-center space-x-8">
              <div
                className="hidden lg:flex flex-1 justify-center"
                ref={menuRef}
              >
                <div className="flex items-center space-x-10">
                  <div className="relative">
                    <button
                      onClick={() => handleMenuClick("services")}
                      className={`menu-button relative group light:text-gray-600 hover:text-secondary font-medium ${
                        scrolled ? "text-gray-900 dark:text-white" : "text-dark"
                      } ${activeMenu === "services" ? "text-secondary" : ""}`}
                    >
                      <span>Services</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full" />
                    </button>
                  </div>

                  <Link
                    href="/case-studies"
                    className={`relative group light:text-gray-600 hover:text-secondary font-medium ${
                      scrolled ? "text-gray-900 dark:text-white" : "text-dark"
                    }`}
                  >
                    <span>Projects</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full" />
                  </Link>
                  <Link
                    href="/about"
                    className={`relative group light:text-gray-600 hover:text-secondary font-medium ${
                      scrolled ? "text-gray-900 dark:text-white" : "text-dark"
                    }`}
                  >
                    <span>About</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full" />
                  </Link>
                  <Link
                    href="/people"
                    className={`relative group light:text-gray-600 hover:text-secondary font-medium ${
                      scrolled ? "text-gray-900 dark:text-white" : "text-dark"
                    }`}
                  >
                    <span>People</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full" />
                  </Link>
                  <Link
                    href="/pricing"
                    className={`relative group light:text-gray-600 hover:text-secondary font-medium ${
                      scrolled ? "text-gray-900 dark:text-white" : "text-dark"
                    }`}
                  >
                    <span>Pricing</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full" />
                  </Link>
                  <Link
                    href="/blogs"
                    className={`relative group light:text-gray-600 hover:text-secondary font-medium ${
                      scrolled ? "text-gray-900 dark:text-white" : "text-dark"
                    }`}
                  >
                    <span>Blogs</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full" />
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <Button
                  asChild
                  className={`${
                    scrolled
                      ? "bg-light  text-white light:bg-primary dark:bg-secondary dark:text-primary light:text-dark hover:bg-primary hover:text-secondary font-medium"
                      : "bg-secondary text-white light:bg-gray-100 light:text-dark hover:bg-black font-medium"
                  }`}
                >
                  <Link href="/contact-us" onClick={handleLinkClick}>
                    Get in touch
                  </Link>
                </Button>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <motion.div
                  initial={false}
                  animate={isMobileMenuOpen ? "open" : "closed"}
                >
                  {isMobileMenuOpen ? (
                    <X
                      className={`w-6 h-6 ${
                        scrolled || isMobileMenuOpen
                          ? "text-gray-900 dark:text-white"
                          : "text-white"
                      }`}
                    />
                  ) : (
                    <Menu
                      className={`w-6 h-6 ${
                        scrolled || isMobileMenuOpen
                          ? "text-gray-900 dark:text-white"
                          : "text-dark"
                      }`}
                    />
                  )}
                </motion.div>
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="lg:hidden overflow-hidden bg-white dark:bg-dark"
                initial="closed"
                animate="open"
                exit="closed"
                variants={mobileMenuVariants}
              >
                <div className="px-2 pt-2 pb-3 space-y-3">
                  <button
                    onClick={() => handleMenuClick("services")}
                    className="w-full text-left px-4 py-2 text-base font-medium text-gray-900 dark:text-white rounded-lg light:bg-gray-100 dark:light:bg-gray-800 transition-colors"
                  >
                    Services
                  </button>
                  <Link
                    href="/case-studies"
                    className="block px-4 py-2 text-base font-medium text-gray-900 dark:text-white rounded-lg light:bg-gray-100 dark:light:bg-gray-800 transition-colors"
                    onClick={handleLinkClick}
                  >
                    <span>Projects</span>
                  </Link>
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-base font-medium text-gray-900 dark:text-white rounded-lg light:bg-gray-100 dark:light:bg-gray-800 transition-colors"
                    onClick={handleLinkClick}
                  >
                    <span>About</span>
                  </Link>
                  <Link
                    href="/people"
                    className="block px-4 py-2 text-base font-medium text-gray-900 dark:text-white rounded-lg light:bg-gray-100 dark:light:bg-gray-800 transition-colors"
                    onClick={handleLinkClick}
                  >
                    <span>People</span>
                  </Link>
                  <Link
                    href="/pricing"
                    className="block px-4 py-2 text-base font-medium text-gray-900 dark:text-white rounded-lg light:bg-gray-100 dark:light:bg-gray-800 transition-colors"
                    onClick={handleLinkClick}
                  >
                    <span>Pricing</span>
                  </Link>
                  <Link
                    href="/blogs"
                    className="block px-4 py-2 text-base font-medium text-gray-900 dark:text-white rounded-lg light:bg-gray-100 dark:light:bg-gray-800 transition-colors"
                    onClick={handleLinkClick}
                  >
                    <span>Blogs</span>
                  </Link>
                  <div className="pt-2">
                    <Button
                      asChild
                      className="w-full bg-dark text-white light:bg-gray-800 dark:bg-white dark:text-dark"
                    >
                      <Link href="/contact-us" onClick={handleLinkClick}>
                        Get in touch
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {isDropdownOpen && (
        <motion.div
          className="fixed inset-0 bg-dark/20 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute left-1/2 top-24 -translate-x-1/2 w-full max-w-7xl mx-auto px-4">
            <div className="dropdown-menu">
              <DropdownMenu
                onClose={() => setActiveMenu(null)}
                {...getDropdownProps()}
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Header;
