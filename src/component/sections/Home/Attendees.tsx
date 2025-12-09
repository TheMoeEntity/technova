"use client";
import Image from "next/image";
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
}[] = [
  {
    title: "Developers & Designers",
    description:
      "Blockchain developers, designers, smart contract engineers, and builders.",
    color: "#FFF2ED",
    icon: iconsDev,
    border: "border border-transparent",
    hoverBorder: "hover:border-[#F85B1A]",
  },
  {
    title: "Entrepreneurs",
    description:
      "Learn trends, network, and explore the world of decentralized innovation.",
    color: "#FFFBEE",
    icon: iconsent,
    border: "border border-transparent",
    hoverBorder: "hover:border-[#FEC421]",
  },
  {
    title: "Students",
    description: "University students eager to learn blockchain technology.",
    color: "#EDFBFF",
    icon: iconStudents,
    border: "border border-transparent",
    hoverBorder: "hover:border-[#1BC2FF]",
  },
  {
    title: "Investors",
    description: "VCs, angel investors, and Web3 stakeholders across Africa.",
    color: "#EBFBF6",
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
    <section className="w-full py-8 xl:pb-28 xl:pt-16">
      <h2 className="text-center text-4xl max-w-xl mx-auto lg:text-5xl font-bold">
        Who Should Attend?
      </h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 px-4 md:px-0 mt-20 md:grid-cols-2 gap-5 md:gap-8 mx-auto max-w-5xl"
      >
        {attendeeAssets.map((asset) => {
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
              <div className="w-10 h-10">
                <Image
                  src={asset.icon || "/placeholder.svg"}
                  alt={asset.title}
                  width={40}
                  height={40}
                  className="w-full h-auto"
                />
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
