"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { ChevronUp } from "lucide-react";

export interface Category {
  id: number;
  title: string;
  description: string;
  image?: StaticImageData | string;
  bgColor: string;
  illustration: string;
}

interface CategoryCardProps {
  category: Category;
  isHovered: boolean;
  onHover: () => void;
  onHoverEnd: () => void;
}

export function CategoryCard({
  category,
  isHovered,
  onHover,
  onHoverEnd,
}: CategoryCardProps) {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const shouldShowDescription = isHovered || isMobileExpanded;

  const handleMouseEnter = () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      onHover();
    }
  };

  const handleMouseLeave = () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      onHoverEnd();
    }
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative h-64 overflow-hidden rounded-3xl shadow-lg cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Colored background with illustration */}
      <div
        className={`${category.bgColor} absolute inset-0 flex items-center justify-center`}
      >
        <div className="text-6xl">
          {category.image ? (
            <Image
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover"
            />
          ) : (
            category.illustration
          )}
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl flex flex-col p-8"
        animate={{
          height: shouldShowDescription ? "80%" : "30%",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Title always visible */}
        <div className="flex items-center justify-between w-full">
          <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
          <button
            className="md:hidden p-1 rounded-full hover:bg-gray-100 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileExpanded(!isMobileExpanded);
            }}
          >
            <ChevronUp
              className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                isMobileExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Description appears when sliding up */}
        <motion.p
          className="text-sm text-gray-600 leading-relaxed mt-1"
          animate={{
            opacity: shouldShowDescription ? 1 : 0,
          }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          {category.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
