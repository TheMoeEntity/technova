import Hero from "@/component/sections/Home/Hero";
import About from "@/component/sections/Home/About";
import Banner from "@/component/ui/Banner";
import Attendees from "@/component/sections/Home/Attendees";
import Agenda from "@/component/sections/Home/Agenda";
import FAQSection from "@/component/sections/Home/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-bricolage-grotesque">
      <Hero />
      <About />
      <div className="w-full flex my-8 md:mt-16 overflow-hidden">
        <span className="bg-black h-fit flex flex-col items-center justify-center md:h-auto text-lg md:text-2xl text-white py-4.5 px-3 md:px-6 whitespace-nowrap w-fit">
          Our Partners
        </span>
        <div className="flex-1 w-full overflow-hidden">
          <Banner />
        </div>
      </div>
      <Attendees />
      <Agenda />
      <FAQSection />
    </div>
  );
}
