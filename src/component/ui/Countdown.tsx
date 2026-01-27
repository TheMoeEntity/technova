"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Data } from "@/lib/constants";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(Data.CountdownDate);

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 md:gap-6 mt-8">
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-white border text-3xl md:text-4xl font-bold w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl shadow-sm">
            {String(unit.value).padStart(2, "0")}
          </div>
          <span className="text-xs md:text-sm mt-2 text-gray-500 font-medium uppercase tracking-wider">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
