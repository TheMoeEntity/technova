import Hero from "@/component/sections/Home/Hero";
import About from "@/component/sections/Home/About";
import Attendees from "@/component/sections/Home/Attendees";
import FAQSection from "@/component/sections/Home/FAQ";
// import PartnersMarquee from "@/component/sections/Home/PartnersMarquee";
import { WhoShouldAttend } from "@/component/sections/Home/WhoShouldAttend";
import Partners from "@/component/sections/Home/Partners";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-bricolage-grotesque">
      <Hero />
      <About />
      {/* <PartnersMarquee /> */}
      <Partners />
      <Attendees />
      <WhoShouldAttend />
      <FAQSection />
    </div>
  );
}
