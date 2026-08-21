import { createPublicSupabaseClient } from "@bbl/supabase/server";
import { unstable_cache } from "next/cache";

const BUCKET = "images";

/**
 * Cached fetch for industry component images from Supabase Storage.
 * Lists all files under `products/{slug}/` and returns their public URLs.
 *
 * Slug is already '-' separated (e.g. "oil-gas", "aerospace") matching
 * the folder names in the storage bucket.
 *
 * `getPublicUrl` is synchronous — no extra HTTP requests per file.
 *
 * Tagged with "industry-components" for on-demand revalidation.
 *
 * Used by: /industries/[slug]
 */
export const fetchIndustryComponents = (slug: string) =>
    unstable_cache(
        async (): Promise<string[]> => {
            try {
                const supabase = createPublicSupabaseClient();
                const folderPath = `products/${slug}`;

                const { data, error } = await supabase.storage
                    .from(BUCKET)
                    .list(folderPath, { limit: 200, sortBy: { column: "name", order: "asc" } });

                if (error) {
                    console.error(`Failed to list industry components for "${slug}":`, error.message);
                    return [];
                }

                if (!data || data.length === 0) return [];

                // Filter out hidden/placeholder files
                const imageFiles = data.filter((file) => file.name && !file.name.startsWith("."));

                // getPublicUrl is synchronous — no extra HTTP requests
                return imageFiles.map((file) => {
                    const { data: urlData } = supabase.storage
                        .from(BUCKET)
                        .getPublicUrl(`${folderPath}/${file.name}`);
                    return urlData.publicUrl;
                });
            } catch (err) {
                console.error(`Unexpected error fetching industry components for "${slug}":`, err);
                return [];
            }
        },
        [`industry-components-${slug}`],
        { tags: ["industry-components", `industry-components-${slug}`] }
    )();
