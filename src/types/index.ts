import { StaticImageData } from "next/image";
// ─── Types ────────────────────────────────────────────────────────────────────
export type Step = 1 | 2 | 3;

export interface StyleConfig {
  id: number;
  label: string;
  thumb: string;
  frame: string;
  photoRect: { x: number; y: number; w: number; h: number };
  nameFill: string;
  profFill: string;
  circular: boolean;
}

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
