"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import obinna from "@/assets/images/obinna-adum.svg";
import chuksOkonkwo from "@/assets/images/chuks-okonkwo.svg";
import toochukwuOkoro from "@/assets/images/toochukwu-okoro.svg";
import zebulun from "@/assets/images/zebulun.svg";
import uduUdumaSamuel from "@/assets/images/udu-uduma.svg";
import opokeDaniel from "@/assets/images/opoke-daniel.svg";
import dannyAmara from "@/assets/images/danny-amara.svg";
import elizabethIgbinedion from "@/assets/images/elizabeth-igbinedion.svg";
import jamesEmmanuella from "@/assets/images/james-emmanuella.svg";
import nenyeKingsley from "@/assets/images/nenye-kingsley.svg";
import odinmaMmesoma from "@/assets/images/odinma-mmesoma.svg";
import victorIkem from "@/assets/images/victor-ikem.svg";
import joshuaNwankwo from "@/assets/images/joshua-nwankwo.svg";
interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string | StaticImageData;
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
    image: obinna,
    category: "Core Team",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "2",
    name: "Toochukwu Okoro",
    role: "Founder and CEO, Azza",
    image: toochukwuOkoro,
    category: "Core Team",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "3",
    name: "ENGR. Chuks Okoronkwo",
    role: "Programs Manager, TECHNOVA",
    image: chuksOkonkwo,
    category: "Organising",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "4",
    name: "Zebulun",
    role: "Creative director TECHNOVA",
    image: zebulun,
    category: "Design",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "5",
    name: "Udu Uduma Samuel",
    role: "Partnerships and Collaborations",
    image: uduUdumaSamuel,
    category: "Core Team",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "6",
    name: "James Emmanuella",
    role: "Lead Designer, TECHNOVA",
    image: jamesEmmanuella,
    category: "Design",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "7",
    name: "Joshua Nwankwo",
    role: "Founder letsdap, Ticketing provider TECHNOVA",
    image: joshuaNwankwo,
    category: "Engineering",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "8",
    name: "Danny Amara",
    role: "SMM & Content, TECHNOVA",
    image: dannyAmara,
    category: "Content & Video",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "9",
    name: "Opoke Daniel",
    role: "Operational Manager, TECHNOVA",
    image: opokeDaniel,
    category: "Content & Video",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "10",
    name: "Nenye Kingsley",
    role: "Content team",
    image: nenyeKingsley,
    category: "Content & Video",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "11",
    name: "Victor Ikem",
    role: "Visual Storyteller/ Media strategist",
    image: nenyeKingsley,
    category: "Content & Video",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "12",
    name: "Odinma Nmesoma",
    role: "Designer",
    image: odinmaMmesoma,
    category: "Design",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "13",
    name: "Elizabeth Igbinedion",
    role: "Content team",
    image: elizabethIgbinedion,
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
