"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Description, Heading, SectionHeader, Separator } from "@/components/shared/SectionHeader";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const values = [
    {
        title: "Precision",
        description: "Every micron is intentional. We hold tolerances others won't touch — consistently, at volume.",
        image: "/sectors/posters/aerospace.webp",
        icon: (
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="14" cy="14" r="11" />
                <circle cx="14" cy="14" r="3" />
                <line x1="14" y1="3" x2="14" y2="6" />
                <line x1="14" y1="22" x2="14" y2="25" />
                <line x1="3" y1="14" x2="6" y2="14" />
                <line x1="22" y1="14" x2="25" y2="14" />
            </svg>
        ),
    },
    {
        title: "Reliability",
        description: "On-time delivery at any volume. Our supply chain doesn't flinch at scale or tight deadlines.",
        image: "/sectors/posters/automobile.webp",
        icon: (
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 3L17.5 10H25L19 15l2.5 8L14 19l-7.5 4L9 15 3 10h7.5L14 3z" />
            </svg>
        ),
    },
    {
        title: "Innovation",
        description: "Continuously investing in next-generation CNC machining, tooling, and quality control systems.",
        image: "/sectors/posters/chemical.webp",
        icon: (
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 4a8 8 0 0 1 5.66 13.66L18 19v2H10v-2l-1.66-1.34A8 8 0 0 1 14 4z" />
                <line x1="10" y1="23" x2="18" y2="23" />
                <line x1="11" y1="25" x2="17" y2="25" />
            </svg>
        ),
    },
    {
        title: "Partnership",
        description: "We don't just fulfil orders — we become a long-term extension of our clients' supply chain.",
        image: "/sectors/posters/oil-gas.webp",
        icon: (
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 16l4-4 4 4 4-4 4 4 4-4" />
                <line x1="2" y1="12" x2="26" y2="12" />
            </svg>
        ),
    },
] as const;

// ─── Desktop accordion card ───────────────────────────────────────────────────
function AccordionCard({
    value,
    index,
    isExpanded,
    onHover,
    onLeave,
}: {
    value: (typeof values)[number];
    index: number;
    isExpanded: boolean;
    onHover: () => void;
    onLeave: () => void;
}) {
    return (
        <motion.div
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            initial={{
                y: 100,
                opacity: 0,
            }}
            whileInView={{
                y: 0,
                opacity: 1
            }}
            animate={{ y: 0, opacity: 1, flex: isExpanded ? 3.5 : 1 }}
            transition={{
                flex: {
                    duration: 0.55, ease: [0.4, 0, 0.2, 1]
                },
                y: {
                    delay: index * 0.1,
                    duration: 0.55, ease: [0.4, 0, 0.2, 1]
                },
                opacity: {
                    delay: index * 0.1,
                    duration: 0.55, ease: [0.4, 0, 0.2, 1]
                }

            }}
            className="relative overflow-hidden h-108 rounded-2xl cursor-pointer min-w-0"
            style={{ flex: 1 }}
        >
            {/* ── Background image (always mounted, fades in/out) ── */}
            <div className="absolute inset-0">
                <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 50vw, 25vw"
                    priority={index === 0}
                />
            </div>

            {/* ── Gradient overlay — dark base always, lightens when collapsed ── */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    background: isExpanded
                        ? "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.35) 100%)"
                        : "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.70) 100%)",
                }}
                transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
            />

            {/* ── Image reveal mask: collapsed = low opacity, expanded = full ── */}
            <motion.div
                className="absolute inset-0"
                animate={{ opacity: isExpanded ? 0 : 0.55 }}
                transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                style={{ background: "rgba(255,255,255,1)", mixBlendMode: "overlay" }}
            />

            {/* ── Content ── */}
            <div className="relative z-10 h-full flex flex-col p-6">

                {/* Icon — always visible, shifts position */}
                <motion.div
                    animate={{
                        alignSelf: isExpanded ? "flex-start" : "center",
                        marginTop: isExpanded ? 0 : "auto",
                        marginBottom: isExpanded ? 0 : "auto",
                    }}
                    transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                    className="w-11 h-11  rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white shrink-0 transition-all duration-300"
                >
                    {value.icon}
                </motion.div>

                {/* Collapsed label — vertical rotated text */}
                <AnimatePresence>
                    {!isExpanded && (
                        <motion.div
                            key="collapsed-label"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex-1 flex items-center min-h-full justify-center mt-3"
                        >
                            <span
                                className="text-white -translate-y-6 font-semibold tracking-[0.2em] uppercase select-none whitespace-nowrap"
                                style={{ textOrientation: "mixed", }}
                            >
                                {value.title}
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Expanded content — title + description + accent */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            key="expanded-content"
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.38, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                            className="mt-auto flex flex-col gap-3"
                        >
                            {/* Accent line */}
                            <div className="w-8 h-[2px] bg-primary rounded-full" />

                            <h3 className="text-white text-5xl font-semibold tracking-tight leading-none">
                                {value.title}
                            </h3>

                            <p className="text-gray-200 leading-relaxed max-w-xs">
                                {value.description}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

// ─── Mobile accordion card (click-to-expand, stacked) ────────────────────────
function MobileCard({
    value,
    isExpanded,
    onToggle,
}: {
    value: (typeof values)[number];
    isExpanded: boolean;
    onToggle: () => void;
}) {
    return (
        <div
            className="relative overflow-hidden rounded-2xl cursor-pointer"
            onClick={onToggle}
        >
            {/* Background */}
            <div className="absolute inset-0">
                <Image src={value.image} alt={value.title} fill className="object-cover" sizes="100vw" />
            </div>
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 p-5 flex flex-col gap-4">
                {/* Header row */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl border border-white/30 bg-white/10 flex items-center justify-center text-white shrink-0">
                        {value.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg tracking-tight">{value.title}</h3>
                    <div className="ml-auto text-white/60 text-xl leading-none select-none">
                        {isExpanded ? "−" : "+"}
                    </div>
                </div>

                {/* Expandable description */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="w-8 h-[2px] bg-primary rounded-full mb-3" />
                            <p className="text-white/75 text-sm leading-relaxed">{value.description}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function CoreValues() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);

    return (
        <Section className="bg-white">
            <Container className="space-y-12">

                <SectionHeader>
                    <Heading>Core Values</Heading>
                    <Separator />
                    <Description>
                        {`The principles that have guided every decision \nsince our founding — and every component since our first order.`}
                    </Description>
                </SectionHeader>

                {/* ── Desktop: horizontal accordion ── */}
                <div className="hidden lg:flex gap-3">
                    {values.map((v, i) => (
                        <AccordionCard
                            key={v.title}
                            value={v}
                            index={i}
                            isExpanded={hoveredIndex === i}
                            onHover={() => setHoveredIndex(i)}
                            onLeave={() => setHoveredIndex(null)}
                        />
                    ))}
                </div>

                {/* ── Mobile: stacked click-to-expand ── */}
                <div className="flex flex-col gap-3 lg:hidden">
                    {values.map((v, i) => (
                        <MobileCard
                            key={v.title}
                            value={v}
                            isExpanded={mobileExpanded === i}
                            onToggle={() => setMobileExpanded(mobileExpanded === i ? null : i)}
                        />
                    ))}
                </div>

            </Container>
        </Section>
    );
}
