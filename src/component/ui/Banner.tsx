"use client";
import Image from "next/image";
import sponsorImage from "@/assets/images/sponsors-dtcsi.svg";
import ebonyistateGovernment from "@/assets/images/ebonyi-state-government.svg";
import funai from "@/assets/images/funai.svg";
import ebsu from "@/assets/images/ebsu.svg";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";

const sponsors = [ebonyistateGovernment, ebsu, funai, sponsorImage];
const Banner = () => {
  const [displayText] = useState([...sponsors, ...sponsors]);
  return (
    <div className="w-full bg-[#FFF9EA] h-auto">
      <Marquee
        gradientColor="#FFF9EA"
        className="w-full"
        speed={110}
        gradientWidth={70}
        gradient={true}
      >
        <div className="flex bg-[#FFF9EA] items-center gap-5 py-1">
          {displayText.map((text, index) => (
            <div className="flex items-center gap-5 px-5 py-1" key={index}>
              <Image
                src={text}
                alt="Sponsor"
                width={100}
                className="w-[100px] h-10 md:h-[50px] object-contain"
              />
              <Star fill="#F85B1A" stroke="#F85B1A" color="#F85B1A" />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Banner;
