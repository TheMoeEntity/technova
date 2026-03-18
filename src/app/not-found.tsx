"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertCircle, ArrowLeft } from "lucide-react";
import Image from "next/image";
import artifact from "@/assets/images/artifact-1.svg";
import artifact2 from "@/assets/images/artifact-2.svg";
import artifact3 from "@/assets/images/artifact-3.svg";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFF9EA] font-bricolage-grotesque items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center max-w-2xl mx-auto z-10"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-8 text-[#FFC520]"
        >
          <AlertCircle size={80} strokeWidth={1.5} />
        </motion.div>

        <h1 className="text-[60px] md:text-[80px] leading-tight font-bold tracking-tighter text-black mb-4">
          404
        </h1>
        <h2 className="text-[24px] md:text-[32px] font-bold text-gray-800 mb-6">
          Page Not Found
        </h2>

        <p className="text-gray-600 text-lg mb-10 max-w-md mx-auto">
          Oops! It looks like you&apos;ve ventured into the unknown. We
          couldn&apos;t find the page you&apos;re looking for.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft size={18} />
            Return Home
          </Link>
          {/* <Link
            href="/#contact"
            className="flex items-center gap-2 px-6 py-3 bg-[#FFEFC1] border-[#FFC520] border text-black rounded-lg hover:bg-[#FFC520]/20 transition-colors"
          >
            Contact Support
          </Link> */}
        </div>
      </motion.div>

      {/* Decorative background elements matching the hero subtle aesthetic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-[#FFC520] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-[#FFC520] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Floating Artifacts from Hero for 404 Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40 md:opacity-100">
        {/* Left Artifact */}
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute top-[10%] left-[-10%] md:left-[5%] w-[200px] md:w-[350px]"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={artifact}
              alt="Floating Artifact 1"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Center/Bottom Artifact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[300px] md:w-[500px]"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <Image
              src={artifact2}
              alt="Floating Artifact 2"
              className="w-full h-auto object-contain opacity-50"
            />
          </motion.div>
        </motion.div>

        {/* Right Artifact */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="absolute top-[20%] right-[-10%] md:right-[5%] w-[200px] md:w-[350px]"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <Image
              src={artifact3}
              alt="Floating Artifact 3"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
