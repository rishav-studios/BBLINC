import { createPublicSupabaseClient } from "@bbl/supabase/server";
import { unstable_cache } from "next/cache";

const BUCKET = "images";

/**
 * Cached fetch for material component images from Supabase Storage.
 * Lists all files under `products/materials/{slug}/` and returns their
 * public URLs.
 *
 * `getPublicUrl` is a synchronous, local URL builder — it does NOT fire
 * any extra network requests.
 *
 * Tagged with "material-components" for on-demand revalidation.
 *
 * Used by: /materials/[slug]
 */
export const fetchMaterialComponents = (slug: string) =>
    unstable_cache(
        async (): Promise<string[]> => {
            try {
                const supabase = createPublicSupabaseClient();
                const folderPath = `products/materials/${slug}/`;

                const { data, error } = await supabase.storage
                    .from(BUCKET)
                    .list(folderPath, { limit: 200, sortBy: { column: "name", order: "asc" } });

                if (error) {
                    console.log("error happende", error.message)
                    console.error(`Failed to list material components for "${slug}":`, error.message);
                    return [];
                }


                if (!data || data.length === 0) return [];

                // Filter out placeholder/folder files (Supabase may return a .emptyFolderPlaceholder)
                const imageFiles = data.filter(
                    (file) => file.name && !file.name.startsWith(".")
                );

                // getPublicUrl is synchronous — no extra HTTP requests
                return imageFiles.map((file) => {
                    const { data: urlData } = supabase.storage
                        .from(BUCKET)
                        .getPublicUrl(`${folderPath}/${file.name}`);
                    return urlData.publicUrl;
                });
            } catch (err) {
                console.error(`Unexpected error fetching material components for "${slug}":`, err);
                return [];
            }
        },
        [`material-components-${slug}`],
        { tags: ["material-components", `material-components-${slug}`] }
    )();
