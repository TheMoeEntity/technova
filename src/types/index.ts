import { StaticImageData } from "next/image";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
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
}
