"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type IndustryBackgroundProps = {
    src: string;
    sectorKey: string;
    scrollProgress: number;
    poster?: string;
};

export const Background = ({
    src,
    sectorKey,
    scrollProgress,
    poster,
}: IndustryBackgroundProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // Reset + detect load on every src change
    useEffect(() => {
        setIsLoaded(false); // reset so enter animation fires on sector change

        const video = videoRef.current;
        if (!video) return;

        const handleLoaded = () => setIsLoaded(true);

        if (video.readyState >= 2) {
            setIsLoaded(true);
            return;
        }

        video.addEventListener("loadeddata", handleLoaded);
        return () => video.removeEventListener("loadeddata", handleLoaded);
    }, [src]);

    // Scrub — no lerp, Lenis already smooths the incoming scrollProgress
    useEffect(() => {
        const video = videoRef.current;
        if (!video || !Number.isFinite(video.duration) || !isLoaded) return;

        const targetTime = scrollProgress * video.duration;

        if (Math.abs(video.currentTime - targetTime) > 0.041) {
            video.currentTime = targetTime;
        }
    }, [scrollProgress, isLoaded]);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={sectorKey}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: isLoaded ? 1 : 0, scale: 1 }}
                exit={{
                    opacity: 0,
                    scale: 1.12,
                    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
                <video
                    ref={videoRef}
                    src={src}
                    muted
                    playsInline
                    preload="auto"
                    poster={poster}
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </AnimatePresence>
    );
};