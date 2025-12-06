"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Instagram, Linkedin } from "lucide-react";
import { PiTiktokLogoBold } from "react-icons/pi"; // tiktok icon looks nicer via react-icons
import technovalogo from "@/assets/images/technova-logo-white.svg";
import footerIcon from "@/assets/images/footer-icon.svg";
export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 lg:flex-row justify-between md:items-center">
        {/* Left section */}
        <div className="flex flex-col items-start gap-18">
          {/* LOGO */}
          <Image
            src={technovalogo}
            alt="Tech Nova logo"
            width={160}
            height={80}
            className="object-contain"
          />

          <div className="grid grid-cols-2 gap-x-20 xl:gap-x-40 gap-y-1 text-lg text-white">
            <Link href="/schedule">Schedule</Link>
            <Link href="/faqs">FAQs</Link>

            <Link href="/speakers">Speakers</Link>
            <Link href="/team">Team</Link>

            <Link href="/dp-generator">Dp Generator</Link>
            <Link href="/contact">Contact us</Link>
          </div>
        </div>

        {/* Right section */}
        <div className="flex flex-col items-center gap-10">
          {/* pixel graphic */}
          <Image
            src={footerIcon}
            alt="Graphic"
            width={180}
            height={140}
            className="object-contain"
          />

          {/* social icons */}
          <div className="flex items-center gap-4">
            {/* Replace links */}
            <a
              href="#"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
            >
              <X className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
            >
              <PiTiktokLogoBold className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
