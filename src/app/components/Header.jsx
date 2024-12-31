"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Products", href: "/products" },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "Life At Bennet", href: "/life-at-bennet" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/bennet.png"
                alt="Bennet Pharmaceuticals Ltd."
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`lg:text-[1rem] md:text-[0.6rem] font-semibold ${
                  pathname === item.href
                    ? "text-[#AECA1D]"
                    : "text-black font-semibold"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 hidden" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 right-0 z-50 h-full w-2/3 bg-[#2b3f56]/90 text-white shadow-lg transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-gray-400"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-4 space-y-4 px-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 text-base font-medium ${
                  pathname === item.href
                    ? "text-[#AECA1D]"
                    : "hover:text-gray-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
