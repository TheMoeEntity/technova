"use client";
import Image from "next/image";
import iconsDev from "@/assets/images/icons-dev.svg";
import iconsent from "@/assets/images/icons-ent.svg";
import iconStudents from "@/assets/images/icons-students.svg";
import iconInvestors from "@/assets/images/icons-investors.svg";
import { motion, Variants } from "framer-motion";

const attendeeAssets: {
  icon: string;
  title: string;
  description: string;
  color: string;
}[] = [
  {
    title: "Developers & Designs",
    description:
      "Blockchain developers, Product Designers, smart contract engineers, and tech builders looking to innovate.",
    color: "#FFF2ED",
    icon: iconsDev,
  },
  {
    title: "Entrepreneurs",
    description:
      "Join us for a day of learning, networking, and inspiration as we explore the latest trends and innovations in the world of blockchain and decentralized technology.",
    color: "#FFFBEE",
    icon: iconsent,
  },
  {
    title: "Students",
    description:
      "University students and young innovators eager to learn about blockchain technology.",
    color: "#EDFBFF",
    icon: iconStudents,
  },
  {
    title: "Investors",
    description:
      "VCs, angel investors, and stakeholders interested in Africa's Web3 ecosystem.",
    color: "#EBFBF6",
    icon: iconInvestors,
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
        className="grid grid-cols-1 mt-20 md:grid-cols-2 gap-8 mx-auto max-w-5xl"
      >
        {attendeeAssets.map((asset, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            style={{ backgroundColor: asset.color }}
            className="px-8 py-12 hover:shadow-md transition-shadow duration-300  rounded-2xl flex flex-col justify-center"
          >
            <div className="w-10 h-10">
              <Image
                src={asset.icon}
                alt={asset.title}
                width={40}
                height={40}
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-2xl font-bold mt-6">{asset.title}</h3>
            <p className="text-gray-600 mt-2">{asset.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Attendees;
