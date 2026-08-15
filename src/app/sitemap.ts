import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ssm-pondicherry.vercel.app",
      lastModified: new Date(),
    },
  ];
}