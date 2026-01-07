import sponsorImage from "@/assets/images/sponsors-dtcsi.svg";
import ebonyistateGovernment from "@/assets/images/ebonyi-state-government.svg";
import funai from "@/assets/images/funai.svg";
import ebsu from "@/assets/images/ebsu.svg";
import Image from "next/image";

const Partners = () => {
  return (
    <section>
      <h2 className="text-3xl text-center md:text-4xl max-w-xl mx-auto lg:text-5xl font-bold">
        Our Partners
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-center gap-5 py-1 mt-10 md:mt-20">
        <div className="md:py-12 md:px-24 flex justify-center items-center bg-[#FFFCFC]">
          <Image
            src={sponsorImage}
            alt="Sponsor"
            className="w-[200px] h-20 object-cover"
          />
        </div>
        <div className="md:py-12 md:px-24 flex justify-center items-center bg-[#FFFCFC]">
          <Image
            src={ebonyistateGovernment}
            alt="Sponsor"
            width={100}
            className="w-[107px] h-[105px] object-cover"
          />
        </div>
        <div className="md:py-12 md:px-24 flex justify-center items-center bg-[#FFFCFC]">
          <Image
            src={funai}
            alt="Sponsor"
            width={100}
            className="w-[99px] h-[99px] object-cover"
          />
        </div>
        <div className="md:py-12 md:px-24 flex justify-center items-center bg-[#FFFCFC]">
          <Image
            src={ebsu}
            alt="Sponsor"
            width={100}
            className="w-[82px] h-[99px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
