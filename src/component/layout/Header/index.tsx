"use client";

import Image from "next/image";
import technovalogo from "@/assets/images/technova-logo.svg";
import { links, getInvolvedLinks } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const currPath = usePathname();
  const isHome = currPath === "/";
  const { push } = useRouter();

  const handleClick = () => {
    if (!isHome) {
      push("/");
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("scrollToElement"));
      }, 750);
    } else {
      window.dispatchEvent(new CustomEvent("scrollToElement"));
    }
    setIsOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 flex w-full py-5 px-5 md:px-12 items-center gap-5 justify-between lg:justify-evenly z-50">
      <Link href="/" className="z-50">
        <Image
          src={technovalogo}
          alt="Logo"
          width={95}
          height={95}
          className="w-full h-auto"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-10 items-center">
        <button
          className="cursor-pointer hover:text-orange-500 transition-colors"
          onClick={handleClick}
        >
          Schedule
        </button>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-orange-500 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex gap-3 items-center">
        {/* Desktop Dropdown */}
        <div
          className="relative hidden lg:block"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="flex items-center gap-2 rounded-xl text-black px-5 py-2 transition-colors">
            Get Involved
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 w-56 bg-[#FFF9EA] rounded-xl shadow-lg overflow-hidden border border-gray-100 py-2"
              >
                {getInvolvedLinks.map((link, index) => (
                  <div key={index}>
                    <Link
                      href={link.href}
                      className="block px-4 py-2 text-sm hover:bg-[#FFEFC1] transition-colors text-black"
                    >
                      {link.label}
                    </Link>
                    {index < getInvolvedLinks.length - 1 && (
                      <div className="h-1px bg-black/10 mx-4 my-1" />
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link
          href="/tickets"
          className="hidden lg:block bg-[#000000] rounded-xl text-white px-5 py-2 hover:bg-black/80 transition-colors"
        >
          Get Tickets
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden z-50 p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#FFF9EA] z-40 flex flex-col items-center justify-center gap-6 lg:hidden overflow-y-auto py-20"
          >
            <button
              className="cursor-pointer text-2xl font-bold hover:text-orange-500 transition-colors"
              onClick={handleClick}
            >
              Schedule
            </button>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-bold hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Get Involved Dropdown */}
            <div className="flex flex-col items-center w-full max-w-xs">
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="flex items-center gap-2 text-2xl font-bold hover:text-orange-500 transition-colors mb-4"
              >
                Get Involved
                <ChevronDown
                  size={24}
                  className={`transition-transform duration-200 ${isMobileDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isMobileDropdownOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-col items-center gap-4 overflow-hidden w-full bg-white/50 rounded-xl p-4"
                  >
                    {getInvolvedLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium hover:text-orange-500 transition-colors text-center w-full"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/tickets"
              className="bg-[#000000] rounded-xl text-white px-8 py-3 hover:bg-black/80 transition-colors text-lg font-medium mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Tickets
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
