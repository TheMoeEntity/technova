import { MetadataRoute } from "next";
import { Data } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  const url = Data.BASEURL;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${url}/sitemap.xml`,
  };
}
