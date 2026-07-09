"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Description, Heading, SectionHeader, Separator } from "@/components/shared/SectionHeader";
import { motion, type Variants } from "motion/react";

const values = [
    {
        title: "Precision",
        description: "Every micron is intentional. We hold tolerances others won't touch — consistently, at volume.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 3L17.5 10H25L19 15l2.5 8L14 19l-7.5 4L9 15 3 10h7.5L14 3z" />
            </svg>
        ),
    },
    {
        title: "Innovation",
        description: "Continuously investing in next-generation CNC machining, tooling, and quality control systems.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 4a8 8 0 0 1 5.66 13.66L18 19v2H10v-2l-1.66-1.34A8 8 0 0 1 14 4z" />
                <line x1="10" y1="23" x2="18" y2="23" />
                <line x1="11" y1="25" x2="17" y2="25" />
            </svg>
        ),
    },
    {
        title: "Partnership",
        description: "We don't just fulfil orders — we become a long-term extension of our clients' supply chain.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 16l4-4 4 4 4-4 4 4 4-4" />
                <line x1="2" y1="12" x2="26" y2="12" />
            </svg>
        ),
    },
] as const;

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { type: "spring", stiffness: 55, damping: 18, delay: i * 0.1 },
    }),
};

export default function CoreValues() {
    return (
        <Section className="bg-white">
            <Container className="space-y-14">

                <SectionHeader >
                    <Heading>Core Values</Heading>
                    <Separator />
                    <Description>
                        {`The principles that have guided every decision \nsince our founding — and every component since our first order.`}
                    </Description>
                </SectionHeader>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {values.map((v, i) => (
                        <motion.div
                            key={v.title}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.22 }}
                            className="group flex flex-col gap-5 p-7 rounded-2xl border border-black/8 bg-white hover:shadow-lg transition-shadow duration-400"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl border border-primary/30 bg-primary/5 flex items-center justify-center text-primary
                                            group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                                {v.icon}
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-semibold">{v.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
                            </div>

                            {/* Bottom accent line — grows on hover */}
                            <div className="mt-auto h-px w-0 group-hover:w-full bg-primary transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>

            </Container>
        </Section>
    );
}
