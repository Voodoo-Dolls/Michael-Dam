"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface props {
    value: number
    delay: number
}
export function AnimatedNumber({ value, delay = 1 }: props) {
    const ref = useRef(null)
    const isInView = useInView(ref)
    let spring = useSpring(50, { stiffness: 40, damping: 20 });
    let display = useTransform(spring, (current) =>
        Math.round(current).toLocaleString()
    );

    useEffect(() => {
        if (isInView) {
            setTimeout(() => {
                spring.set(value);
            }, 300 * delay)
        }
    }, [isInView, delay, spring, value]);

    return <motion.span ref={ref}>{display}</motion.span>;
}
