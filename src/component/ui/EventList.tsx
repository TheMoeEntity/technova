"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";

interface Event {
  title: string;
  time: string;
}

interface EventListProps {
  events: Event[];
  activeDay: string;
}

export default function EventList({ events, activeDay }: EventListProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  const bgColors = [
    { activeDay: "thursday", color: "bg-[#FFEFE8]" },
    { activeDay: "friday", color: "bg-[#FFF7DF]" },
    { activeDay: "saturday", color: "bg-[#ECFAFF]" },
  ];
  const selectedColor = bgColors.find((color) => color.activeDay === activeDay);
  return (
    <div
      className={`${selectedColor?.color} rounded-3xl p-3 md:p-8 overflow-hidden`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDay}
          className="space-y-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {events.map((event, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="flex flex-col md:flex-row md:items-center justify-between py-6 px-2 md:px-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 min-w-2 min-h-2 h-2 bg-orange-500 rounded-full mt-1"></div>
                  <h3 className="text-lg md:text-xl font-bold text-black">
                    {event.title}
                  </h3>
                </div>
                <span className="text-gray-600 pl-8 md:pl-0 font-medium whitespace-nowrap">
                  {event.time}
                </span>
              </div>
              {index < events.length - 1 && (
                <div className="h-px bg-orange-200/50 mx-4"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
