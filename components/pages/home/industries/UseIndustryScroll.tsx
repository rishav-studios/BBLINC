"use client";

import type { Industry } from "@/constants/industries_data";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";

type UseIndustryScrollReturn = {
    containerRef: React.RefObject<HTMLDivElement>;
    activeIndex: number;
    IndustryProgress: number; // 0–1 progress within the current sector
};

/**
 * useSectorScroll
 *
 * Tracks overall scroll progress across the container and maps it to:
 * - activeIndex  → which sector is currently in view
 * - IndustryProgress → how far through that sector (0–1), used to scrub video
 */
export const useIndustryScroll = (sectors: Industry[]): UseIndustryScrollReturn => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [IndustryProgress, setIndustryProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const count = sectors.length;

        // Each sector occupies an equal slice of total scroll range
        const sliceSize = 1 / count;
        const rawIndex = latest / sliceSize;
        const index = Math.min(Math.floor(rawIndex), count - 1);

        // Progress within the current slice: 0 → 1
        const progress = (rawIndex - index) / 1;

        setActiveIndex(index);
        setIndustryProgress(Math.max(0, Math.min(1, progress)));
    });

    return { containerRef: containerRef as React.RefObject<HTMLDivElement>, activeIndex, IndustryProgress };
};