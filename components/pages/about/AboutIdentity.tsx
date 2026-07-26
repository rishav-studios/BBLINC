"use client";

import Fade from "@/components/animations/Fade";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import EyeBrow from "@/components/shared/EyeBrow";
import { NumberTicker } from "@/components/shared/NumberTicker";
import { Arrow, CustomLink } from "@/components/shared/clickables/CustomLink";
import { cn } from "@bbl/ui/lib/utils";

// ── Dashed circle stat (reuses the pattern from home About.tsx) ───────────────
function StatCircle({ value, label, className = "" }: {
    value: string;
    label: string;
    className?: string;
}) {
    // Parse the numeric part for NumberTicker, keep suffix separate
    const match = value.match(/^(\d+)(.*)$/);
    const num = match ? parseInt(match[1]!) : 0;
    const suffix = match ? match[2] ?? "" : value;

    return (
        <Fade className={cn("flex flex-col items-center gap-2 w-max", className)}>
            <div className="w-40 aspect-square border border-primary border-dashed rounded-full flex items-center justify-center">
                <div className="font-semibold flex items-start">
                    <span className="text-4xl leading-none">
                        <NumberTicker value={num} suffix={suffix} />
                    </span>
                </div>
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-widest text-center leading-snug max-w-30">
                {label}
            </p>
        </Fade>
    );
}

export default function AboutIdentity() {
    return (
        <Section className="bg-gray-100">
            <Container className="relative z-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left — narrative */}
                    <div className="space-y-8">
                        <Fade className="space-y-8">

                            <EyeBrow text="Our Story" />

                            <p className="text-xl md:text-2xl lg:text-3xl leading-snug lg:text-justify">
                                {`We are a precision engineering partner committed to transforming raw metal into world-class components. Our passion for innovation, technical excellence, and uncompromising quality enables us to deliver solutions that power industries across the globe — from aerospace cockpits to agricultural fields.`}
                            </p>
                        </Fade>

                        <Fade>

                            <CustomLink href="/contact" variant="button-brand" className="w-max mt-4">
                                Work with us
                                <Arrow variant="black" />
                            </CustomLink>
                        </Fade>
                    </div>

                    {/* Right — 2×2 offset stat circles */}
                    <div className="relative flex flex-wrap justify-center gap-6 pt-4">
                        <Fade>

                            <StatCircle value="26+" label="Years of Experience" />
                        </Fade>
                        <Fade className="xl:translate-y-20">
                            <StatCircle value="1M+" label="Parts per Year" />
                        </Fade>
                        <Fade>
                            <StatCircle value="8" label="Industries Served" />
                        </Fade>
                        <Fade>
                            <StatCircle value="100+" label="Clients Worldwide" />
                        </Fade>
                        <Fade className="xl:translate-y-20">
                            <StatCircle value="20+" label="Countries Exported" />
                        </Fade>
                        <Fade>
                            <StatCircle value="10+" label="High end CNCs" />
                        </Fade>
                    </div>

                </div>
            </Container>
        </Section>
    );
}
