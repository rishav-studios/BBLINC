"use client";

import { motion, type Variants } from "motion/react";
import type { Material } from "./materialsData";

type MaterialCardProps = {
    material: Material;
    index: number;
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 60,
            damping: 18,
            delay: i * 0.07,
        },
    }),
};

export const MaterialCard = ({ material, index }: MaterialCardProps) => {
    return (
        <motion.div
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 cursor-pointer select-none"
            style={{
                background: `linear-gradient(135deg, ${material.gradientFrom} 0%, ${material.gradientTo} 100%)`,
            }}
        >
            {/* Noise texture overlay for metallic feel */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundSize: "200px 200px",
                }}
            />

            {/* Glow on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{
                    boxShadow: `inset 0 0 30px 0 ${material.accent}40`,
                }}
            />

            {/* Top accent border */}
            <div
                className="absolute top-0 left-0 right-0 h-[1.5px] rounded-t-2xl transition-all duration-500 group-hover:opacity-100 opacity-60"
                style={{ backgroundColor: material.accent }}
            />

            <div className="relative p-5 flex flex-col h-full min-h-[160px] justify-between">
                {/* Top row: symbol + tag */}
                <div className="flex items-start justify-between">
                    <div>
                        <span
                            className="font-display text-4xl font-bold leading-none tracking-tight"
                            style={{ color: material.accent }}
                        >
                            {material.symbol}
                        </span>
                        <span
                            className="block text-[10px] font-mono mt-0.5 tracking-widest uppercase opacity-50"
                            style={{ color: material.textColor }}
                        >
                            {material.tag}
                        </span>
                    </div>

                    {/* Hover arrow */}
                    <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-60 -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                        style={{ color: material.textColor }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                </div>

                {/* Bottom: name + property chip */}
                <div>
                    <p
                        className="font-display text-xl font-semibold leading-none mb-3 tracking-tight"
                        style={{ color: material.textColor }}
                    >
                        {material.name}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                        {material.properties.slice(0, 2).map((prop) => (
                            <span
                                key={prop}
                                className="text-[9px] uppercase tracking-widest font-medium px-2 py-0.5 rounded-full border"
                                style={{
                                    borderColor: `${material.accent}60`,
                                    color: material.textColor,
                                    backgroundColor: `${material.accent}18`,
                                }}
                            >
                                {prop}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
