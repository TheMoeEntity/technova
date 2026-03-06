import azza from "@/assets/images/sponsors/Azza.svg";
import wagmi from "@/assets/images/sponsors/WAGMI.svg";
import bodyStandard from "@/assets/images/sponsors/body-standard.svg";
import megatech from "@/assets/images/sponsors/megatech.svg";
import sponsor from "@/assets/images/sponsors/sponsor.svg";
import Image from "next/image";
import sponsorImage from "@/assets/images/sponsors-dtcsi.svg";
const Sponsors = () => {
  return (
    <section>
      <h2 className="text-3xl text-center md:text-4xl max-w-xl mx-auto lg:text-5xl font-bold">
        Our Sponsors
      </h2>
      <div className="grid mx-auto mb-10 max-w-7xl md:gap-y-0 gap-x-0 grid-cols-2 md:grid-cols-3 xl:md:grid-cols-5 items-center place-items-center justify-center px-3 md:px-0 py-1 mt-10 md:mt-20">
        <div className="w-full h-full md:py-16 transition-colors duration-500 hover:bg-[#FFF9EA] pr-3 md:pr-0  border-r-[#EAEAEA] border-r border-b-[#EAEAEA] md:border-b flex justify-center items-center bg-[#FFFCFC]">
          <Image
            src={sponsorImage}
            alt="Technova partner: DTCSI"
            className="w-[200px] h-20 object-cover"
          />
        </div>
        <div className="w-full h-full md:py-16 transition-colors duration-500 hover:bg-[#FFF9EA] pr-3 md:pr-0 border-r-[#EAEAEA] border-r border-b-[#EAEAEA] md:border-b flex justify-center items-center bg-[#FFFCFC]">
          <Image
            src={azza}
            alt="Technova sponsor: Azza"
            className="w-[150px] h-20 object-contain"
          />
        </div>
        <div className="md:py-12 w-full h-full md:px-8 transition-colors duration-500 hover:bg-[#FFF9EA] md:border-r-[#EAEAEA] md:border-r border-b-[#EAEAEA] md:border-b flex justify-center items-center bg-[#FFFCFC]">
          <Image
            src={wagmi}
            alt="Technova sponsor: WAGMI"
            width={150}
            className="w-[150px] h-20 object-contain"
          />
        </div>
        <div className="w-full h-full md:py-12 md:px-8 transition-colors duration-500 hover:bg-[#FFF9EA] border-r-[#EAEAEA] border-r flex border-b-[#EAEAEA] md:border-b justify-center items-center bg-[#FFFCFC]">
          <Image
            src={bodyStandard}
            alt="Technova sponsor: Body Standard"
            width={150}
            className="w-[150px] h-20 object-contain"
          />
        </div>
        <div className="w-full h-full md:py-12 md:px-8 transition-colors duration-500 hover:bg-[#FFF9EA] flex border-b-[#EAEAEA] md:border-b justify-center items-center bg-[#FFFCFC]">
          <Image
            src={sponsor}
            alt="Technova sponsor"
            width={150}
            className="w-[150px] h-20 object-contain"
          />
        </div>
        <div className="w-full h-full md:py-12 md:px-8 transition-colors duration-500 border-r-[#EAEAEA] border-r hover:bg-[#FFF9EA] flex border-b-[#EAEAEA] md:border-b justify-center items-center bg-[#FFFCFC]">
          <Image
            src={megatech}
            alt="Technova sponsor: Megatech"
            width={150}
            className="w-[150px] h-20 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
