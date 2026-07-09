"use client";

import { motion, useInView, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

type NumberTickerProps = {
    value: number;
    delay?: number;
    className?: string;
    suffix?: string;
    prefix?: string;
};

export const NumberTicker = ({
    value,
    delay = 0,
    className,
    suffix = "",
    prefix = "",
}: NumberTickerProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    const springValue = useSpring(0, {
        stiffness: 45,
        damping: 18,
        mass: 1,
    });

    useEffect(() => {
        if (inView) {
            const timeout = setTimeout(() => {
                springValue.set(value);
            }, delay * 1000);
            return () => clearTimeout(timeout);
        }
    }, [inView, value, delay, springValue]);

    const display = useTransform(springValue, (current) => {
        return Math.round(current).toLocaleString();
    });

    return (
        <span className={className} ref={ref}>
            {prefix}
            <motion.span>{display}</motion.span>
            {suffix}
        </span>
    );
};
