"use client";

import Image from "next/image";
import technovalogo from "@/assets/images/technova-logo.svg";
import { links } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 flex w-full py-5 px-5 md:px-12 items-center gap-5 justify-between z-50">
      <div className="z-50">
        <Image src={technovalogo} alt="Logo" width={100} height={100} />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-10 items-center">
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
      <Link
        href="/sponsor"
        className="hidden md:block bg-[#000000] rounded-xl text-white px-5 py-2 hover:bg-black/80 transition-colors"
      >
        Become a Sponsor
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden z-50 p-2"
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
            className="fixed inset-0 bg-[#FFF9EA] z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
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
            <Link
              href="/sponsor"
              className="bg-[#000000] rounded-xl text-white px-8 py-3 text-lg mt-4 hover:bg-black/80 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Become a Sponsor
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
