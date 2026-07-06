"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Arrow } from "@/components/shared/clickables/CustomLink";
import { variantClasses } from "@/components/shared/clickables/variantClasses";
import { cn } from "@bbl/ui/lib/utils";
import { INDUSTRIES_DATA } from "../home/industries/industries";

export default function QuoteForm() {
    return (
        <Section className="bg-[#fafaf8] py-20 min-h-max">
            <Container>
                <div className="max-w-4xl mx-auto flex flex-col gap-10 bg-white p-8 md:p-12 rounded-2xl border border-black/10 shadow-sm">

                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-semibold">Request a Comprehensive Quote</h2>
                        <p className="text-gray-500">
                            Provide your project details below. Our engineering team will review your requirements and respond within 24 hours.
                        </p>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-6 gap-6" action="">

                        {/* Row 1 */}
                        <div className="flex flex-col gap-2 md:col-span-3">
                            <label htmlFor="name" className="text-sm font-medium">Full Name <span className="text-primary">*</span></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="px-4 py-3 rounded-lg border border-black/10 bg-[#fafaf8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                            />
                        </div>
                        <div className="flex flex-col gap-2 md:col-span-3">
                            <label htmlFor="company" className="text-sm font-medium">Company Name <span className="text-primary">*</span></label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                required
                                className="px-4 py-3 rounded-lg border border-black/10 bg-[#fafaf8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                            />
                        </div>

                        {/* Row 2 */}
                        <div className="flex flex-col gap-2 md:col-span-3">
                            <label htmlFor="email" className="text-sm font-medium">Email Address <span className="text-primary">*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="px-4 py-3 rounded-lg border border-black/10 bg-[#fafaf8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                            />
                        </div>
                        <div className="flex flex-col gap-2 md:col-span-3">
                            <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="px-4 py-3 rounded-lg border border-black/10 bg-[#fafaf8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                            />
                        </div>

                        {/* Row 3 */}
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label htmlFor="industry" className="text-sm font-medium">Industry <span className="text-primary">*</span></label>
                            <select
                                id="industry"
                                name="industry"
                                required
                                defaultValue=""
                                className="px-4 py-3 rounded-lg border border-black/10 bg-[#fafaf8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors appearance-none"
                            >
                                <option value="" disabled>Select Industry</option>
                                {INDUSTRIES_DATA.map((ind) => (
                                    <option key={ind.id} value={ind.id}>{ind.label}</option>
                                ))}
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label htmlFor="quantity" className="text-sm font-medium">Target Quantity <span className="text-primary">*</span></label>
                            <input
                                type="text"
                                id="quantity"
                                name="quantity"
                                placeholder="e.g. 50,000"
                                required
                                className="px-4 py-3 rounded-lg border border-black/10 bg-[#fafaf8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                            />
                        </div>
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label htmlFor="timeline" className="text-sm font-medium">Expected Time (Days)</label>
                            <input
                                type="number"
                                id="timeline"
                                name="timeline"
                                placeholder="e.g. 30"
                                min="1"
                                className="px-4 py-3 rounded-lg border border-black/10 bg-[#fafaf8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                            />
                        </div>

                        {/* Row 4: File Upload */}
                        <div className="flex flex-col gap-2 md:col-span-6">
                            <label className="text-sm font-medium">Upload Drawings (CAD, PDF, STEP)</label>
                            <div className="relative group cursor-pointer">
                                <input
                                    type="file"
                                    id="files"
                                    name="files"
                                    multiple
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                />
                                <div className="flex flex-col items-center justify-center gap-2 px-4 py-8 rounded-lg border-2 border-dashed border-black/20 bg-[#fafaf8] group-hover:bg-primary/5 group-hover:border-primary/50 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                                        </svg>
                                    </div>
                                    <p className="text-sm font-medium text-foreground">Click to upload or drag and drop</p>
                                    <p className="text-xs text-gray-500">Max file size: 25MB per file</p>
                                </div>
                            </div>
                        </div>

                        {/* Row 5: Textarea */}
                        <div className="flex flex-col gap-2 md:col-span-6">
                            <label htmlFor="message" className="text-sm font-medium">Project Details <span className="text-primary">*</span></label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                placeholder="Include materials, tolerances, or any specific requirements..."
                                className="px-4 py-3 rounded-lg border border-black/10 bg-[#fafaf8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-y"
                            />
                        </div>

                        {/* Submit */}
                        <div className="md:col-span-6 pt-4 flex justify-end">
                            <button
                                type="submit"
                                className={cn(variantClasses["button-brand"].base, variantClasses["button-brand"].hover, "w-full md:w-max pr-2 group/custom-link")}
                            >
                                Submit Request
                                <Arrow variant="black" />
                            </button>
                        </div>
                    </form>
                </div>
            </Container>
        </Section>
    );
}
