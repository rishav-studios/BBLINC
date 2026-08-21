"use server"

import { createServerSupabaseClient } from "@bbl/supabase/server";
import { createCatalogueLeadSchema } from "@bbl/types";

const CATALOGUE_BUCKET = "catalogue";
const CATALOGUE_FILE_PATH = "BBLINC_Product_Catalogue.pdf";
// Signed URL expires in 1 hour — enough time for the user to download
const SIGNED_URL_EXPIRES_IN = 60 * 60;

type SubmitCatalogueDownloadResult =
    | { success: true; downloadUrl: string }
    | { success: false; error: string };

export async function submitCatalogueDownload(
    rawData: unknown
): Promise<SubmitCatalogueDownloadResult> {
    // 1. Validate input
    const parsed = createCatalogueLeadSchema.safeParse(rawData);
    if (!parsed.success) {
        return { success: false, error: "Invalid form data. Please check your inputs." };
    }

    const { fullName, email, phone } = parsed.data;

    const supabase = await createServerSupabaseClient();

    // 2. Save lead to catalogue_leads table
    const { error: dbError } = await supabase
        .from("catalogue_leads")
        .insert({ fullName, email, phone });

    if (dbError) {
        console.error("Failed to insert catalogue lead:", dbError.message);
        // Non-blocking: still let the user download even if the DB write fails
        // (avoids punishing the user for a backend issue)
    }

    // 3. Create a signed download URL
    const { data: signedData, error: storageError } = await supabase.storage
        .from(CATALOGUE_BUCKET)
        .createSignedUrl(CATALOGUE_FILE_PATH, SIGNED_URL_EXPIRES_IN, {
            download: true, // Forces browser to download rather than preview
        });

    if (storageError || !signedData?.signedUrl) {
        console.error("Failed to create signed URL:", storageError?.message);
        return { success: false, error: "Could not generate download link. Please try again." };
    }

    return { success: true, downloadUrl: signedData.signedUrl };
}