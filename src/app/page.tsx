import Hero from "@/component/sections/Home/Hero";
import About from "@/component/sections/Home/About";
import Banner from "@/component/ui/Banner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-bricolage-grotesque">
      <Hero />
      <About />
      <div className="w-full flex mt-16 overflow-hidden">
        <span className="bg-black text-2xl text-white p-3 whitespace-nowrap">
          Our Partners
        </span>
        <Banner />
      </div>
    </div>
  );
}
