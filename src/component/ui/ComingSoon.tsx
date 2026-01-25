"use client";
import { Calendar, MapPin, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import artifact from "@/assets/images/artifact-1.svg";
import artifact2 from "@/assets/images/artifact-2.svg";
import artifact3 from "@/assets/images/artifact-3.svg";
import { motion } from "framer-motion";

const ComingSoon: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <section className="flex-col md:h-[870px] lg:h-[680px] xl:h-[690px] overflow-y-hidden w-full flex items-center pt-5">
      <div className="">
        <h1 className="text-4xl text-center xl:text-5xl font-bold">
          Coming Soon!
        </h1>
        <p className="text-lg text-center mt-7">
          {message || "We are working on this, please check back later!"}
        </p>
      </div>
      <div className="hidden mt-[70px] h-full relative md:grid grid-cols-3 md:px-28 xl:px-0 w-full max-w-4xl mx-auto">
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
    </section>
  );
};

export default ComingSoon;
