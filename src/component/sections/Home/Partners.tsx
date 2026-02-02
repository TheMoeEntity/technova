import sponsorImage from "@/assets/images/sponsors-dtcsi.svg";
import ebonyistateGovernment from "@/assets/images/ebonyi-state-government.svg";
import funai from "@/assets/images/funai.svg";
import ebsu from "@/assets/images/ebsu.svg";
import womeninDeFi from "@/assets/images/women_in_DeFi.jpeg";
import healthscienceuniversity from "@/assets/images/university-of-health-sciences-uburu.jpg";
import Image from "next/image";

const Partners = () => {
  return (
    <section>
      <h2 className="text-3xl text-center md:text-4xl max-w-xl mx-auto lg:text-5xl font-bold">
        Our Partners
      </h2>
      <div className="grid mx-auto mb-10 max-w-6xl gap-y-4 gap-x-0 grid-cols-2 md:grid-cols-3 xl:md:grid-cols-6 items-center place-items-center justify-center px-3 md:px-0 py-1 mt-10 md:mt-20">
        <div className="w-full h-full md:py-16 transition-colors duration-500 hover:bg-[#FFF9EA] pr-3 md:pr-0  border-r-[#EAEAEA] border-r flex justify-center items-center bg-[#FFFCFC]">
          <Image
            src={sponsorImage}
            alt="DTCSI Sponsor"
            className="w-[200px] h-20 object-cover"
          />
        </div>
        <div className="md:py-12 w-full h-full md:px-8 transition-colors duration-500 hover:bg-[#FFF9EA] md:border-r-[#EAEAEA] md:border-r flex justify-center items-center bg-[#FFFCFC]">
          <Image
            src={ebonyistateGovernment}
            alt="Ebonyi State Government"
            width={100}
            className="w-[107px] h-[105px] object-cover"
          />
        </div>
        <div className="w-full h-full md:py-12 md:px-8 transition-colors duration-500 hover:bg-[#FFF9EA] border-r-[#EAEAEA] border-r flex justify-center items-center bg-[#FFFCFC]">
          <Image
            src={funai}
            alt="FUNAI"
            width={100}
            className="w-[99px] h-[99px] object-cover"
          />
        </div>
        <div className="w-full h-full md:py-12 md:px-8 transition-colors duration-500 border-r-[#EAEAEA] border-r hover:bg-[#FFF9EA] flex justify-center items-center bg-[#FFFCFC]">
          <Image
            src={ebsu}
            alt="EBSU"
            width={100}
            className="w-[82px] h-[99px] object-cover"
          />
        </div>
        <div className="w-full border-r-[#EAEAEA] border-r h-full md:py-12 md:px-8 transition-colors duration-500 hover:bg-[#FFF9EA] flex justify-center items-center bg-[#FFFCFC]">
          <Image
            src={healthscienceuniversity}
            alt="University of Health Sciences"
            width={100}
            className="w-[100px] h-[100px] object-cover"
          />
        </div>
        <div className="w-full h-full md:py-3 md:px-3 transition-colors duration-500 hover:bg-[#FFF9EA] flex justify-center items-center bg-[#FFFCFC]">
          <Image
            src={womeninDeFi}
            alt="Women in DeFi"
            width={100}
            className="w-[200px] h-[200px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
