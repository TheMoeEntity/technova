"use client";
import { Calendar, MapPin, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import artifact from "@/assets/images/artifact-1.svg";
import artifact2 from "@/assets/images/artifact-2.svg";
import artifact3 from "@/assets/images/artifact-3.svg";
import { motion } from "framer-motion";
import { Data } from "@/lib/constants";

const Hero = () => {
  const [showMap, setShowMap] = useState(false);
  return (
    <section className="bg-[#FFF9EA] flex-col h-[620px] lg:h-[680px] xl:h-[800px] overflow-y-hidden w-full flex items-center py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center z-10 relative"
      >
        <h1 className="text-[36px] leading-[1.2] md:leading-none tracking-tighter md:tracking-[0.8px] text-center md:text-4xl max-w-3xl mx-auto lg:text-5xl xl:text-[65px] font-bold px-5 md:px-0">
          Africa&apos;s Biggest Carnival of Innovation
        </h1>
        <div className="w-fit flex-wrap text-sm mt-5 flex justify-center gap-5 items-center">
          <div className="flex border rounded-4xl border-gray-200 px-4 py-2 items-center gap-2">
            <Calendar />
            <span>March 12th-14th, 2026</span>
          </div>
          <div
            title="Click to view location"
            className="flex border rounded-4xl border-gray-200 px-4 py-2 items-center gap-2 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => setShowMap(true)}
          >
            <MapPin />
            <span>{Data.Location}</span>
          </div>
        </div>
      </motion.div>

      <div className="-mt-5 h-full relative grid grid-cols-3 md:px-28 xl:px-0 w-full max-w-4xl mx-auto">
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
            animate={{ y: [0, -12, 0] }}
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
