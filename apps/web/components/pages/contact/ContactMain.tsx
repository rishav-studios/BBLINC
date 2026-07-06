"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Arrow } from "@/components/shared/clickables/CustomLink";
import { variantClasses } from "@/components/shared/clickables/variantClasses";
import { cn } from "@bbl/ui/lib/utils";

export default function ContactMain() {
    return (
        <Section className="bg-[#fafaf8] py-20 min-h-max">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* Left — Form */}


                    {/* Right — Info Panel */}
                    <div className="flex flex-col gap-12 pr-8 border-r border-black/20">
                        {/* Address */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-mono text-sm tracking-widest text-gray-400 uppercase">Find Us</h3>
                            <div className="flex flex-col gap-1 text-lg">
                                <p className="font-medium text-foreground">BBL Precision</p>
                                <p className="text-gray-600">Jamnagar, Gujarat - 361 004</p>
                                <p className="text-gray-600">India</p>
                            </div>
                        </div>

                        <div className="h-px w-12 bg-primary/30" />

                        {/* Hours */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-mono text-sm tracking-widest text-gray-400 uppercase">Business Hours</h3>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between max-w-[240px]">
                                    <span className="text-gray-600">Saturday – Thursday</span>
                                    <span className="font-medium">09:00 – 18:00</span>
                                </div>
                                <div className="flex justify-between max-w-[240px]">
                                    <span className="text-gray-600">Friday</span>
                                    <span className="font-medium text-primary">Closed</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-px w-12 bg-primary/30" />

                        {/* Response Time */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-mono text-sm tracking-widest text-gray-400 uppercase">Response Time</h3>
                            <div className="flex flex-col gap-1">
                                <p className="text-gray-600 leading-relaxed">
                                    We aim to reply to all enquiries within <span className="font-medium text-foreground">24 hours</span>. Priority requests and existing clients receive same-day attention.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* form */}
                    <div className="flex flex-col gap-8 pl-8">
                        <div>
                            <h2 className="text-4xl font-semibold mb-4">Send an Enquiry</h2>
                            <p className="text-gray-500 leading-relaxed max-w-md">
                                Fill out the form below with your project details, and our engineering team will get back to you within 24 hours.
                            </p>
                        </div>

                        <form className="flex flex-col gap-6" action="">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="px-4 py-3 rounded-lg border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="company" className="text-sm font-medium">Company Name</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        required
                                        className="px-4 py-3 rounded-lg border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="px-4 py-3 rounded-lg border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="px-4 py-3 rounded-lg border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium">Project Details</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    placeholder="Include materials, quantities, tolerances, or any specific requirements..."
                                    className="px-4 py-3 rounded-lg border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-y"
                                />
                            </div>

                            <button
                                type="submit"
                                className={cn(variantClasses["button-brand"].base, variantClasses["button-brand"].hover, "w-max pr-2 ml-auto group/custom-link mt-4")}
                            >
                                Send Enquiry
                                <Arrow variant="black" />
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
