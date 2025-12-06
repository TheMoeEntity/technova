import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import artifact from "@/assets/images/artifact-1.svg";
import artifact2 from "@/assets/images/artifact-2.svg";
import artifact3 from "@/assets/images/artifact-3.svg";

const Hero = () => {
  return (
    <section className="bg-[#FFF9EA] flex-col min-h-[700px] overflow-y-hidden w-full flex items-center py-28">
      <h1 className="text-3xl text-center md:text-4xl max-w-3xl mx-auto lg:text-5xl xl:text-[65px] font-bold">
        Africa&apos;s Biggest Web3 Carnival of Innovation
      </h1>
      <div className="w-fit text-sm mt-5 flex justify-center gap-5 items-center">
        <div className="flex border rounded-4xl border-gray-200 px-4 py-2 items-center gap-2">
          <Calendar />
          <span>March 12th-14th, 2026</span>
        </div>
        <div className="flex border rounded-4xl border-gray-200 px-4 py-2 items-center gap-2">
          <MapPin />
          <span>The Ecumenical Centre, Abakaliki</span>
        </div>
      </div>
      <div className="-mt-5 h-full relative flex w-full justify-center">
        <div className="absolute translate-y-1/4 flex items-end left-[20%] xl:w-[500px] h-[350px] ">
          <Image
            src={artifact}
            alt="Artifact 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-[28%] xl:w-[650px] h-[450px]">
          <Image
            src={artifact2}
            alt="Artifact 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute  flex items-end translate-y-[50%] right-[17%] xl:w-[350px] h-[300px] ">
          <Image
            src={artifact3}
            alt="Artifact 3"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
