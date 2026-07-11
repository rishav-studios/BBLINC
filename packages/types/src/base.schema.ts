import { z } from "zod"

export const baseSchema = z.object({
    id: z.uuidv7(),
    createdAt: z.string(),
    updatedAt: z.string(),
})

export type baseSchemaType = z.infer<typeof baseSchema>