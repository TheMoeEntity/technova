import sponsorImage from "@/assets/images/sponsors-dtcsi.svg";
import ebonyistateGovernment from "@/assets/images/ebonyi-state-government.svg";
import funai from "@/assets/images/funai.svg";
import ebsu from "@/assets/images/ebsu.svg";
import womeninDeFi from "@/assets/images/womenindefi.jpeg";
import newHiveLogo from "@/assets/images/New_Hive_Logo1.png";
import gida05 from "@/assets/images/GIDA-05.png";
import blockchain from "@/assets/images/Blockchain.png";
import ee25logo from "@/assets/images/EE25 logo.png";
import tglogo from "@/assets/images/TG-logo.svg";
import genesys from "@/assets/images/Genesys Logo H.png";
import healthscienceuniversity from "@/assets/images/university-of-health-sciences-uburu.jpg";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const partners = [
  { src: sponsorImage, alt: "DTCSI Sponsor", width: 200, height: 80 },
  {
    src: ebonyistateGovernment,
    alt: "Ebonyi State Government",
    width: 107,
    height: 105,
  },
  { src: funai, alt: "FUNAI", width: 99, height: 99 },
  { src: ebsu, alt: "EBSU", width: 82, height: 99 },
  {
    src: healthscienceuniversity,
    alt: "University of Health Sciences",
    width: 100,
    height: 100,
  },
  { src: womeninDeFi, alt: "Women in DeFi", width: 130, height: 130 },
  { src: newHiveLogo, alt: "New Hive", width: 100, height: 100 },
  { src: gida05, alt: "GIDA", width: 140, height: 140 },
  {
    src: blockchain,
    alt: "Blockchain University of Nigeria",
    width: 200,
    height: 40,
  },
  { src: ee25logo, alt: "EE '25", width: 120, height: 120 },
  { src: tglogo, alt: "The Garage", width: 150, height: 100 },
  { src: genesys, alt: "Genesys", width: 170, height: 40 },
];

const PartnersMarquee = () => {
  return (
    <section className="py-16 overflow-hidden">
      <h2 className="text-3xl text-center md:text-4xl max-w-xl mx-auto lg:text-5xl font-bold mb-12">
        Our Partners
      </h2>

      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-white to-transparent" />

        <Marquee speed={160} gradient={false} pauseOnHover className="py-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="mx-1 flex items-center justify-center h-32 w-48 border-r border-[#EAEAEA] bg-[#FFFCFC] hover:bg-[#FFF9EA] transition-colors duration-500 px-1"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="object-contain max-w-full"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default PartnersMarquee;
