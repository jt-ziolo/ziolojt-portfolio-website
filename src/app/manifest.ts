import { siteInfo } from "@/site-info";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteInfo.titleDefault,
    short_name: siteInfo.titleDefault,
    description: siteInfo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#97C9DC",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
