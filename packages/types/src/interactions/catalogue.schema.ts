import { z } from "zod";
import { baseSchema, emailSchema, phoneNumberSchema } from "../base.schema";

const catalogueLeadSchema = baseSchema.extend({
    fullName: z
        .string({ error: "Full Name is required" })
        .trim()
        .min(1, "Full Name is required")
        .min(2, "Full Name must be at least 2 characters long")
        .max(50, "Full Name is too long"),

    email: emailSchema,
    phone: phoneNumberSchema,
});

export type CatalogueLeadSchemaType = z.infer<typeof catalogueLeadSchema>;

export const createCatalogueLeadSchema = catalogueLeadSchema.omit({
    id: true,
    created_at: true,
});

export type CreateCatalogueLeadInput = z.infer<typeof createCatalogueLeadSchema>;

export default catalogueLeadSchema;
