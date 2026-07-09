import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { TextRevealOnScroll } from "@/components/shared/TextReveal";

export default function MissionStatement() {
    return (
        <Section className="bg-white min-h-max overflow-hidden">
            <Container>
                <div className="py-8 flex flex-col items-center text-center gap-10">
                    {/* Manifesto */}
                    <TextRevealOnScroll
                        as="h2"
                        className="text-[clamp(2rem,5vw,3.75rem)] leading-[1.15] font-semibold max-w-4xl mx-auto"
                    >
                        {`We don't just machine metal — we engineer confidence. Every component we ship carries the weight of precision, the promise of reliability, and the pride of Jamnagar.`}
                    </TextRevealOnScroll>

                    {/* Sub-line */}
                    <p className="text-sm uppercase tracking-[0.22em] text-foreground/40 font-medium">
                        Founded in Jamnagar · Trusted Worldwide
                    </p>
                </div>
            </Container>
        </Section>
    );
}
