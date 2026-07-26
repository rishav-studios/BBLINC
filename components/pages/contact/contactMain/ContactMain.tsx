"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ContactForm from "./ContactForm";

export default function ContactMain() {
    return (
        <Section className="bg-[#fafaf8] py-20 min-h-max">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">

                    {/* Left — Form */}


                    {/* Right — Info Panel */}
                    <div className="lg:pr-8 lg:border-r lg:border-black/20">

                        <div className="flex flex-col gap-12 max-w-xs">
                            {/* Address */}
                            <div className="flex flex-col gap-4">
                                <h3 className="font-mono text-sm tracking-widest text-gray-400 uppercase">Find Us</h3>
                                <div className="flex flex-col gap-1 text-lg">
                                    <p className="font-medium text-foreground">BBLINC</p>
                                    <p className="text-gray-600">Jamnagar, Gujarat - 361 004</p>
                                    <p className="text-gray-600">India</p>
                                </div>
                            </div>

                            <div className="h-px w-12 bg-primary/30" />

                            {/* Hours */}
                            <div className="flex flex-col gap-4">
                                <h3 className="font-mono text-sm tracking-widest text-gray-400 uppercase">Business Hours</h3>
                                <div className="flex flex-col gap-2">
                                    <div className="grid grid-cols-2 gap-4">
                                        <span className="text-gray-600">Saturday – Thursday</span>
                                        <span className="font-medium">9:00 AM &nbsp;to&nbsp; 6:00 PM</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
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
                    </div>

                    {/* form */}
                    <ContactForm />
                </div>
            </Container>
        </Section>
    );
}
