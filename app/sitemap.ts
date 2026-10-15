import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "work/", "about/", "experience/", "contact/", ...projects.map((p) => `work/${p.slug}/`)];
  return pages.map((p) => ({ url: `${site.url}/${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
