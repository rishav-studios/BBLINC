"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import EyeBrow from "@/components/shared/EyeBrow";
import { motion, type Variants } from "motion/react";

const steps = [
    {
        num: "01",
        title: "Enquiry Received",
        desc: "We confirm receipt of your submission and assign a dedicated project engineer within 24 hours.",
    },
    {
        num: "02",
        title: "Technical Review",
        desc: "Our engineering team assesses feasibility, materials, tolerances, and design-for-manufacturing (DFM) potential.",
    },
    {
        num: "03",
        title: "Quotation Sent",
        desc: "You receive a detailed technical proposal including lead times, volume pricing, and material specifications.",
    },
];

const stepVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1, 
        y: 0,
        transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
};

export default function ProcessSteps() {
    return (
        <Section className="bg-white py-20 min-h-max">
            <Container className="space-y-16">
                
                <div className="flex flex-col items-center text-center gap-4">
                    <EyeBrow text="Process" />
                    <h2 className="text-4xl font-semibold">What Happens Next</h2>
                    <p className="text-gray-500 max-w-lg">
                        Our structured onboarding ensures your requirements are fully understood before a single machine is programmed.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-12 pt-4">
                    {/* Horizontal connecting line (Desktop only) */}
                    <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-px bg-primary/20" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={step.num}
                            custom={i}
                            variants={stepVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative flex flex-col items-center text-center gap-5 z-10"
                        >
                            {/* Number Badge */}
                            <div className="w-14 h-14 rounded-full bg-white border border-primary/30 shadow-[0_0_15px_rgba(0,0,0,0.05)] flex items-center justify-center text-primary font-mono font-medium text-lg tracking-wider">
                                {step.num}
                            </div>
                            
                            {/* Content */}
                            <div className="flex flex-col gap-2">
                                <h3 className="font-semibold text-lg">{step.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed max-w-[280px]">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </Container>
        </Section>
    );
}
