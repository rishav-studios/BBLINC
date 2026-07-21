"use client"
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Description, Heading, SectionHeader } from "@/components/shared/SectionHeader";
import { INDUSTRIES_DATA } from "@/constants/industries_data";
import { motion } from "motion/react";
import { SectorsSection } from "./IndustrySection";

export default function Sectors() {
    return (
        <Section className="py-0! bg-white">

            <Container className="space-y-8 py-16">


                <SectionHeader className="w-full justify-between ">
                    <Heading>Industries</Heading>
                    <Description className="md:text-end">{`We serve a wide range of industries,\nproviding tailored solutions to meet their unique needs.`}</Description>
                </SectionHeader>
            </Container>

            <div
                className="absolute h-16 w-full z-10 mask-[linear-gradient(right,transparent,white_20%,white_80%,transparent)]" />
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{
                    once: true
                }}
                transition={{
                    duration: 0.7,
                    ease: "easeInOut"
                }}
            >

                <SectorsSection
                    sectors={INDUSTRIES_DATA}
                    scrollHeightPerSector="150vh"   // increase for slower scrubbing
                />
            </motion.div>

            {/* ...other sections below... */}

        </Section>
    );
}
