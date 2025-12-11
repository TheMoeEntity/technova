import { TeamMember } from "@/types";
import obinna from "@/assets/images/obinna-adum.svg";
import chuksOkonkwo from "@/assets/images/chuks-okonkwo.svg";
import toochukwuOkoro from "@/assets/images/toochukwu-okoro.svg";
import zebulun from "@/assets/images/zebulun.svg";
import uduUdumaSamuel from "@/assets/images/udu-uduma.svg";
import opokeDaniel from "@/assets/images/opoke-daniel.svg";
import dannyAmara from "@/assets/images/danny-amara.svg";
import elizabethIgbinedion from "@/assets/images/elizabeth-igbinedion.svg";
import jamesEmmanuella from "@/assets/images/james-emmanuella.svg";
import nenyeKingsley from "@/assets/images/nenye-kingsley.svg";
import odinmaMmesoma from "@/assets/images/odinma-mmesoma.svg";
import victorIkem from "@/assets/images/victor-ikem.svg";
import joshuaNwankwo from "@/assets/images/joshua-nwankwo.svg";
import kamso from "@/assets/images/kamso.svg";
import moses from "@/assets/images/moses-nwigberi-profile.jpeg";

export enum Data {
  Location = "The Ecumenical Centre, Abakaliki",
  Mail = "contact@technovasummit.com",
  BASEURL = "https://technovasummit.com",
}
export const OG_Image = Data.BASEURL + "/og_image.png";
export const links = [
  {
    href: "/team",
    label: "Team",
  },
  {
    href: "/#",
    label: "Speakers",
  },
  {
    href: "/contact",
    label: "Contact Us",
  },
];

export const getInvolvedLinks = [
  {
    href: "/generate-dp",
    label: "Generate DP",
  },
  {
    href: "/#",
    label: "Become a Sponsor",
  },
  {
    href: "/speakers",
    label: "Become a Speaker",
  },
  {
    href: "/#",
    label: "Become a Volunteer",
  },
  {
    href: "/#",
    label: "Become an Exhibitor",
  },
];
export const description = `TechNova Africa's Web3 Carnival is more than just an event – it's a movement to position Africa at the forefront of blockchain innovation and decentralized technology. We're bringing together visionaries, developers, entrepreneurs, and enthusiasts to explore the limitless possibilities of Web3, foster collaboration, and build solutions that will shape Africa's digital future.`;
export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Obinna Adum",
    role: "Founder and convener TECHNOVA",
    image: obinna,
    category: "Core Team",
    socials: {
      twitter: "https://x.com/thenameisbrill",
      linkedin: "https://linkedin.com/in/adum-obinna-6aa268221",
    },
  },
  {
    id: "2",
    name: "Toochukwu Okoro",
    role: "Founder and CEO, Azza. <br /> Cofounder, TECHNOVA",
    image: toochukwuOkoro,
    category: "Core Team",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "3",
    name: "ENGR. Chuks Okoronkwo",
    role: "Programs Manager, TECHNOVA",
    image: chuksOkonkwo,
    category: "Partnership",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "4",
    name: "Zebulun",
    role: "Creative director TECHNOVA",
    image: zebulun,
    category: "Design",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "5",
    name: "Udu Uduma Samuel",
    role: "Partnerships and Collaborations",
    image: uduUdumaSamuel,
    category: "Core Team",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "6",
    name: "James Emmanuella",
    role: "Lead Designer, TECHNOVA",
    image: jamesEmmanuella,
    category: "Design",
    socials: {
      twitter: "https://x.com/the_ellajames",
      website: "https://ellajames.framer.website/",
    },
  },
  {
    id: "15",
    name: "Moses Nwigberi",
    role: "Web Developer, TECHNOVA",
    image: moses,
    category: "Engineering",
    socials: {
      website: "https://mosesnwigberi.com",
      linkedin: "https://linkedin.com/in/nwigber-moses",
    },
  },
  {
    id: "7",
    name: "Joshua Nwankwo",
    role: "Founder letsdap, Ticketing provider TECHNOVA",
    image: joshuaNwankwo,
    category: "Engineering",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "8",
    name: "Danny Amara",
    role: "SMM & Content, TECHNOVA",
    image: dannyAmara,
    category: "Media",
    socials: {
      twitter: "https://x.com/apostleofdesign",
      youtube: "https://youtube.com/@apostleofdesign",
    },
  },
  {
    id: "9",
    name: "Opoke Daniel",
    role: "Operational Manager, TECHNOVA",
    image: opokeDaniel,
    category: "Media",
    socials: {
      instagram: "https://www.instagram.com/dansparkcfr?igsh=NjBqZWI2ZjhwMGtu",
      twitter: " https://x.com/danspark_gmi?t=jzhDbXi23pVNZ3ZLHHQUeA&s=09",
    },
  },
  {
    id: "10",
    name: "Nenye Kingsley",
    role: "Content team",
    image: nenyeKingsley,
    category: "Media",
    socials: {
      twitter: "https://x.com/NenyeKingsley?t=yPhzvPuI4AlMyBkdYhgyBg&s=09",
      linkedin:
        "https://www.linkedin.com/in/vexahlia-kingsley-409315244?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
  {
    id: "11",
    name: "Victor Ikem",
    role: "Visual Storyteller/ Media strategist",
    image: victorIkem,
    category: "Media",
    socials: {
      facebook: "https://www.facebook.com/share/1G21c8cYDF/",
      instagram:
        "#https://www.instagram.com/victorikem_?igsh=MWsxOWl4aTB4NWdzNQ==",
    },
  },
  {
    id: "12",
    name: "Odinma Nmesoma",
    role: "Designer",
    image: odinmaMmesoma,
    category: "Design",
    socials: {
      twitter: "https://x.com/SmartMeso?t=jF_2wL2P712wOpTFzw74Tg&s=09",
      behance: "https://www.behance.net/SmartNmeso",
    },
  },
  {
    id: "13",
    name: "Elizabeth Igbinedion",
    role: "Content team",
    image: elizabethIgbinedion,
    category: "Media",
    socials: {
      instagram: "https://www.instagram.com/liz_igbinedion",
    },
  },
  {
    id: "14",
    name: "Kamso",
    role: "Content team",
    image: kamso,
    category: "Media",
    socials: {
      tiktok: "https://www.tiktok.com/@thenameiskamso_?_r=1&_t=ZS-921x1ULbzrV",
      twitter: "https://x.com/thenameiskamso?s=21",
    },
  },
];

export const categories = [
  "All",
  "Core Team",

  "Design",
  "Engineering",
  "Marketing",
  "Media",
];
