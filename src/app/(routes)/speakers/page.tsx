import type { Metadata } from "next";
import AllSpeakers from "@/component/sections/Speakers/AllSpeakers";

export const metadata: Metadata = {
  title: "Speakers | The TechNova Summit",
  description:
    "Meet the brilliant minds shaping the future of technology at The TechNova Summit. Discover our lineup of expert speakers, founders, and innovators.",
};

const Speakers = () => {
  return (
    <div className="flex flex-col md:min-h-screen pb-16 md:pb-0 bg-[#FFF9EA] font-bricolage-grotesque">
      <div className="flex flex-col items-center gap-6 justify-center py-32 px-4 md:px-8">
        <h1 className="text-4xl xl:text-5xl font-bold">Meet the Speakers</h1>
        <p className="max-w-2xl mx-auto text-center">
          We are bringing together builders, operators, founders, and innovators
          shaping the future of technology. Our speakers are not just experts.
          They are doers!
        </p>
        <AllSpeakers />
      </div>
    </div>
  );
};

export default Speakers;
