"use client";
import Image from "next/image";
import eventStickerSpeakers from "@/assets/images/event-sticker-speakers.svg";
import eventStickerDays from "@/assets/images/event-sticker-days.svg";
import eventStickerProjects from "@/assets/images/event-sticker-projects.svg";
import eventStickerParticipants from "@/assets/images/event-sticker-participants.svg";
import { motion, Variant } from "framer-motion";

const About = () => {
  const floatingAnimation: Variant = {
    y: [0, -2, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="w-full py-16 xl:py-28 space-y-4">
      <h2 className="text-3xl text-center md:text-4xl max-w-xl mx-auto lg:text-5xl font-bold">
        About Technova - Africa&apos;s Web3 Carnival
      </h2>
      <div className="text-center max-w-3xl mx-auto relative grid grid-cols-2 gap-8 md:block">
        <div className="col-span-2 p-4 md:p-0 md:w-full">
          <p className="block w-full text-base md:text-lg leading-relaxed text-gray-600">
            TechNova Africa&apos;s Web3 Carnival is more than just an event –
            it&apos;s a movement to position Africa at the forefront of
            blockchain innovation and decentralized technology. We&apos;re
            bringing together visionaries, developers, entrepreneurs, and
            enthusiasts to explore the limitless possibilities of Web3, foster
            collaboration, and build solutions that will shape Africa&apos;s
            digital future.
          </p>
        </div>

        {/* Top Left - Speakers */}
        <motion.div
          initial={{ opacity: 0, x: -50, y: -50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-[158px] h-[100px] mx-auto md:absolute md:-left-40 md:-top-40"
        >
          <motion.div animate={floatingAnimation} className="w-full h-full">
            <Image
              src={eventStickerSpeakers}
              alt="50+ speakers"
              width={100}
              height={100}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>

        {/* Top Right - Days */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: -50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-[158px] h-[100px] mx-auto md:absolute md:-right-40 md:-top-40"
        >
          <motion.div
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, delay: 0.5 },
            }}
            className="w-full h-full"
          >
            <Image
              src={eventStickerDays}
              alt="3 Days"
              width={100}
              height={100}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>

        {/* Bottom Left - Projects */}
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-[158px] h-[100px] mx-auto md:absolute md:-left-40 md:-bottom-20"
        >
          <motion.div
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, delay: 1 },
            }}
            className="w-full h-full"
          >
            <Image
              src={eventStickerProjects}
              alt="100+ projects"
              width={100}
              height={100}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>

        {/* Bottom Right - Participants */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-[158px] h-[100px] mx-auto md:absolute md:-right-40 md:-bottom-20"
        >
          <motion.div
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, delay: 1.5 },
            }}
            className="w-full h-full"
          >
            <Image
              src={eventStickerParticipants}
              alt="3000+ participants"
              width={100}
              height={100}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
