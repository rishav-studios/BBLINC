"use client";

import { Arrow, CustomLink } from "@/components/shared/clickables/CustomLink";
import type { Material } from "@/constants/materials_data";
import { motion, type Variants } from "motion/react";
import { useState } from "react";

type HeroMaterialCardProps = {
    material: Material;
};

const heroVariants: Variants = {
    hidden: { opacity: 0, x: -40, scale: 0.97 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 18,
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

const childVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
};

export const HeroMaterialCard = ({ material }: HeroMaterialCardProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            variants={heroVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 cursor-pointer col-span-1 row-span-2 md:row-span-3"
            style={{
                background: `linear-gradient(160deg, ${material.gradientFrom} 0%, ${material.gradientTo} 100%)`,
                minHeight: "460px",
            }}
        >
            {/* Noise texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundSize: "200px 200px",
                }}
            />

            {/* Radial glow highlight top-right */}
            <div
                className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-50 pointer-events-none"
                style={{ backgroundColor: material.accent }}
            />

            {/* Top accent border */}
            <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ backgroundColor: material.accent }}
            />

            {/* "Featured" badge */}
            <motion.div
                variants={childVariants}
                className="absolute top-5 right-5 flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[9px] uppercase tracking-widest font-semibold"
                style={{
                    borderColor: `${material.accent}70`,
                    color: material.textColor,
                    backgroundColor: `${material.accent}20`,
                }}
            >
                <span className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: material.accent }} />
                Featured
            </motion.div>

            <div className="relative p-7 flex flex-col h-full justify-between">
                {/* Symbol block */}
                <motion.div variants={childVariants}>
                    <span
                        className="font-display text-[clamp(4rem,10vw,6rem)] font-bold leading-none tracking-tight"
                        style={{ color: material.accent, textShadow: `0 0 60px ${material.accent}60` }}
                    >
                        {material.symbol}
                    </span>
                    <span
                        className="block font-mono text-xs tracking-[0.3em] uppercase mt-1 opacity-50"
                        style={{ color: material.textColor }}
                    >
                        {material.tag}
                    </span>
                </motion.div>

                {/* Content */}
                <div className="flex flex-col gap-4">
                    {/* Name */}
                    <motion.h3
                        variants={childVariants}
                        className="font-display text-[clamp(2rem,4vw,2.8rem)] font-bold leading-tight tracking-tight"
                        style={{ color: material.textColor }}
                    >
                        {material.name}
                    </motion.h3>

                    {/* Divider */}
                    <motion.div
                        variants={childVariants}
                        className="w-12 h-px opacity-40"
                        style={{ backgroundColor: material.accent }}
                    />

                    {/* Description */}
                    <motion.p
                        variants={childVariants}
                        className="text-sm leading-relaxed max-w-xs opacity-70"
                        style={{ color: material.textColor }}
                    >
                        {material.shortDescription}
                    </motion.p>

                    {/* Properties */}
                    <motion.div variants={childVariants} className="flex flex-wrap gap-2">
                        {material.properties.map((prop) => (
                            <span
                                key={prop}
                                className="text-[10px] uppercase tracking-widest font-medium px-3 py-1 rounded-full border"
                                style={{
                                    borderColor: `${material.accent}60`,
                                    color: material.textColor,
                                    backgroundColor: `${material.accent}20`,
                                }}
                            >
                                {prop}
                            </span>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        variants={childVariants}
                        className="pt-2"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <CustomLink
                            href={`/materials/${material.id}`}
                            variant="button-white"
                            className="w-max hover:bg-primary hover:text-white transition-colors duration-300"
                        >
                            Explore {material.name}
                            <Arrow variant={hovered ? "white" : "primary"} />
                        </CustomLink>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};
