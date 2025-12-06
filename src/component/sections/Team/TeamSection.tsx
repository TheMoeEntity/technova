"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  category: string;
  socials: {
    twitter?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Obinna Adum",
    role: "Founder and convener TECHNOVA",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    category: "Core Team",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "2",
    name: "Toochukwu Okoro",
    role: "Founder and CEO, Azza",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    category: "Core Team",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "3",
    name: "ENGR. Chuks Okoronkwo",
    role: "Programs Manager, TECHNOVA",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    category: "Organising",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "4",
    name: "Zebulun",
    role: "Creative director TECHNOVA",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    category: "Design",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "5",
    name: "Udu Uduma Samuel",
    role: "Partnerships and Collaborations",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    category: "Core Team",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "6",
    name: "Chioma Okonkwo",
    role: "Marketing Lead, TECHNOVA",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    category: "Marketing",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "7",
    name: "Dev Engineer",
    role: "Lead Engineer, TECHNOVA",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    category: "Engineering",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "8",
    name: "Media Producer",
    role: "Content & Video Lead",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    category: "Content & Video",
    socials: { twitter: "#", linkedin: "#" },
  },
];

const categories = [
  "All",
  "Core Team",
  "Organising",
  "Design",
  "Engineering",
  "Marketing",
  "Content & Video",
];

export default function TeamSection() {
  const [activeCategory, setActiveCategory] = useState("All");

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
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="w-24 h-24 rounded-lg object-cover shadow-md"
                  />
                </motion.div>

                {/* Member Info */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-black mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 flex-col md:flex-row flex-shrink-0">
                  <motion.a
                    href={member.socials.twitter}
                    className="p-2 rounded-full bg-[#F5F5F5] text-black"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={20} />
                  </motion.a>
                  <motion.a
                    href={member.socials.linkedin}
                    className="p-2 rounded-full bg-[#F5F5F5] text-black"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
