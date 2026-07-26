"use client";

import Fade from "@/components/animations/Fade";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Description, Heading, SectionHeader } from "@/components/shared/SectionHeader";
import { MATERIALS_DATA as materials } from "@/constants/materials_data";
import useIsMobile from "@/hooks/useIsMobile";
import { cn } from "@bbl/ui/lib/utils";
import { useState } from "react";

// ─── Arrow icon ───────────────────────────────────────────────────────────────
const ArrowRight = ({ className }: { className?: string }) => (
    <svg
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

// ─── Main section ─────────────────────────────────────────────────────────────
const MaterialsSection = () => {
    const isMobile = useIsMobile()
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(isMobile ? null : 0) // brass is default selected.on screen bigger than lg (1024px);

    return (
        <Section
            aria-label="Materials we work with"
            className=" flex flex-col relative overflow-hidden py-20 lg:py-24 text-white"
        >
            {/* ── Layer 0: Background gradient crossfades ───────────────── */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Default dark base */}
                <div className="absolute inset-0 bg-[#0A0A0A]" />

                {/* Per-material gradient — crossfades on hover */}
                {materials.map((mat, index) => (
                    <div
                        key={mat.id}
                        className="absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                        style={{
                            opacity: hoveredIndex === index ? 1 : 0,
                            background: isMobile ? "#000" : `linear-gradient(135deg, ${mat.gradientFrom} 0%, ${mat.gradientTo} 100%)`,
                        }}
                    />
                ))}

                {/* Scrim — keeps list text readable */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
                        `,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* ── Layer 1: Floating hover panel (desktop only) ──────────── */}
            <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
                <Container className="h-full relative">
                    {materials.map((mat, index) => {
                        const isActive = hoveredIndex === index;

                        return (
                            <div key={`panel-${mat.id}`} className="absolute inset-0 w-full h-full">

                                {/* Image — appears from below, scales up */}
                                {/* Outer handles centering (no transform), inner handles animation */}
                                <div
                                    className="absolute right-0"
                                    style={{ top: "calc(50% - 175px)" }}
                                >
                                    <div
                                        className={cn(
                                            "w-100 h-87.5 rounded-2xl overflow-hidden shadow-2xl border border-white/10 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                                            isActive
                                                ? "opacity-100 translate-y-0 scale-100"
                                                : "opacity-0 translate-y-10 scale-95"
                                        )}
                                    >
                                        <img
                                            src={mat.imageSrc}
                                            alt={mat.name}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Gradient overlay on image bottom */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                                    </div>
                                </div>

                                {/* Large symbol — slides in from right */}
                                <div
                                    className="absolute"
                                    style={{ right: "440px", top: "calc(50% - 110px)" }}
                                >
                                    <div
                                        className={cn(
                                            "transition-all duration-700 delay-75 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                                            isActive
                                                ? "opacity-100 translate-x-0"
                                                : "opacity-0 translate-x-8"
                                        )}
                                    >
                                        <span
                                            className="font-display font-bold leading-none block"
                                            style={{
                                                fontSize: "clamp(5rem, 9vw, 7.5rem)",
                                                color: mat.accent,
                                                textShadow: `0 0 80px ${mat.accent}50`,
                                            }}
                                        >
                                            {mat.symbol}
                                        </span>
                                        <span
                                            className="font-mono text-xs tracking-[0.3em] uppercase block mt-1 opacity-50"
                                            style={{ color: mat.textColor }}
                                        >
                                            {mat.tag}
                                        </span>
                                    </div>
                                </div>

                                {/* Description + chips — slides up */}
                                <div
                                    className="absolute"
                                    style={{ right: "440px", top: "calc(50% + 20px)", maxWidth: "260px" }}
                                >
                                    <div
                                        className={cn(
                                            "transition-all duration-700 delay-150 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                                            isActive
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-0 translate-y-6"
                                        )}
                                    >
                                        {/* Divider */}
                                        <div
                                            className="w-8 h-px mb-4 opacity-60"
                                            style={{ backgroundColor: mat.accent }}
                                        />

                                        <p
                                            className="text-sm leading-relaxed mb-4"
                                            style={{ color: mat.textColor, opacity: 0.75 }}
                                        >
                                            {mat.shortDescription}
                                        </p>

                                        {/* Property chips */}
                                        <div className="flex flex-wrap gap-2">
                                            {mat.properties.slice(0, 3).map((prop) => (
                                                <span
                                                    key={prop}
                                                    className="text-[9px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full border"
                                                    style={{
                                                        borderColor: `${mat.accent}55`,
                                                        color: mat.textColor,
                                                        backgroundColor: `${mat.accent}18`,
                                                    }}
                                                >
                                                    {prop}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Container>
            </div>

            {/* ── Layer 2: Main interactive content ────────────────────── */}
            <Container className="relative z-20 flex-1 flex flex-col h-full pointer-events-none">

                {/* Section header */}
                <div className="pointer-events-auto mb-10 lg:mb-14">
                    <SectionHeader className="justify-between w-full mt-4">
                        <Heading>Materials</Heading>
                        <Description className="md:text-end text-gray-300">{`From raw ingot to finished component\neight metals, one precision partner.`}</Description>
                    </SectionHeader>
                    {/* Decorative rule */}
                    <div className="h-px w-full bg-linear-to-r from-white/25 via-white/10 to-transparent mt-6" />
                </div>

                {/* ── Desktop: interactive list ── */}
                <div className="hidden lg:flex flex-col w-105 mt-auto pointer-events-auto">
                    <div className="flex flex-col">
                        {materials.map((mat, index) => {
                            const isActive = hoveredIndex === index;

                            return (
                                <Fade key={mat.id}>
                                    <div

                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        className={cn(
                                            "group flex items-center gap-4 py-3.5 px-4 rounded-xl cursor-pointer transition-all duration-300",
                                        )}
                                        style={{
                                            backgroundColor: isActive
                                                ? `${mat.accent}14`
                                                : "transparent",
                                        }}
                                    >
                                        {/* Left accent bar */}
                                        <div
                                            className="shrink-0 w-0.5 rounded-full transition-all duration-300"
                                            style={{
                                                height: isActive ? "30px" : "10px",
                                                backgroundColor: isActive
                                                    ? mat.accent
                                                    : "rgba(255,255,255,0.18)",
                                            }}
                                        />

                                        {/* Material name */}
                                        <span
                                            className={cn(
                                                "font-display tracking-tight leading-none transition-all duration-300",
                                                isActive
                                                    ? "text-[1.9rem]"
                                                    : "text-xl text-white/35 group-hover:text-white/60"
                                            )}
                                            style={{ color: isActive ? mat.textColor : undefined }}
                                        >
                                            {mat.name}
                                        </span>

                                        {/* Tag badge — appears when active */}
                                        <span
                                            className={cn(
                                                "font-mono text-[10px] tracking-widest uppercase transition-all duration-300",
                                                isActive ? "opacity-100" : "opacity-0"
                                            )}
                                            style={{ color: mat.accent }}
                                        >
                                            {mat.tag}
                                        </span>

                                        {/* Arrow indicator */}
                                        <div
                                            className={cn(
                                                "ml-auto shrink-0 transition-all duration-300",
                                                isActive
                                                    ? "opacity-100 translate-x-0"
                                                    : "opacity-0 -translate-x-2"
                                            )}
                                            style={{ color: mat.accent }}
                                        >
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Fade>
                            );
                        })}
                    </div>


                </div>

                {/* ── Mobile: stacked cards ── */}
                <div className="lg:hidden flex flex-col gap-4 pointer-events-auto">
                    {materials.map((mat) => (
                        <div
                            key={mat.id}
                            className="rounded-2xl overflow-hidden border border-white/10"
                            style={{
                                background: `linear-gradient(135deg, ${mat.gradientFrom} 0%, ${mat.gradientTo} 100%)`,
                            }}
                        >
                            {/* Image */}
                            <div className="relative w-full h-44">
                                <img
                                    src={mat.imageSrc}
                                    alt={mat.name}
                                    className="w-full h-full object-cover opacity-55"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                                {/* Symbol overlay */}
                                <span
                                    className="absolute bottom-3 left-5 font-display text-5xl font-bold leading-none"
                                    style={{
                                        color: mat.accent,
                                        textShadow: `0 0 40px ${mat.accent}60`,
                                    }}
                                >
                                    {mat.symbol}
                                </span>
                                <span
                                    className="absolute bottom-4 right-5 font-mono text-xs tracking-widest uppercase opacity-50"
                                    style={{ color: mat.textColor }}
                                >
                                    {mat.tag}
                                </span>
                            </div>

                            {/* Info */}
                            <div className="p-5 pt-4">
                                <h3
                                    className="font-display text-2xl font-bold mb-2 tracking-tight"
                                    style={{ color: mat.textColor }}
                                >
                                    {mat.name}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed mb-3 opacity-70"
                                    style={{ color: mat.textColor }}
                                >
                                    {mat.shortDescription}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {mat.properties.map((prop) => (
                                        <span
                                            key={prop}
                                            className="text-[9px] uppercase tracking-widest font-medium px-2.5 py-1 rounded-full border"
                                            style={{
                                                borderColor: `${mat.accent}55`,
                                                color: mat.textColor,
                                                backgroundColor: `${mat.accent}18`,
                                            }}
                                        >
                                            {prop}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </Container>
        </Section>
    );
};

export default MaterialsSection;
