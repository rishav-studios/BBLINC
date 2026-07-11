"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { NumberTicker } from "@/components/shared/NumberTicker";
import { Description, Heading, SectionHeader, Separator } from "@/components/shared/SectionHeader";
import { motion, type Variants } from "motion/react";
import ReactPlayer from "react-player";

const cellVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    }),
};

export const WhyUsSection = () => {
    return (
        <Section className=" bg-gray-100  flex flex-col overflow-hidden">



            <Container className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="mb-10 lg:mb-16">
                    <SectionHeader className=" mt-4">
                        <Heading>Why Choose Us</Heading>
                        <Separator />
                        <Description>{`Precision engineered at scale.\nUncompromising quality in every component.`}</Description>
                    </SectionHeader>
                    {/* Decorative rule */}
                    <div className="h-px w-full bg-linear-to-r from-gray-300 via-gray-200 to-transparent mt-6" />
                </div>

                {/* Grid Layout: 3 cols, 2 rows */}
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 w-full flex-1 min-h-[600px]">

                    {/* Video Block (Spans 2 rows) */}
                    <motion.div
                        custom={0}
                        variants={cellVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="lg:col-span-1 lg:row-span-2 relative rounded-3xl overflow-hidden h-[400px] lg:h-full bg-gray-100 shadow-md border border-gray-200/50"
                    >
                        <ReactPlayer
                            src="https://asteroidmetal.com/videos/video1Officialmuted.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            width={"100%"}
                            height={"100%"}
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay gradient just to make it look premium */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                    </motion.div>

                    {/* Stat 1 */}
                    <motion.div
                        custom={1}
                        variants={cellVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="bg-gray-50 border border-gray-200/60 rounded-3xl p-8 lg:p-10 flex flex-col justify-center items-start shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="text-primary font-display font-bold leading-none mb-4 tracking-tight" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}>
                            <NumberTicker value={10} suffix="+" delay={0.1} />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-2 tracking-tight">Advanced CNC Machines</h3>
                        <p className="text-gray-500 text-sm max-w-xs leading-relaxed">State-of-the-art multi-axis machining centers delivering precision and speed.</p>
                    </motion.div>

                    {/* Stat 2 */}
                    <motion.div
                        custom={2}
                        variants={cellVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="bg-gray-50 border border-gray-200/60 rounded-3xl p-8 lg:p-10 flex flex-col justify-center items-start shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="text-primary font-display font-bold leading-none mb-4 tracking-tight" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}>
                            <NumberTicker value={15000} suffix="+" delay={0.2} />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-2 tracking-tight">Sq Ft Facility Area</h3>
                        <p className="text-gray-500 text-sm max-w-xs leading-relaxed">A modern, climate-controlled manufacturing environment optimized for high-volume production.</p>
                    </motion.div>

                    {/* Stat 3 */}
                    <motion.div
                        custom={3}
                        variants={cellVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="bg-gray-50 border border-gray-200/60 rounded-3xl p-8 lg:p-10 flex flex-col justify-center items-start shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="text-primary font-display font-bold leading-none mb-4 tracking-tight" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}>
                            <NumberTicker value={100000} suffix="+" delay={0.3} />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-2 tracking-tight">Pcs Monthly Capacity</h3>
                        <p className="text-gray-500 text-sm max-w-xs leading-relaxed">Scalable manufacturing capabilities designed to meet aggressive delivery schedules.</p>
                    </motion.div>

                    {/* Stat 4 */}
                    <motion.div
                        custom={4}
                        variants={cellVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="bg-gray-50 border border-gray-200/60 rounded-3xl p-8 lg:p-10 flex flex-col justify-center items-start shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="text-primary font-display font-bold leading-none mb-4 tracking-tight flex items-baseline" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}>
                            <span className="font-sans text-[0.7em] mr-1">±</span><NumberTicker value={5} suffix="μm" delay={0.4} />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-2 tracking-tight">Precision Level</h3>
                        <p className="text-gray-500 text-sm max-w-xs leading-relaxed">Micron-level tolerances achieved consistently across production runs.</p>
                    </motion.div>

                </div>
            </Container>
        </Section>
    );
};

export default WhyUsSection;
