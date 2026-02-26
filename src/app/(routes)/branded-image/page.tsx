import scrapbook from "@/assets/images/scrapbook-dp.png";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Branded Image | TechNova Africa Web3 Carnival 2026",
  description:
    "Create a Technova branded image to announce your attendance at TechNova Africa's Web3 Carnival, Mar 12-14 2026.",
};

const BrandedImage = () => {
  return (
    <div className="flex flex-col md:min-h-screen pb-16 md:pb-0 bg-[#F5F5F5] font-bricolage-grotesque">
      {/* <div className="flex flex-col items-center gap-6 justify-center pt-32 px-4 md:px-8">
        <ComingSoon />
      </div> */}
      <div className="flex flex-col items-center gap-6 justify-center py-32 px-4 md:px-8">
        <h1 className="text-4xl max-w-3xl mx-auto text-center  xl:text-5xl font-bold">
          Generate Pictures and Show them off!
        </h1>
        <p className="max-w-2xl mx-auto text-center">
          Create a Technova branded image to announce your attendance!
        </p>
        <Link
          href="/branded-image/generate-dp"
          //   href="#"
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Generate Your DP!
        </Link>
        <div className="mx-auto mt-10 max-w-5xl">
          <Image
            src={scrapbook}
            alt="Technova Scrapbook"
            priority={true}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandedImage;
