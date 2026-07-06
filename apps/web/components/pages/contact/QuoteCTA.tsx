import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Link from "next/link";

export default function QuoteCTA() {
    return (
        <Section className="bg-foreground text-background py-16 lg:py-20 min-h-max">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                    {/* Left: Copy */}
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="flex h-2 w-2 rounded-full bg-primary relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            </span>
                            <span className="font-mono text-xs uppercase tracking-widest text-primary">Fast-Track Quoting</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                            Have engineering drawings ready?
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Skip the general enquiry. Send your CAD files, PDFs, or 3D models directly to our engineering team for a comprehensive manufacturing quote within 24 hours.
                        </p>
                    </div>

                    {/* Right: Action */}
                    <div className="shrink-0 w-full md:w-auto">
                        <Link
                            href="/quote"
                            className="group flex items-center justify-between gap-6 bg-gold text-foreground px-8 py-5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-full md:w-auto"
                        >
                            <div className="flex flex-col">
                                <span className="font-semibold text-xl">Get a Quote</span>
                                <span className="text-gray-700 text-xs font-medium">with estimated time</span>
                            </div>
                            <div className="bg-background/20 p-2 rounded-lg group-hover:bg-background/30 transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                                </svg>
                            </div>
                        </Link>
                    </div>

                </div>
            </Container>
        </Section>
    );
}
