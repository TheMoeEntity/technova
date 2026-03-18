"use client";
import { Calendar, ChevronDown, MapPin, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import artifact from "@/assets/images/artifact-1.svg";
import artifact2 from "@/assets/images/artifact-2.svg";
import artifact3 from "@/assets/images/artifact-3.svg";
import { AnimatePresence, motion } from "framer-motion";
import { Data, getInvolvedLinks } from "@/lib/constants";
import Link from "next/link";
import { toast } from "sonner";

import Countdown from "@/component/ui/Countdown";

const Hero = () => {
  const [showMap, setShowMap] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  return (
    <section className="bg-[#FFF9EA] flex-col h-[1008px] md:h-[980px] lg:h-[680px] xl:h-[1150px] overflow-y-hidden w-full flex items-center py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center z-10 relative"
      >
        <h1 className="text-[36px] pt-5 md:pb-6 leading-[1.2] md:leading-none tracking-tighter md:tracking-[0.8px] text-center md:text-4xl max-w-5xl mx-auto lg:text-5xl xl:text-[60px] font-bold px-5 md:px-0 xl:px-10">
          Africa&apos;s Biggest Carnival of Tech, Innovation & Opportunity
        </h1>
        <div className="w-fit flex-wrap text-sm mt-5 flex justify-center gap-5 items-center">
          <div className="flex border rounded-4xl border-gray-200 px-4 py-2 items-center gap-2">
            <Calendar />
            <span>8AM March 14th, 2026</span>
          </div>
          <div
            title="Click to view location"
            className="flex border rounded-4xl border-gray-200 px-4 py-2 items-center gap-2 cursor-pointer hover:bg-gray-50 transition-colors active:scale-95"
            onClick={() => setShowMap(true)}
          >
            <MapPin className="animate-bounce" />
            <span>{Data.Location}</span>
          </div>
        </div>

        <Countdown />
      </motion.div>

      <div className="flex items-center gap-5 mt-10">
        <button
          onClick={() => toast.error("Registration closed")}
          className="px-6 py-2 bg-black text-white rounded-lg cursor-pointer"
        >
          Register Now
        </button>
        {/* <a
          href=""
          className="px-6 py-2 bg-[#FFEFC1] border-[#FFC520] border text-black rounded-lg"
        >
          Become a Partner
        </a> */}
        {/* Desktop Dropdown */}
        <div
          className="relative block"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 rounded-xl text-black px-5 py-2 transition-colors"
          >
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
                className="absolute z-50 top-full right-0 mt-2 w-56 bg-[#FFF9EA] rounded-xl shadow-lg overflow-hidden border border-gray-100"
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
      </div>
      <div className="mt-[100px] h-full relative grid grid-cols-3 md:px-28 xl:px-0 w-full max-w-4xl mx-auto">
        {/* Left Artifact */}
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className=""
        >
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-auto translate-y-34 xl:translate-y-40"
          >
            <Image
              src={artifact}
              alt="Artifact 1"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Center Artifact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className=""
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="w-full flex items-center justify-center h-full xl:h-[650px]"
          >
            <Image
              src={artifact2}
              alt="Artifact 2"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Right Artifact */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="xl:w-[350px] xl:h-[840px "
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="w-full h-full translate-y-20 xl:translate-y-20 xl:w-[350px]"
          >
            <Image
              src={artifact3}
              alt="Artifact 3"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      {showMap && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowMap(false)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-4xl h-[500px] relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowMap(false)}
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6788608334996!2d8.099764274404285!3d6.305856025655486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105ca1c82df8624b%3A0x8be70605f90b09b3!2sEbonyi%20State%20Ecumenical%20Center!5e0!3m2!1sen!2sng!4v1765416549266!5m2!1sen!2sng"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
