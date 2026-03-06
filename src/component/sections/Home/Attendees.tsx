"use client";
import iconsDev from "@/assets/images/icons-dev.svg";
import iconsent from "@/assets/images/icons-ent.svg";
import iconStudents from "@/assets/images/icons-students.svg";
import iconInvestors from "@/assets/images/icons-investors.svg";
import { motion, type Variants } from "framer-motion";

const attendeeAssets: {
  icon: string;
  title: string;
  description: string;
  color: string;
  border: string;
  hoverBorder: string;
  iconColor: string;
}[] = [
  {
    title: "Technology & Innovation",
    description:
      "Emerging technologies, digital tools, software, AI, and Web3 explained clearly and practically.",
    color: "#FFF2ED",
    iconColor: "#F85B1A",
    icon: iconsDev,
    border: "border border-transparent",
    hoverBorder: "hover:border-[#F85B1A]",
  },
  {
    title: "Markets, Finance & Digital Assets",
    description:
      "Fintech, digital markets, financial literacy, and evolving economic opportunities.",
    color: "#FFFBEE",
    iconColor: "#FEC421",
    icon: iconsent,
    border: "border border-transparent",
    hoverBorder: "hover:border-[#FEC421]",
  },
  {
    title: "Law, Policy & Trust",
    description:
      "Regulation, compliance, intellectual property, and the legal systems that support sustainable innovation.",
    color: "#EDFBFF",
    iconColor: "#1BC2FF",
    icon: iconStudents,
    border: "border border-transparent",
    hoverBorder: "hover:border-[#1BC2FF]",
  },
  {
    title: "Creators, Media & Community",
    description:
      "Storytelling, branding, digital creativity, and community driven economies.",
    color: "#EBFBF6",
    iconColor: "#00CE86",
    icon: iconInvestors,
    border: "border border-transparent",
    hoverBorder: "hover:border-[#00CE86]",
  },
];

const Attendees = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
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

  return (
    <section className="w-full py-24 xl:pb-28 xl:pt-16 bg-[#FFFCF5]">
      <h2 className="text-center text-4xl max-w-xl mx-auto lg:text-5xl font-bold">
        What we Explore
      </h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 px-4 md:px-0 mt-20 md:grid-cols-2 gap-5 md:gap-8 mx-auto max-w-5xl"
      >
        {attendeeAssets.map((asset, index) => {
          return (
            <motion.div
              key={asset.hoverBorder}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={cardVariants}
              style={{ backgroundColor: asset.color }}
              className={`
        px-8 py-12 rounded-2xl transition-all duration-300
        ${asset.border}
        ${asset.hoverBorder}
      `}
            >
              <div
                style={{ backgroundColor: asset.iconColor }}
                className="w-10 h-10 text-lg flex justify-center items-center rounded-full text-white"
              >
                {index + 1}
              </div>

              <h3 className="text-2xl font-bold mt-6">{asset.title}</h3>
              <p className="text-gray-600 mt-2">{asset.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Attendees;
