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
    <section className="w-full py-16 xl:py-28 space-y-4 overflow-x-hidden">
      <h2 className="text-3xl text-center md:text-4xl max-w-xl mx-auto lg:text-5xl font-bold">
        About Technova
      </h2>
      <div className="text-center max-w-5xl mx-auto  relative grid grid-cols-2 gap-8 lg:block">
        <div className="col-span-2 p-4 lg:p-0 lg:w-full">
          <p className="px-3 text-left md:text-center md:px-0 block w-full text-base lg:text-lg leading-relaxed text-gray-600">
            More than a conference, Technova is a multi-day experience designed
            to educate, inspire, and unlock real opportunities for the next
            generation of African talent. Born in Ebonyi State and built with a
            continental vision, Technova Summit brings together students,
            professionals, creators, founders, institutions, and global
            ecosystem players to explore the technologies, ideas, and skills
            shaping the future of work and innovation in Africa. Across
            immersive experiences including trade fairs, exhibitions, bootcamps,
            cultural showcases, and a flagship conference, Technova creates an
            accessible entry point into today’s most important innovation
            conversations, meeting people where they are and guiding them toward
            what’s next.
          </p>
        </div>

        {/* Top Left - Speakers */}
        {/* <motion.div
          initial={{ opacity: 0, x: -50, y: -50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-[158px] h-[100px] mx-auto lg:absolute lg:-left-36 lg:-top-36"
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
        </motion.div> */}

        {/* Top Right - Days */}
        {/* <motion.div
          initial={{ opacity: 0, x: 50, y: -50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-[158px] h-[100px] mx-auto lg:absolute lg:-right-40 lg:-top-40"
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
        </motion.div> */}

        {/* Bottom Left - Projects */}
        {/* <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-[158px] h-[100px] mx-auto lg:absolute lg:-left-40 lg:-bottom-20"
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
        </motion.div> */}

        {/* Bottom Right - Participants */}
        {/* <motion.div
          initial={{ opacity: 0, x: 50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-[158px] h-[100px] mx-auto lg:absolute lg:-right-40 lg:-bottom-20"
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
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;
