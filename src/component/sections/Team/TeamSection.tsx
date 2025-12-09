"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Globe,
  TwitterIcon,
} from "lucide-react";
import { FaBehance } from "react-icons/fa";
import { PiTiktokLogoBold } from "react-icons/pi";
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
    instagram?: string;
    behance?: string;
    tiktok?: string;
    youtube?: string;
    facebook?: string;
    website?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Obinna Adum",
    role: "Founder and convener TECHNOVA",
    image: obinna,
    category: "Core Team",
    socials: {
      twitter: "X.com/thenameisbrill",
      linkedin: "https://linkedin.com/in/adum-obinna-6aa268221",
    },
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
    socials: {
      twitter: "https://x.com/the_ellajames",
      website: "https://ellajames.framer.website/",
    },
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
    socials: {
      twitter: "https://x.com/apostleofdesign",
      youtube: "https://youtube.com/@apostleofdesign",
    },
  },
  {
    id: "9",
    name: "Opoke Daniel",
    role: "Operational Manager, TECHNOVA",
    image: opokeDaniel,
    category: "Content & Video",
    socials: {
      instagram: "https://www.instagram.com/dansparkcfr?igsh=NjBqZWI2ZjhwMGtu",
      twitter: " https://x.com/danspark_gmi?t=jzhDbXi23pVNZ3ZLHHQUeA&s=09",
    },
  },
  {
    id: "10",
    name: "Nenye Kingsley",
    role: "Content team",
    image: nenyeKingsley,
    category: "Content & Video",
    socials: {
      twitter: "https://x.com/NenyeKingsley?t=yPhzvPuI4AlMyBkdYhgyBg&s=09",
      linkedin:
        "https://www.linkedin.com/in/vexahlia-kingsley-409315244?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
  {
    id: "11",
    name: "Victor Ikem",
    role: "Visual Storyteller/ Media strategist",
    image: victorIkem,
    category: "Content & Video",
    socials: {
      facebook: "https://www.facebook.com/share/1G21c8cYDF/",
      instagram:
        "#https://www.instagram.com/victorikem_?igsh=MWsxOWl4aTB4NWdzNQ==",
    },
  },
  {
    id: "12",
    name: "Odinma Nmesoma",
    role: "Designer",
    image: odinmaMmesoma,
    category: "Design",
    socials: {
      twitter: "https://x.com/SmartMeso?t=jF_2wL2P712wOpTFzw74Tg&s=09",
      behance: "https://www.behance.net/SmartNmeso",
    },
  },
  {
    id: "13",
    name: "Elizabeth Igbinedion",
    role: "Content team",
    image: elizabethIgbinedion,
    category: "Content & Video",
    socials: {
      instagram: "https://www.instagram.com/liz_igbinedion",
    },
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
    </div>
  );
}
