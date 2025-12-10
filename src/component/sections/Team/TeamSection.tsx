"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Globe,
  TwitterIcon,
  X,
} from "lucide-react";
import { FaBehance } from "react-icons/fa";
import { PiTiktokLogoBold } from "react-icons/pi";
import Image from "next/image";
import { categories, teamMembers } from "@/lib/constants";

const getSocialIcon = (platform: string) => {
  switch (platform) {
    case "twitter":
      return <TwitterIcon size={20} />;
    case "linkedin":
      return <Linkedin size={20} />;
    case "instagram":
      return <Instagram size={20} />;
    case "facebook":
      return <Facebook size={20} />;
    case "youtube":
      return <Youtube size={20} />;
    case "tiktok":
      return <PiTiktokLogoBold size={20} />;
    case "behance":
      return <FaBehance size={20} />;
    case "website":
      return <Globe size={20} />;
    default:
      return <Globe size={20} />;
  }
};

export default function TeamSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedMember, setSelectedMember] = useState<
    (typeof teamMembers)[0] | null
  >(null);

  const filteredMembers =
    activeCategory === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.category === activeCategory);

  return (
    <div className="w-full bg-white pb-16 pt-5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          {/* Category Filter Tabs */}
          <div className="flex gap-4 py-2 flex-wrap pb-4 w-full justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "bg-transparent text-black border border-gray-300 hover:border-gray-400"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="space-y-8 md:px-24">
          <AnimatePresence mode="wait">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="flex items-center gap-8 pb-8 border-b border-gray-200 last:border-b-0"
              >
                {/* Profile Image */}
                <motion.div
                  className="shrink-0 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  layoutId={`image-${member.id}`}
                  onClick={() => setSelectedMember(member)}
                >
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="w-24 h-24 rounded-lg object-cover object-top shadow-md"
                  />
                </motion.div>

                {/* Member Info */}
                <div className="grow">
                  <h3 className="text-2xl font-bold text-black mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 flex-col md:flex-row shrink-0">
                  {Object.entries(member.socials).map(([platform, url]) => {
                    if (!url) return null;
                    return (
                      <motion.a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-[#F5F5F5] text-black"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {getSocialIcon(platform)}
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl overflow-hidden max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors z-10"
              >
                <X size={20} />
              </button>
              <motion.div
                layoutId={`image-${selectedMember.id}`}
                className="relative h-120 w-full"
              >
                <Image
                  src={selectedMember.image || "/placeholder.svg"}
                  alt={selectedMember.name}
                  fill
                  className="object-cover object-top"
                />
              </motion.div>
              <div className="px-6 py-3">
                <h3 className="text-2xl font-bold text-black mb-1">
                  {selectedMember.name}
                </h3>
                <p className="text-gray-600 mb-4">{selectedMember.role}</p>
                <div className="flex gap-4">
                  {Object.entries(selectedMember.socials).map(
                    ([platform, url]) => {
                      if (!url) return null;
                      return (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-[#F5F5F5] text-black hover:bg-gray-200 transition-colors"
                        >
                          {getSocialIcon(platform)}
                        </a>
                      );
                    }
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
