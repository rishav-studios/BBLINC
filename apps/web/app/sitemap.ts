import type { MetadataRoute } from "next";
import { INDUSTRIES_DATA } from "@/constants/industries_data";
import { MATERIALS_DATA } from "@/constants/materials_data";

const BASE_URL = "https://www.bblinc.in";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    // ── Static routes ────────────────────────────────────────────────────────
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/quote`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/industries`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/materials`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];

    // ── Dynamic industry routes ───────────────────────────────────────────────
    const industryRoutes: MetadataRoute.Sitemap = INDUSTRIES_DATA.map((industry) => ({
        url: `${BASE_URL}/industries/${industry.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    // ── Dynamic material routes ───────────────────────────────────────────────
    const materialRoutes: MetadataRoute.Sitemap = MATERIALS_DATA.map((material) => ({
        url: `${BASE_URL}/materials/${material.id}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...industryRoutes, ...materialRoutes];
}
