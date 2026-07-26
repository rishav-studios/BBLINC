import { z } from "zod";
import { baseSchema, imageSchema } from "./base.schema";
import { seoSchema } from "./seo.schema";

export const industrySchema = baseSchema.extend({
    name: z.string().min(1, "Sector name is required"),
    slug: z.string().min(1, "Sector slug is required"),
    description: z.string().min(1, "Home Page description is required"),
    stats: z.array(z.object({
        value: z.string(),
        unit: z.string()
    })),
    display_order: z.number(),
    image_url: imageSchema,
    cover_image_url: imageSchema,
    seo_metadata: seoSchema
});

export type Industry = z.infer<typeof industrySchema>;

export const createIndustrySchema = industrySchema.omit({
    id: true,
    created_at: true
});

export type CreateIndustry = z.infer<typeof createIndustrySchema>;

export const updateIndustrySchema = createIndustrySchema.omit({ slug: true }).partial();

export type UpdateIndustry = z.infer<typeof updateIndustrySchema>;