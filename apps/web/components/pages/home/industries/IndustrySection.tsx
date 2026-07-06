"use client";

import Container from "@/components/layout/Container";
import { StickyItem } from "@/components/layout/Sticky";
import { Background } from "./Background";
import { IndustryCard, type Industry } from "./IndustryCard";
import { IndustryNav } from "./IndustryNav";
import { useIndustryScroll } from "./UseIndustryScroll";


type SectorsSectionProps = {
    sectors: Industry[];
    scrollHeightPerSector?: string;
};

export const SectorsSection = ({
    sectors,
    scrollHeightPerSector = "200vh",
}: SectorsSectionProps) => {
    const { containerRef, activeIndex, IndustryProgress } = useIndustryScroll(sectors);

    const activeIndustry = sectors[activeIndex]!;
    const totalHeight = `calc(${scrollHeightPerSector} * ${sectors.length})`;

    // Preload adjacent sector videos before the user reaches them.
    // The browser sees the <link rel="preload"> tags and starts downloading
    // in the background while the user is still on the current sector.
    const prevIndustry = sectors[activeIndex - 1];
    const nextIndustry = sectors[activeIndex + 1];

    return (
        <section
            ref={containerRef}
            style={{ height: totalHeight }}
            className="relative w-full"
            aria-label="Industries we serve"
        >
            {/* ── Preload adjacent videos ── */}
            {prevIndustry && (
                <link rel="preload" as="video" href={prevIndustry.videoSrc} />
            )}
            {nextIndustry && (
                <link rel="preload" as="video" href={nextIndustry.videoSrc} />
            )}

            <StickyItem className="overflow-hidden">

                {/* ── Layer 1: Video background ── */}
                <Background
                    key={activeIndustry.id}
                    sectorKey={activeIndustry.id}
                    src={activeIndustry.videoSrc}
                    poster={activeIndustry.posterSrc}
                    scrollProgress={IndustryProgress}
                />

                {/* ── Layer 2: Content card ── */}
                <div className="absolute inset-0 flex items-center bg-black/60 md:bg-transparent md:bg-linear-to-r from-transparent via-black/60 to-black/80">
                    <Container>
                        <IndustryCard
                            Industry={activeIndustry}
                            isVisible={true}
                        />
                    </Container>
                </div>

                {/* ── Layer 3: Right-edge dot nav ── */}
                <IndustryNav sectors={sectors} activeIndex={activeIndex} />

                {/* ── Layer 4: Sector counter bottom-left ── */}
                <div className="absolute bottom-10 left-12 md:left-20  z-10 flex items-baseline gap-2">
                    <span className="font-display text-5xl text-background leading-none">
                        {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="text-background/80 text-sm">
                        / {String(sectors.length).padStart(2, "0")}
                    </span>
                </div>

                {/* ── Layer 5: Scroll progress bar bottom ── */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10">
                    <div
                        className="h-full bg-brass transition-all duration-100"
                        style={{
                            width: `${((activeIndex + IndustryProgress) / sectors.length) * 100}%`,
                        }}
                    />
                </div>
            </StickyItem>
        </section>
    );
};