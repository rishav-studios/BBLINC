"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Description, Heading, SectionHeader } from "@/components/shared/SectionHeader";
import { cn } from "@bbl/ui/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const certs = [
    {
        name: "ISO 9001",
        sub: "2015",
        description: "Quality Management System",
        scope: "General manufacturing excellence",
        image: "/certificates/iso.webp",
    },
    {
        name: "IATF 16949",
        sub: "",
        description: "Automotive Quality Standard",
        scope: "OEM & Tier-1 supply chains",
        image: "/certificates/iatf.webp",
    },
    {
        name: "AS9100",
        sub: "Rev D",
        description: "Aerospace Quality Standard",
        scope: "Flight-critical components",
        image: "/certificates/as.webp",
    },
    {
        name: "RoHS",
        sub: "Compliant",
        description: "Restriction of Hazardous Substances",
        scope: "EU environmental compliance",
        image: "/certificates/rohs.webp",
    },
    {
        name: "NSF",
        sub: "61-82",
        description: "Lead-Free Compliance",
        scope: "Water & beverage applications",
        image: "/certificates/nsf.webp",
    },
    {
        name: "MIL-SPEC",
        sub: "Compliant",
        description: "Military Specification Parts",
        scope: "Defense procurement",
        image: "/certificates/mil.webp",
    },
] as const;

export default function Certifications() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const selectedCert = certs.find(c => c.name === selectedId);

    return (
        <Section className={cn("bg-gray-100", selectedId && "h-[140dvh]")}>
            <Container className="space-y-12">

                {/* Header */}
                <SectionHeader className="justify-between w-full">
                    <Heading>Certifications</Heading>
                    <Description className="text-end text-gray-700">
                        {`Every certification is a promise kept — \nto our clients, their clients, and the end user.`}
                    </Description>
                </SectionHeader>

                {/* Divider */}
                <div className="h-px w-full bg-linear-to-r from-primary via-background/20 to-transparent" />

                {/* Cert badges (Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                    {certs.map((cert) => (
                        <motion.div
                            layoutId={`card-${cert.name}`}
                            key={cert.name}
                            onClick={() => setSelectedId(cert.name)}
                            className="group cursor-pointer flex flex-col gap-4 p-5 rounded-2xl bg-white border border-background/10 hover:bg-background/10- hover:border-primary/50 transition-colors duration-300 overflow-hidden shadow-lg"
                        >
                            {/* Thumbnail image */}
                            <motion.div layoutId={`image-${cert.name}`} className="relative h-48 w-full rounded-xl overflow-hidden bg-gray-200">
                                <Image
                                    src={cert.image}
                                    alt={cert.name}
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>

                            {/* Info */}
                            <motion.div layoutId={`info-${cert.name}`} className="flex flex-col gap-2">
                                <div className="flex items-baseline gap-2">
                                    <span className="font-display font-bold text-xl leading-none">
                                        {cert.name}
                                    </span>
                                    {cert.sub && (
                                        <span className="text-xs font-mono uppercase tracking-widest text-primary">
                                            {cert.sub}
                                        </span>
                                    )}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm font-medium text-gray-700 leading-snug">
                                        {cert.description}
                                    </span>
                                    <span className="text-xs text-background/50 leading-snug">
                                        {cert.scope}
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Expanded Modal */}
                <AnimatePresence>
                    {selectedId && selectedCert && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="fixed inset-0 z-50 bg-white/20 h-dvh backdrop-blur-sm"
                            />
                            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 pointer-events-none">
                                <motion.div
                                    layoutId={`card-${selectedCert.name}`}
                                    className="relative flex flex-col w-full max-w-3xl max-h-[90vh] bg-white border border-background/20 rounded-3xl overflow-hidden pointer-events-auto shadow-2xl"
                                >
                                    <button
                                        onClick={() => setSelectedId(null)}
                                        className="absolute top-4 right-4 z-10 p-2 bg-white hover:bg-white/80 rounded-full backdrop-blur-md transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                    </button>

                                    <motion.div layoutId={`image-${selectedCert.name}`} className="relative h-64 sm:h-112 w-full bg-gray-200">
                                        <Image
                                            src={selectedCert.image}
                                            alt={selectedCert.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </motion.div>

                                    <motion.div layoutId={`info-${selectedCert.name}`} className="p-8 flex flex-col gap-4">
                                        {/* <div className="flex items-baseline gap-3">
                                            <span className="font-display font-bold text-3xl sm:text-4xl leading-none">
                                                {selectedCert.name}
                                            </span>
                                            {selectedCert.sub && (
                                                <span className="text-sm font-mono uppercase tracking-widest text-primary">
                                                    {selectedCert.sub}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <span className="text-lg font-medium text-gray-700 leading-snug">
                                                {selectedCert.description}
                                            </span>
                                            <span className="text-base text-gray-600 leading-snug">
                                                {selectedCert.scope}
                                            </span>
                                        </div> */}
                                        <p className="text-center text-2xl animate-pulse text-gray-600 font-medium">Comming Soon...</p>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </>
                    )}
                </AnimatePresence>

            </Container>
        </Section>
    );
}
