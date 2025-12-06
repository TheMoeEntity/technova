import Image from "next/image";
import eventStickerSpeakers from "@/assets/images/event-sticker-speakers.svg";
import eventStickerDays from "@/assets/images/event-sticker-days.svg";
import eventStickerProjects from "@/assets/images/event-sticker-projects.svg";
import eventStickerParticipants from "@/assets/images/event-sticker-participants.svg";
const About = () => {
  return (
    <section className="w-full py-16 xl:py-28 space-y-8">
      <h2 className="text-3xl text-center md:text-4xl max-w-xl mx-auto lg:text-5xl font-bold">
        About Technova - Africa&apos;s Web3 Carnival
      </h2>
      <div className="text-center max-w-3xl mx-auto relative">
        <div className="w-[158px] h-[100px] absolute -left-40 -top-40">
          <Image
            src={eventStickerSpeakers}
            alt="50+ speakers"
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </div>
        <div className="w-[158px] h-[100px] absolute -right-40 -top-40">
          <Image
            src={eventStickerDays}
            alt="3 Days"
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </div>
        <div className="w-[158px] h-[100px] absolute -left-40 -bottom-20">
          <Image
            src={eventStickerProjects}
            alt="100+ projects"
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </div>
        <div className="w-[158px] h-[100px] absolute -right-40 -bottom-20">
          <Image
            src={eventStickerParticipants}
            alt="3000+ participants"
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </div>
        TechNova Africa&apos;s Web3 Carnival is more than just an event –
        it&apos;s a movement to position Africa at the forefront of blockchain
        innovation and decentralized technology. We&apos;re bringing together
        visionaries, developers, entrepreneurs, and enthusiasts to explore the
        limitless possibilities of Web3, foster collaboration, and build
        solutions that will shape Africa&apos;s digital future.
      </div>
    </section>
  );
};

export default About;
