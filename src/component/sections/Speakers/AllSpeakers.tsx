"use client";

import { motion, Variants } from "framer-motion";
import SpeakerCard from "@/component/ui/SpeakerCard";
import { speakers } from "@/lib/speakers-data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const AllSpeakers = () => {
  return (
    <section className="w-full mt-16 max-w-5xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 sm:grid-cols-2 items-stretch lg:grid-cols-3 gap-3 md:gap-6"
      >
        {speakers.map((speaker, key) => (
          <motion.div key={`${speaker.id}-${key}`} variants={itemVariants}>
            <SpeakerCard {...speaker} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AllSpeakers;
