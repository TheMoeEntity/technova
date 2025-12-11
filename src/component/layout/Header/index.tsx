"use client";

import Image from "next/image";
import technovalogo from "@/assets/images/technova-logo.svg";
import { links } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        <button className="cursor-pointer" onClick={handleClick}>
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
        <Link
          href="/sponsor"
          className="hidden lg:block border border-[#FFC520] bg-[#FFEFC1] rounded-xl text-black px-5 py-2 transition-colors"
        >
          Become a Sponsor
        </Link>
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
            className="fixed inset-0 bg-[#FFF9EA] z-40 flex flex-col items-center justify-center gap-8 lg:hidden"
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
            <div className="flex gap-8 flex-col items-center">
              <Link
                href="/sponsor"
                className="lg:block border border-[#FFC520] bg-[#FFEFC1] rounded-xl text-black px-5 py-2 transition-colors"
              >
                Become a Sponsor
              </Link>
              <Link
                href="/tickets"
                className="lg:block bg-[#000000] rounded-xl text-white px-5 py-2 hover:bg-black/80 transition-colors"
              >
                Get Tickets
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
