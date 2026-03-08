import type { Metadata } from "next";
import GenerateDPSection from "@/component/sections/GenerateDP/GenerateDPSection";

export const metadata: Metadata = {
  title: "Generate DP | The TechNova Summit",
  description:
    "Generate your official TechNova Summit display picture and show off your participation in Africa's premier tech event.",
};

const GenerateDP = () => {
  return (
    <div className="flex flex-col md:min-h-screen md:pb-0 bg-[#F5F5F5] font-bricolage-grotesque">
      <div className="flex flex-col items-center gap-6 justify-center py-16 px-4 md:px-8">
        <GenerateDPSection />
      </div>
    </div>
  );
};

export default GenerateDP;
