import { siteInfo } from "@/site-info";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const topLevelDomain: string = siteInfo.topLevelDomain;
  return [
    {
      url: topLevelDomain,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${topLevelDomain}/resume.pdf`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];
}
