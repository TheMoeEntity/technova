import { StaticImageData } from "next/image";

export interface Speaker {
  id: string;
  name: string;
  role: string;
  email?: string;
  position?: "object-top" | "object-bottom" | "object-center";
  image: string | StaticImageData;
  category:
    | "All"
    | "Design"
    | "Core Team"
    | "Marketing"
    | "Engineering"
    | "Partnership"
    | "Media";
  socials: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    behance?: string;
    tiktok?: string;
    youtube?: string;
    facebook?: string;
    website?: string;
  };
  bio?: string;
}
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email?: string;
  image: string | StaticImageData;
  category:
    | "All"
    | "Design"
    | "Core Team"
    | "Marketing"
    | "Engineering"
    | "Partnership"
    | "Media";
  socials: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    behance?: string;
    tiktok?: string;
    youtube?: string;
    facebook?: string;
    website?: string;
  };
  bio?: string;
}
