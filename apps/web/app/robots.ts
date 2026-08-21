import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/api/",       // API routes
                    "/_next/",     // Next.js internals
                    "/admin/",     // Admin panel (future-proofing)
                ],
            },
        ],
        sitemap: "https://www.bblinc.in/sitemap.xml",
        host: "https://www.bblinc.in",
    };
}
