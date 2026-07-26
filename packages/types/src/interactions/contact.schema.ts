import { z } from "zod";
import { baseSchema } from "../base.schema";
import { baseInteractionSchema } from "./baseInteraction.schema";



const contactSchema = baseSchema.extend({
    ...baseInteractionSchema
        .omit({ projectDetails: true })
        .extend({
            message: z.string({ error: "Message is required" })
                .trim()
                .min(1, "Message is required")
                .min(20, "Please provide a bit more detail (at least 20 characters)"),
        }).shape // fullname, companyName, email, phone, message, status
})

export type ContactSchemaType = z.infer<typeof contactSchema>

export const createContactSchema = contactSchema.omit({
    id: true,
    created_at: true,
    status: true
});

export type createContactSchemaType = z.infer<typeof createContactSchema>

export default contactSchema
