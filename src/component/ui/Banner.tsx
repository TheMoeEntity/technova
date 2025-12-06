"use client";
import Image from "next/image";
import sponsorImage from "@/assets/images/sponsors-dtcsi.svg";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";

const sponsorComponent = (
  <div className="flex items-center gap-5">
    <Image
      src={sponsorImage}
      alt="DTCSI"
      width={100}
      className="w-[100px] h-10 md:h-[100px]"
    />
    <Star fill="#F85B1A" stroke="#F85B1A" color="#F85B1A" />
  </div>
);
const Banner = () => {
  const [displayText] = useState([
    ...Array(12).fill(sponsorComponent),
    ...Array(12).fill(sponsorComponent),
  ]);
  return (
    <div className="w-full bg-[#FFF9EA] h-auto">
      <Marquee
        gradientColor="#f9f0d9"
        className="w-full"
        speed={110}
        gradientWidth={70}
        gradient={true}
      >
        <div className="flex bg-[#FFF9EA] flex-wrap md:flex-nowrap justify-center items-center gap-5 py-3">
          {displayText.map((text, index) => (
            <div key={index} className="px-5">
              {text}
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Banner;
