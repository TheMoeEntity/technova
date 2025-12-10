import React from "react";
import card1 from "@/assets/images/participants-card.svg";
import card2 from "@/assets/images/speakers-card.svg";
import card3 from "@/assets/images/projects-card.svg";
import card4 from "@/assets/images/timeline-card.svg";
import Image from "next/image";
const SponsorPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-bricolage-grotesque">
      <div className="flex flex-col items-center gap-6 justify-center py-32 px-4 md:px-8">
        <h1 className="text-4xl xl:text-5xl font-bold max-w-3xl mx-auto text-center">
          Get Seen, Get connected and Give back.
        </h1>
        <p>Get in touch with us, lets make TECHNOVA BIGGER & BETTER</p>
        <button className="bg-black mt-6 text-white px-6 py-2 rounded-lg">
          Become a Sponsor
        </button>

        <div className="mt-17 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Image src={card1} alt="Participants" />
          <Image src={card2} alt="Speakers" />
          <Image src={card3} alt="Projects" />
          <Image src={card4} alt="Timeline" />
        </div>
      </div>
    </div>
  );
};

export default SponsorPage;
