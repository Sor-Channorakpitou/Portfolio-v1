import type { MetadataRoute } from "next";
import { getAllProjects } from "@/data/projects";
import { SITE_URL as BASE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/about", "/education", "/journey"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projects = getAllProjects().map((project) => ({
    url: `${BASE_URL}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...pages, ...projects];
}
