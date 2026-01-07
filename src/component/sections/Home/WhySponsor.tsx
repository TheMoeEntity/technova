"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const reasons = [
  {
    id: 1,
    title: "Access to Emerging Talent",
    description:
      "Connect directly with students, builders, creators, and early-career professionals shaping the future workforce.",
  },
  {
    id: 2,
    title: "Brand Visibility",
    description:
      "Position your brand at Africa's Biggest Carnival of Tech, Innovation, and Opportunity, with visibility that goes beyond banners and logos.",
  },
  {
    id: 3,
    title: "First-Mover Advantage",
    description:
      "Technova launches from an underserved region with strong youth concentration, offering partners early dominance and high brand recall.",
  },
  {
    id: 4,
    title: "Thought Leadership & Credibility",
    description:
      "Engage audiences through panels, workshops, activations, and curated experiences aligned with your organization's goals.",
  },
  {
    id: 5,
    title: "Community Trust & Long-Term Value",
    description:
      "Technova is built as a platform, not a one-off event. Partners benefit from ongoing community engagement and post-event visibility.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const WhySponsor = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 xl:py-28 px-6">
      <div className="w-full flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
        <h2 className="text-center md:text-left text-4xl lg:text-5xl font-bold text-gray-900">
          Why Sponsor Technova
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-5 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Become a Sponsor
        </motion.button>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
      >
        {reasons.map((reason) => (
          <motion.div
            key={reason.id}
            variants={itemVariants}
            className="flex flex-col items-start gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-lg">
              {reason.id}
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{reason.title}</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhySponsor;
