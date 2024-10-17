"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Registerdialog from "./Registerdialog";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Qui sommes nous ?", href: "#nous" },
  { name: "Cours", href: "#courses" },
  { name: "Notre équipe", href: "#équipe" },
  { name: "Témoignages", href: "#testimonial" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="relative w-24 h-8 sm:w-32 sm:h-10 md:w-40 md:h-12">
                <Image
                  src="/assets/logo/logoAnum2.png"
                  alt="Logo A-Numérique"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-ultramarine bg-blue-100"
                      : "text-gray-700 hover:text-ultramarine hover:bg-blue-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Registerdialog />
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-700 rounded-md hover:text-ultramarine focus:outline-none"
            >
              {isOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden ${
            isOpen ? "fixed inset-0 z-50 bg-white overflow-y-auto" : "hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.href)
                    ? "text-ultramarine bg-blue-100"
                    : "text-gray-700 hover:text-ultramarine hover:bg-blue-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4">
              <Registerdialog />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
