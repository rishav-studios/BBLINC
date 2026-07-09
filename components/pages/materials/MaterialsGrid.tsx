"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Description, Heading, SectionHeader } from "@/components/shared/SectionHeader";
import { motion } from "motion/react";
import Link from "next/link";
import type { Material } from "../home/materials/materialsData";

// ── Metallic noise texture ────────────────────────────────────────────────────
const NOISE_BG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

// ── Property chips ────────────────────────────────────────────────────────────
function Chips({ properties, accent, textColor, max }: {
    properties: string[];
    accent: string;
    textColor: string;
    max?: number;
}) {
    const list = max ? properties.slice(0, max) : properties;
    return (
        <div className="flex flex-wrap gap-1.5">
            {list.map((p) => (
                <span
                    key={p}
                    className="text-[9px] uppercase tracking-widest font-medium px-2 py-0.5 rounded-full border"
                    style={{ borderColor: `${accent}55`, color: textColor, backgroundColor: `${accent}18` }}
                >
                    {p}
                </span>
            ))}
        </div>
    );
}

// ── Shared card shell ─────────────────────────────────────────────────────────
function CardShell({
    m, gridClass, children, angle = 145, delay = 0,
}: {
    m: Material;
    gridClass: string;
    children: React.ReactNode;
    angle?: number;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 55, damping: 18, delay }}
            whileHover={{ y: -4, scale: 1.015 }}
            className={`group relative overflow-hidden rounded-2xl border border-white/8 cursor-pointer ${gridClass}`}
            style={{ background: `linear-gradient(${angle}deg, ${m.gradientFrom} 0%, ${m.gradientTo} 100%)` }}
        >
            {/* Click overlay */}
            <Link href={`/materials/${m.id}`} className="absolute inset-0 z-10" aria-label={`Explore ${m.name}`} />

            {/* Noise */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.045]"
                style={{ backgroundImage: NOISE_BG, backgroundSize: "200px 200px" }} />

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] rounded-t-2xl"
                style={{ backgroundColor: m.accent }} />

            {/* Inner glow on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ boxShadow: `inset 0 0 40px 0 ${m.accent}28` }}
            />

            {/* Hover arrow */}
            <svg
                className="absolute top-5 right-5 w-4 h-4 opacity-0 group-hover:opacity-50 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 z-2"
                style={{ color: m.textColor }}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>

            {children}
        </motion.div>
    );
}

// ── Symbol block (reused across tile types) ───────────────────────────────────
function Symbol({ m, size = "md" }: { m: Material; size?: "sm" | "md" | "lg" | "xl" }) {
    const textSize = { sm: "text-3xl", md: "text-4xl", lg: "text-5xl", xl: "text-[clamp(4rem,8vw,5.5rem)]" }[size];
    return (
        <div>
            <span
                className={`font-display font-bold leading-none tracking-tight ${textSize}`}
                style={{ color: m.accent, textShadow: size === "xl" ? `0 0 60px ${m.accent}55` : undefined }}
            >
                {m.symbol}
            </span>
            <span className="block font-mono text-[10px] tracking-[0.24em] uppercase mt-0.5 opacity-40"
                style={{ color: m.textColor }}>
                {m.tag}
            </span>
        </div>
    );
}

// ────────────────────────────────────────────────────────────────────────────
// TILE VARIANTS
// ────────────────────────────────────────────────────────────────────────────

/**
 * HERO — [0] Brass
 * Spans 3 columns. Horizontal split: big symbol left, content right.
 * Row height: 1 row (~200px baseline)
 */
function HeroTile({ m, delay }: { m: Material; delay: number }) {
    return (
        <CardShell m={m} angle={120} delay={delay}
            gridClass="col-span-1 lg:col-span-3 min-h-[220px]">
            {/* Radial glow */}
            <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full opacity-20 group-hover:opacity-35
                            transition-opacity duration-500 blur-3xl pointer-events-none"
                style={{ backgroundColor: m.accent }} />

            <div className="relative z-1 p-7 h-full flex flex-col md:flex-row md:items-end gap-8">
                {/* Symbol — very large */}
                <div className="shrink-0">
                    <span
                        className="font-display font-bold leading-none tracking-tight text-[clamp(5rem,10vw,7rem)]"
                        style={{ color: m.accent, textShadow: `0 0 80px ${m.accent}60` }}
                    >
                        {m.symbol}
                    </span>
                    <span className="block font-mono text-xs tracking-[0.3em] uppercase mt-1 opacity-35"
                        style={{ color: m.textColor }}>
                        {m.tag}
                    </span>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px self-stretch opacity-15 my-2"
                    style={{ backgroundColor: m.accent }} />

                {/* Content */}
                <div className="flex flex-col gap-3 justify-end flex-1">
                    <h3 className="font-display font-bold text-[clamp(1.6rem,3vw,2.4rem)] leading-tight"
                        style={{ color: m.textColor }}>
                        {m.name}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-55 max-w-sm line-clamp-2"
                        style={{ color: m.textColor }}>
                        {m.shortDescription}
                    </p>
                    <Chips properties={m.properties} accent={m.accent} textColor={m.textColor} />
                </div>
            </div>
        </CardShell>
    );
}

/**
 * SMALL — [1] Aluminium, [3] Bronze, [5] Stainless Steel
 * Single 1×1 cell. Compact: symbol top, name+2 chips bottom.
 */
function SmallTile({ m, delay }: { m: Material; delay: number }) {
    return (
        <CardShell m={m} angle={135} delay={delay}
            gridClass="col-span-1 min-h-[200px]">
            <div className="relative z-1 p-5 h-full flex flex-col justify-between">
                <Symbol m={m} size="md" />
                <div className="flex flex-col gap-2">
                    <p className="font-display text-xl font-semibold leading-none"
                        style={{ color: m.textColor }}>
                        {m.name}
                    </p>
                    <Chips properties={m.properties} accent={m.accent} textColor={m.textColor} max={2} />
                </div>
            </div>
        </CardShell>
    );
}

/**
 * TALL — [2] Copper
 * 1 column, spans 2 rows. Vertical: symbol + full description + all chips.
 */
function TallTile({ m, delay }: { m: Material; delay: number }) {
    return (
        <CardShell m={m} angle={160} delay={delay}
            gridClass="col-span-1 lg:row-span-2 min-h-[420px]">
            {/* Glow bottom-left */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full opacity-25 blur-3xl pointer-events-none"
                style={{ backgroundColor: m.accent }} />

            <div className="relative z-1 p-6 h-full flex flex-col justify-between">
                <Symbol m={m} size="lg" />
                <div className="flex flex-col gap-3">
                    <h3 className="font-display text-2xl font-bold leading-tight"
                        style={{ color: m.textColor }}>
                        {m.name}
                    </h3>
                    <div className="w-8 h-px opacity-25" style={{ backgroundColor: m.accent }} />
                    <p className="text-sm leading-relaxed opacity-55 line-clamp-4"
                        style={{ color: m.textColor }}>
                        {m.shortDescription}
                    </p>
                    <Chips properties={m.properties} accent={m.accent} textColor={m.textColor} />
                </div>
            </div>
        </CardShell>
    );
}

/**
 * BIG — [4] Mild Steel
 * 2 columns wide, spans 2 rows. Generous space for full content.
 */
function BigTile({ m, delay }: { m: Material; delay: number }) {
    return (
        <CardShell m={m} angle={130} delay={delay}
            gridClass="col-span-1 lg:col-span-2 lg:row-span-2 min-h-[420px]">
            {/* Radial glow top-right */}
            <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full opacity-20 group-hover:opacity-35
                            transition-opacity duration-500 blur-3xl pointer-events-none"
                style={{ backgroundColor: m.accent }} />

            <div className="relative z-1 p-7 h-full flex flex-col justify-between">
                <Symbol m={m} size="xl" />
                <div className="flex flex-col gap-4">
                    <h3 className="font-display font-bold text-[clamp(2rem,3.5vw,2.6rem)] leading-tight"
                        style={{ color: m.textColor }}>
                        {m.name}
                    </h3>
                    <div className="w-10 h-px opacity-25" style={{ backgroundColor: m.accent }} />
                    <p className="text-sm leading-relaxed opacity-55 max-w-sm"
                        style={{ color: m.textColor }}>
                        {m.shortDescription}
                    </p>
                    <Chips properties={m.properties} accent={m.accent} textColor={m.textColor} />
                </div>
            </div>
        </CardShell>
    );
}

/**
 * HORIZONTAL — [6] Gun Metal, [7] Titanium
 * 2 columns wide, 1 row. Side-by-side: symbol | divider | name+desc | chips.
 */
function HorizontalTile({ m, delay }: { m: Material; delay: number }) {
    return (
        <CardShell m={m} angle={110} delay={delay}
            gridClass="col-span-1 lg:col-span-2 min-h-[180px]">
            {/* Wide glow — left */}
            <div className="absolute -left-8 top-0 bottom-0 w-40 opacity-15 group-hover:opacity-25
                            transition-opacity duration-500 blur-3xl pointer-events-none"
                style={{ backgroundColor: m.accent }} />

            <div className="relative z-1 p-6 h-full flex items-center gap-6">
                <div className="shrink-0">
                    <Symbol m={m} size="lg" />
                </div>

                <div className="w-px self-stretch opacity-15" style={{ backgroundColor: m.accent }} />

                <div className="flex flex-col gap-2 min-w-0 flex-1">
                    <p className="font-display text-2xl font-bold leading-tight"
                        style={{ color: m.textColor }}>
                        {m.name}
                    </p>
                    <p className="text-xs leading-relaxed opacity-50 line-clamp-2"
                        style={{ color: m.textColor }}>
                        {m.shortDescription}
                    </p>
                </div>

                <div className="shrink-0 hidden sm:block">
                    <Chips properties={m.properties} accent={m.accent} textColor={m.textColor} />
                </div>
            </div>
        </CardShell>
    );
}

// ────────────────────────────────────────────────────────────────────────────
// GRID
//
// Desktop (lg, 4-col) bento layout — identical spirit to reference image:
//
//  col:  1      2      3      4
//  row1: [Brass  ——— 3col ———] [Al ]
//  row2: [Cu ] [Br ] [MildSt  2×2 ]
//  row3: [Cu ] [SS ] [MildSt      ]
//  row4: [GunMetal 2col] [Titanium 2col]
//
// [0] Brass      → HeroTile       (col-span-3)
// [1] Aluminium  → SmallTile      (col-span-1)
// [2] Copper     → TallTile       (col-span-1, row-span-2)
// [3] Bronze     → SmallTile      (col-span-1)
// [4] Mild Steel → BigTile        (col-span-2, row-span-2)
// [5] Stainless  → SmallTile      (col-span-1)
// [6] Gun Metal  → HorizontalTile (col-span-2)
// [7] Titanium   → HorizontalTile (col-span-2)
// ────────────────────────────────────────────────────────────────────────────

export default function MaterialsGrid({ materials }: { materials: Material[] }) {
    const [brass, aluminium, copper, bronze, mildSteel, stainless, gunMetal, titanium] = materials;

    return (
        <Section className="bg-background" aria-label="All materials">
            <Container className="space-y-12">

                {/* Section header */}
                <SectionHeader className="w-full justify-between">
                    <Heading>Our Materials</Heading>
                    <Description className="text-end">
                        {
                            `Eight precision alloys.\nEvery one selected for machinability, durability, and exacting performance.`
                        }
                    </Description>
                </SectionHeader>

                {/* Bento grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:auto-rows-[minmax(210px,auto)]">
                    <HeroTile m={brass!} delay={0.00} />
                    <SmallTile m={aluminium!} delay={0.07} />
                    <TallTile m={copper!} delay={0.10} />
                    <SmallTile m={bronze!} delay={0.14} />
                    <BigTile m={mildSteel!} delay={0.17} />
                    <SmallTile m={stainless!} delay={0.21} />
                    <HorizontalTile m={gunMetal!} delay={0.24} />
                    <HorizontalTile m={titanium!} delay={0.28} />
                </div>

            </Container>
        </Section>
    );
}
