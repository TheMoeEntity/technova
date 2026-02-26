import GenerateDPSection from "@/component/sections/GenerateDP/GenerateDPSection";
import scrapbook from "@/assets/images/scrapbook.svg";
import Image from "next/image";
import ComingSoon from "@/component/ui/ComingSoon";

export const metadata = {
  title: "Generate DP | TechNova Africa Web3 Carnival 2026",
  description:
    "Create a Technova branded image to announce your attendance at TechNova Africa's Web3 Carnival, Mar 12-14 2026.",
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
