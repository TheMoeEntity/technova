import type { Metadata } from "next";
import TeamSection from "@/component/sections/Team/TeamSection";

export const metadata: Metadata = {
  title: "Team | The TechNova Summit",
  description:
    "Meet the passionate team behind The TechNova Summit, dedicated to bringing tech innovation and Web3 opportunities to Africa.",
};

const Team = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-bricolage-grotesque">
      <div className="flex flex-col items-center gap-6 justify-center py-32 px-4 md:px-8">
        <h1 className="text-4xl xl:text-5xl font-bold">
          Meet the Team Behind Technova.
        </h1>
        <p>
          Passionate individuals dedicated to bringing Tech Innovation to Africa
        </p>
        <TeamSection />
      </div>
    </div>
  );
};

export default Team;
