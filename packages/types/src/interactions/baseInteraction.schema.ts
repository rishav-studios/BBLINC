import { z } from "zod";
export const QuoteStatus = {
    // Initial Stages
    NEW: "NEW",                               // Just landed in the admin panel
    REVIEWING_SPECS: "REVIEWING_SPECS",       // Engineers/Estimators are checking feasibility & CAD files

    // Interaction Stages
    AWAITING_CLIENT: "AWAITING_CLIENT",       // Admin requested more info (e.g., tolerances, alloy grade)
    QUOTE_SENT: "QUOTE_SENT",                 // Pricing and lead time sent to the prospect
    NEGOTIATING: "NEGOTIATING",               // Back and forth on volume discounts or delivery dates

    // Final Success States
    ORDER_WON: "ORDER_WON",                   // Client approved the quote, moved to production

    // Final Closed/Lost States
    LOST_TO_COMPETITOR: "LOST_TO_COMPETITOR", // Client went elsewhere (good for analytics)
    LOST_PRICING: "LOST_PRICING",             // Too expensive for the client
    REJECTED_CAPACITY: "REJECTED_CAPACITY",   // You can't meet the lead time or volume
    REJECTED_TECH: "REJECTED_TECH",           // Impossible tolerances or wrong material (e.g., they want steel, not brass)
    SPAM: "SPAM",                             // Standard web form junk
} as const;
export const baseInteractionSchema = z.object({
    fullName: z
        .string({ error: "Full Name is required" })
        .trim()
        .min(1, "Full Name is required")
        .min(2, "Full Name must be at least 2 characters long")
        .max(50, "Full Name is too long"),

    companyName: z
        .string()
        .trim()
        .optional(),

    email: z
        .email("Please enter a valid email address"),
    phone: z
        .string({ error: "Phone Number is required" })
        .trim()
        .min(1, "Phone Number is required")
        .regex(
            /^\+?[0-9]{7,15}$/,
            "Please enter a valid phone number (7 to 15 digits, optional +)"),

    projectDetails: z
        .string({ error: "Project Details are required" })
        .trim()
        .min(1, "Project Details are required")
        .min(20, "Please provide a bit more detail (at least 20 characters)"),

    status: z.enum(QuoteStatus).default(QuoteStatus.NEW),
})