import { createPublicSupabaseClient } from "@bbl/supabase/server";
import { Industry } from "@bbl/types";
import { unstable_cache } from "next/cache";

/**
 * Cached fetch for all sectors from Supabase.
 * Tagged with "sectors" for on-demand revalidation from the admin panel.
 *
 * Used by: home page, /sectors page, /sectors/[slug], footer (via layout).
 */
export const fetchAllIndustries = unstable_cache(
    async (): Promise<Industry[]> => {
        try {
            const supabase = createPublicSupabaseClient();

            const { data, error } = await supabase
                .from("industries")
                .select("*")
                .order("display_order", { ascending: true });

            if (error) {
                console.error("Failed to fetch industries:", error.message);
                return [];
            }

            return (data as Industry[]) ?? [];
        } catch (err) {
            console.error("Unexpected error fetching industries:", err);
            return [];
        }
    },
    ["all-industries"],
    { tags: ["industries"] }
);