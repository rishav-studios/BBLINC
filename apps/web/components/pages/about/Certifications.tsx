import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Description, Heading, SectionHeader } from "@/components/shared/SectionHeader";

const certs = [
    {
        name: "ISO 9001",
        sub: "2015",
        description: "Quality Management System",
        scope: "General manufacturing excellence",
    },
    {
        name: "IATF 16949",
        sub: "",
        description: "Automotive Quality Standard",
        scope: "OEM & Tier-1 supply chains",
    },
    {
        name: "AS9100",
        sub: "Rev D",
        description: "Aerospace Quality Standard",
        scope: "Flight-critical components",
    },
    {
        name: "RoHS",
        sub: "Compliant",
        description: "Restriction of Hazardous Substances",
        scope: "EU environmental compliance",
    },
    {
        name: "DZR",
        sub: "Brass",
        description: "Dezincification Resistant Alloy",
        scope: "Chemical & marine grade",
    },
    {
        name: "MIL-SPEC",
        sub: "Compliant",
        description: "Military Specification Parts",
        scope: "Defense procurement",
    },
] as const;

export default function Certifications() {
    return (
        <Section className="bg-[#fafaf8]">
            <Container className="space-y-12">

                {/* Header */}
                <SectionHeader className="justify-between w-full">
                    <Heading>Certifications</Heading>
                    <Description className="text-end">
                        {`Every certification is a promise kept — \nto our clients, their clients, and the end user.`}
                    </Description>
                </SectionHeader>

                {/* Divider */}
                <div className="h-px w-full bg-linear-to-r from-primary/40 via-black/10 to-transparent" />

                {/* Cert badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                    {certs.map((cert) => (
                        <div
                            key={cert.name}
                            className="group flex flex-col gap-3 p-5 rounded-2xl border border-black/8 bg-white hover:border-primary/40 hover:shadow-sm transition-all duration-300"
                        >
                            {/* Badge name */}
                            <div className="flex items-baseline gap-1.5">
                                <span className="font-display font-bold text-xl leading-none text-foreground">
                                    {cert.name}
                                </span>
                                {cert.sub && (
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-primary/70">
                                        {cert.sub}
                                    </span>
                                )}
                            </div>

                            {/* Accent line */}
                            <div className="h-px w-6 bg-primary/50 group-hover:w-full transition-all duration-500" />

                            {/* Description */}
                            <div className="flex flex-col gap-0.5">
                                <span className="text-xs font-medium text-foreground leading-snug">
                                    {cert.description}
                                </span>
                                <span className="text-[10px] text-gray-400 leading-snug">
                                    {cert.scope}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </Container>
        </Section>
    );
}
