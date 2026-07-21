"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Description, Heading, SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatePresence, motion, useInView } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────
const milestones = [

    {
        year: "2002",
        title: "The Beginning",
        description: "Started our manufacturing journey with a commitment to precision, quality, and customer satisfaction.",
        imageSrc: "https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/company/journey/2002.webp"
    },
    {
        year: "2006",
        title: "Building Strong Foundations",
        description: "Developed manufacturing expertise, production capabilities, and a skilled workforce.",
        imageSrc: "https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/company/journey/2006.webp"
    },
    {
        year: "2011",
        title: "Growth & Engineering Excellence Begins",
        description: "Expanded capabilities and adopted advanced manufacturing processes and stronger quality systems.",
        imageSrc: "https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/company/journey/2011.webp"
    },
    {
        year: "2015",
        title: "Engineering Excellence Matures",
        description: "Strengthened quality systems and deepened engineering capabilities across product lines.",
        imageSrc: "https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/company/journey/2015.webp"
    },
    {
        year: "2021",
        title: "Preparing for the Future",
        description: "Focused on innovation, global opportunities, and creating a brand that reflects our vision for modern manufacturing.",
        imageSrc: "https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/company/journey/2021.webp"
    },
    {
        year: "2023",
        title: "BBLINC Launch",
        description: "Officially launched BBLINC with a mission to provide precision-engineered manufacturing solutions to global industries.",
        imageSrc: "https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/company/journey/2023.webp"
    },
    {
        year: "2024",
        title: "Expanding Global Reach",
        description: "Serving Aerospace, Automotive, Defense, Agriculture, HVAC, Oil & Gas, Hydraulics, Pneumatics, and Industrial Engineering — 24+ years of experience, 1000+ precision components, and long-term partnerships with global customers worldwide.",
        imageSrc: "https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/company/journey/2024.webp"
    },
    {
        year: "2026",
        title: "The Future",
        description: "Continuing to innovate,grow and build long term partnerships with customers worldwide.",
        imageSrc: "https://rehxhlelmhurdpyzrpmr.supabase.co/storage/v1/object/public/images/company/journey/2026.webp"
    }

] as const;

// ── Individual milestone row ───────────────────────────────────────────────────
function MilestoneRow({
    milestone,
    index,
    onActivate,
}: {
    milestone: (typeof milestones)[number];
    index: number;
    onActivate: (index: number) => void;
}) {
    const rowRef = useRef<HTMLDivElement>(null);

    // Fires once when 50% of the row enters the viewport
    const isInView = useInView(rowRef, { once: false, amount: 0.6 });

    // Notify parent to switch background image — must be in useEffect
    // to avoid setState-during-render when React is rendering MilestoneRow
    useEffect(() => {
        if (isInView) {
            onActivate(index);
        } else if (index === 0) {
            // First row left the viewport (scrolled back up) → show default image
            onActivate(-1);
        }
    }, [isInView, index, onActivate]);

    const ease = [0.4, 0, 0.2, 1] as const;

    return (
        <div ref={rowRef} className="min-h-[40dvh] md:h-[50dvh]">
            {/* Top divider rule */}
            <div className="w-full h-px bg-white/10" />

            {/* Row content — full width on mobile, half on md+ */}
            <div className="w-full md:max-w-1/2 py-6 md:py-10 flex h-full items-center gap-0">

                {/* ── Left: year ── */}
                <div className="w-[40%] md:w-[35%] flex flex-col gap-1.5 md:gap-2 pr-4 md:pr-8">

                    {/* "year" label */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.4, ease }}
                        className="text-gray-400 text-[10px] font-semibold uppercase tracking-[0.3em]"
                    >
                        year
                    </motion.p>

                    {/* Accent bar — grows like the progress dots */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 40 } : { width: 0 }}
                        transition={{ duration: 0.45, ease }}
                        className="h-0.5 bg-primary rounded-full"
                    />

                    {/* Big year number */}
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                        transition={{ duration: 0.45, delay: 0.06, ease }}
                        className="text-white font-bold leading-none"
                        style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
                    >
                        {milestone.year}
                    </motion.span>
                </div>

                {/* ── Vertical divider — scaleY from top ── */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 0.4, delay: 0.12, ease }}
                    style={{ originY: 0 }}
                    className="w-px bg-white/20 mx-0 self-stretch"
                />

                {/* ── Right: description ── */}
                <div className="space-y-1 md:space-y-2">

                    <motion.p
                        initial={{ opacity: 0, x: 10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                        transition={{ duration: 0.45, delay: 0.16, ease }}
                        className="text-gray-50 text-base sm:text-lg md:text-2xl font-medium leading-snug md:leading-relaxed pl-4 md:pl-8 flex items-center"
                    >
                        {milestone.title}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: 10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                        transition={{ duration: 0.45, delay: 0.16, ease }}
                        className="text-gray-200 text-xs sm:text-sm lg:text-base leading-relaxed pl-4 md:pl-8 flex items-center"
                    >
                        {milestone.description}
                    </motion.p>
                </div>
            </div>
        </div>
    );
}

// ── Crossfading background ────────────────────────────────────────────────────
function StickyBackground({ activeIndex }: { activeIndex: number | -1 }) {
    return (
        <div className="sticky top-0 h-dvh z-0 mask-t-from-70% overflow-hidden">
            {/* Stack all images; only active one is visible */}
            {milestones.map((m, i) => (
                <AnimatePresence key={m.year}>
                    {i === activeIndex && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={m.imageSrc}
                                alt={m.year}
                                fill
                                className="object-cover"
                                priority={i === 0}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            ))}

            {/* Default image — shown when no milestone is in view */}
            <AnimatePresence>
                {activeIndex === -1 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute inset-0"
                    >
                        <Image
                            src="/about-2.webp"
                            alt="about-2"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Consistent dark overlay — always on top of the images */}
            <div
                className="absolute inset-0 bg-black/75 md:bg-linear-to-r md:from-black/50 md:via-black/30 md:to-black/10"
            />
        </div>
    );
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function CompanyJourney() {
    const [activeIndex, setActiveIndex] = useState<number | -1>(-1);

    const handleActivate = useCallback((index: number | -1) => {
        setActiveIndex(index);
    }, []);

    return (
        <Section className="relative bg-black pb-0!">
            {/* Sticky background — rendered first so it sits behind content */}
            <Container className="mb-12">
                <SectionHeader className="text-white justify-between w-full">
                    <Heading>Our Journey</Heading>
                    <Description className="md:text-end text-gray-300">{`Since 2002, we have combined traditional craftsmanship\nwith modern technology to deliver world-class manufacturing.`}</Description>
                </SectionHeader>
            </Container>
            <StickyBackground activeIndex={activeIndex} />

            {/* Scrollable content flows over the sticky bg */}
            <div className=" relative z-10">


                <Container className="pb-24">
                    {milestones.map((milestone, i) => (
                        <MilestoneRow
                            key={milestone.year}
                            milestone={milestone}
                            index={i}
                            onActivate={handleActivate}
                        />
                    ))}
                </Container>

            </div>
        </Section>
    );
}
