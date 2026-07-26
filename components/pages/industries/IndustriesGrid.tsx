"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Arrow, CustomLink } from "@/components/shared/clickables/CustomLink";
import { Description, Heading, SectionHeader, Separator } from "@/components/shared/SectionHeader";
import type { Industry } from "@/constants/industries_data";
import { motion, Variants } from "motion/react";
import Image from "next/image";

// ── Per-card animation ────────────────────────────────────────────────────────
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 18,
            delay: i * 0.08,
        },
    }),
};

// ── Single card ───────────────────────────────────────────────────────────────
function IndustryGridCard({ industry, index }: { industry: Industry; index: number }) {


    return (
        <motion.article
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className=" relative flex flex-col overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm hover:shadow-xl transition-shadow duration-500"

        >
            {/* ── Poster image ── */}
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={industry.posterSrc}
                    alt={industry.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
                />
                {/* Gradient overlay at bottom of image */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                {/* Industry label pinned to bottom of image */}
                <h2 className="absolute bottom-4 left-5 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] leading-none text-white uppercase tracking-tight drop-shadow-lg">
                    {industry.label}
                </h2>
            </div>

            {/* ── Content ── */}
            <div className="flex flex-col flex-1 gap-5 px-5 py-5">
                {/* Divider */}
                <div className="h-px w-full bg-black/8" />

                {/* Description — clamped to 3 lines */}
                <p className="text-sm leading-relaxed text-gray-500 line-clamp-3 flex-1">
                    {industry.description}
                </p>

                {/* Stats row */}
                <div className="flex items-center gap-0">
                    {industry.stats.map((stat, i) => (
                        <div
                            key={stat.unit}
                            className={`flex flex-col pr-5 ${i > 0 ? "pl-5 border-l border-black/10" : ""}`}
                        >
                            <span className="font-display text-2xl leading-none text-foreground">
                                {stat.value}
                            </span>
                            <span className="mt-1 text-[0.65rem] uppercase tracking-widest text-gray-400">
                                {stat.unit}
                            </span>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div>
                    <CustomLink
                        href={`/industries/${industry.slug}`}
                        variant="button-black"
                        className="w-max text-sm"
                    >
                        Explore Industry
                        <Arrow variant="primary" />
                    </CustomLink>
                </div>
            </div>
        </motion.article>
    );
}

// ── Grid ──────────────────────────────────────────────────────────────────────
export default function IndustriesGrid({ industries }: { industries: Industry[] }) {
    return (
        <Section className="bg-white" aria-label="All industries">
            <Container className="space-y-20">
                <SectionHeader className="max-w-full">
                    <Heading>Empowering various industries</Heading>
                    <Separator />
                    <Description className="max-w-70 md:max-w-md">Precision-machined brass components trusted across eight demanding sectors — built to spec, delivered at scale.</Description>

                </SectionHeader>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {industries.map((industry, i) => (
                        <IndustryGridCard key={industry.id} industry={industry} index={i} />
                    ))}
                </div>
            </Container>
        </Section>
    );
}
