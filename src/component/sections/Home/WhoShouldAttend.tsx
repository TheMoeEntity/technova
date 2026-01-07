"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Category, CategoryCard } from "@/component/ui/CategoryCard";
import designersndevelopers from "@/assets/images/designers_n_developers.svg";
import entrepreneursfounders from "@/assets/images/entrepreneurs.svg";
import studentsearlycareer from "@/assets/images/students_.svg";
import investorspartners from "@/assets/images/investors_n_partners.svg";
import creatorsbuilders from "@/assets/images/creators.svg";
import policymakersinstitutions from "@/assets/images/policy_makers.svg";

const categories: Category[] = [
  {
    id: 1,
    title: "Designers & Developers",
    description:
      "Software engineers, blockchain developers, product designers, brand designers, and builders shaping the next generation of technology.",
    bgColor: "bg-blue-100",
    illustration: "👨‍💻",
    image: designersndevelopers,
  },
  {
    id: 2,
    title: "Entrepreneurs & Founders",
    description:
      "Startup founders, business owners, and innovators exploring new markets, digital tools, and decentralized opportunities.",
    bgColor: "bg-pink-100",
    illustration: "🤝",
    image: entrepreneursfounders,
  },
  {
    id: 3,
    title: "Students & Early Career",
    description:
      "University students, NYSC members, and young professionals eager to learn, grow skills, and connect with the future of tech.",
    bgColor: "bg-green-100",
    illustration: "📚",
    image: studentsearlycareer,
  },
  {
    id: 4,
    title: "Investors & Partners",
    description:
      "VCs, angel investors, accelerators, ecosystem leads, and partners supporting innovation across Africa.",
    bgColor: "bg-green-100",
    illustration: "💰",
    image: investorspartners,
  },
  {
    id: 5,
    title: "Creators & Builders",

    description:
      "Content creators, media professionals, storytellers, and community leaders building influence in the digital economy.",
    bgColor: "bg-purple-100",
    illustration: "🎨",
    image: creatorsbuilders,
  },
  {
    id: 6,
    title: "Policy Makers & Institutions",
    description:
      "Government stakeholders, legal professionals, and regulators interested in understanding technology, policy, and trust in a digital-first world.",
    bgColor: "bg-blue-100",
    illustration: "🏛️",
    image: policymakersinstitutions,
  },
];

export function WhoShouldAttend() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="bg-[#FAFAFA] w-full">
      <div className="max-w-5xl mx-auto py-8 xl:pb-28 xl:pt-16">
        <h2 className="text-center text-4xl mb-10 md:mb-16 max-w-xl mx-auto lg:text-5xl font-bold">
          Who Should Attend
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isHovered={hoveredId === category.id}
                onHover={() => setHoveredId(category.id)}
                onHoverEnd={() => setHoveredId(null)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
