import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ssm_builders_and_enterprises.com",
      lastModified: new Date(),
    },
  ];
}