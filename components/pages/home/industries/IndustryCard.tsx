"use client";

import { Arrow, CustomLink } from "@/components/shared/clickables/CustomLink";
import { Industry } from "@/constants/industries_data";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { useState } from "react";

type IndustryCardProps = {
    Industry: Industry;
    isVisible: boolean;
};
// ── Container: spring-physics entry so it feels physically grounded ──────────
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 55,
            damping: 18,
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.3, ease: "easeIn" },
    },
};

// ── Children: soft fade-up with a natural ease ────────────────────────────────
const childVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
    },
};

// ── Accent line: grows in height from 0 ──────────────────────────────────────
const lineVariants: Variants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
        scaleY: 1,
        opacity: 1,
        transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1], delay: 0.1 },
    },
    exit: {
        scaleY: 0,
        opacity: 0,
        transition: { duration: 0.25, ease: "easeIn" },
    },
};

/**
 * IndustryCard
 *
 * Premium left-hand detail panel for each Industry.
 * Slides in with spring physics; children stagger softly.
 */
export const IndustryCard = ({ Industry, isVisible }: IndustryCardProps) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <AnimatePresence mode="popLayout">
            {isVisible && (
                <motion.div
                    key={Industry.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="relative z-10 flex flex-col items-end text-end max-w-xl ml-auto"
                >
                    {/* ── Content column ───────────────────────────────── */}

                    {/* Industry label */}
                    <motion.h2
                        variants={childVariants}
                        className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-none text-white uppercase tracking-tight mb-4"
                        style={{ textShadow: "0 2px 32px rgba(0,0,0,0.45)" }}
                    >
                        {Industry.label}
                    </motion.h2>

                    {/* Short divider rule */}
                    <motion.div
                        variants={childVariants}
                        className="w-10 h-px bg-white/35 mb-5 mx-auto"
                    />

                    {/* Description */}
                    <motion.p
                        variants={childVariants}
                        className="text-white/70 text-base leading-relaxed mb-8 max-w-sm"
                    >
                        {Industry.description}
                    </motion.p>

                    {/* Stats row */}
                    <motion.div
                        variants={childVariants}
                        className="flex justify-center gap-6 mb-9"
                    >
                        {Industry.stats.map((stat) => (
                            <div
                                key={stat.unit}
                                className="flex flex-col items-center px-3 border-x border-white/20 first:border-l-0 last:border-r-0"
                            >
                                <span className="font-display text-3xl leading-none text-white">
                                    {stat.value}
                                </span>
                                <span className="text-white/45 text-[0.65rem] uppercase tracking-widest mt-1.5">
                                    {stat.unit}
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        variants={childVariants}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                        className="w-max"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <CustomLink
                            href={`/industries/${Industry.slug}`}
                            variant="button-white"
                            className="w-max hover:bg-primary hover:text-background transition-colors duration-300">

                            Explore Industry
                            <Arrow variant={isHovered ? "white" : "primary"} />

                        </CustomLink>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};