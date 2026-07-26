import { z } from "zod";
import { baseSchema } from "../base.schema";
import { baseInteractionSchema } from "./baseInteraction.schema";

export const Industries = {
    // Initial Stages
    aerospace: "aerospace",
    automobile: "automobile",
    hvac: "hvac",
    agriculture: "agriculture",
    medical: "medical",
    oil_gas: "oil & gas",
    chemical: "chemical",
    marine: "marine",
    other: "other",
} as const;


const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const fileUploadSchema = z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
        message: "File size must be less than 10MB",
    })
    .refine(
        (file) => {
            // 1a. Check standard MIME types (reliable for images/PDFs)
            if (file.type.startsWith("image/") || file.type === "application/pdf") {
                return true;
            }

            // 1b. Fallback check for CAD file extensions (browsers suck at CAD MIME types)
            const fileName = file.name.toLowerCase();
            const validCadExtensions = [".dwg", ".step", ".stp", ".dxf"]; // added DXF as a bonus, very common

            return validCadExtensions.some((ext) => fileName.endsWith(ext));
        },
        {
            message: "Only Images, PDFs, DWG, DXF, and STEP files are allowed",
        }
    );

export const quoteSchema = baseSchema.extend({
    ...baseInteractionSchema.shape, // fullname, companyName, email, phone, projectDetails, status
    quantity: z
        .number({ error: "Quantity is required" })
        .positive("Quantity must be a positive number"),
    expectedTime: z
        .number({ error: "Expected time is required" })
        .positive("Expected time must be a positive number"),
    industry: z.enum(Industries),
    drawing: z.union([
        fileUploadSchema,
        z.string().min(1, "Drawing URL cannot be empty")
    ])
        .optional(),
})

export type QuoteSchemaType = z.infer<typeof quoteSchema>

export const createQuoteSchema = quoteSchema.omit({
    id: true,
    created_at: true,
    status: true,
    drawing: true
}).extend({
    drawing: fileUploadSchema.optional()
});

export type createQuoteSchemaType = z.infer<typeof createQuoteSchema>