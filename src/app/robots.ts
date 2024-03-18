import { siteInfo } from "@/site-info";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${siteInfo.topLevelDomain}/sitemap.xml`,
  };
}
