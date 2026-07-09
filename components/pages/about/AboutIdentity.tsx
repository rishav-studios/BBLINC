"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import EyeBrow from "@/components/shared/EyeBrow";
import { NumberTicker } from "@/components/shared/NumberTicker";
import { TextRevealOnScroll } from "@/components/shared/TextReveal";
import { Arrow, CustomLink } from "@/components/shared/clickables/CustomLink";

// ── Dashed circle stat (reuses the pattern from home About.tsx) ───────────────
function StatCircle({ value, label, offset = false }: {
    value: string;
    label: string;
    offset?: boolean;
}) {
    // Parse the numeric part for NumberTicker, keep suffix separate
    const match = value.match(/^(\d+)(.*)$/);
    const num = match ? parseInt(match[1]!) : 0;
    const suffix = match ? match[2] ?? "" : value;

    return (
        <div className={`flex flex-col items-center gap-2 w-max ${offset ? "translate-y-20" : ""}`}>
            <div className="w-40 aspect-square border border-primary border-dashed rounded-full flex items-center justify-center">
                <div className="font-semibold flex items-start">
                    <span className="text-4xl leading-none">
                        <NumberTicker value={num} suffix={suffix} />
                    </span>
                </div>
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-widest text-center leading-snug max-w-[120px]">
                {label}
            </p>
        </div>
    );
}

export default function AboutIdentity() {
    return (
        <Section className="bg-white">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left — narrative */}
                    <div className="flex flex-col gap-8">
                        <EyeBrow text="Our Story" />

                        <TextRevealOnScroll as="div" className="text-3xl leading-snug text-foreground">
                            {`We are a precision engineering partner committed to transforming raw metal into world-class components. Our passion for innovation, technical excellence, and uncompromising quality enables us to deliver solutions that power industries across the globe — from aerospace cockpits to agricultural fields.`}
                        </TextRevealOnScroll>

                        <CustomLink href="/contact" variant="button-brand" className="w-max mt-4">
                            Work with us
                            <Arrow variant="black" />
                        </CustomLink>
                    </div>

                    {/* Right — 2×2 offset stat circles */}
                    <div className="relative flex flex-wrap justify-center gap-x-6 gap-y-0 pt-4 pb-24">
                        <StatCircle value="25+" label="Years of Experience" />
                        <StatCircle value="1M+" label="Parts per Year" offset />
                        <StatCircle value="8"   label="Industries Served" />
                        <StatCircle value="40+" label="Countries Exported" offset />
                    </div>

                </div>
            </Container>
        </Section>
    );
}
