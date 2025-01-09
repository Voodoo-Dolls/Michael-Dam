'use client'
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion"

interface Props {
    children: JSX.Element
    width?: "fit-content" | "100%"
    delay?: number
}

export const Reveal = ({ children, width = "fit-content", delay = 1 }: Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView, mainControls])
    return (
        <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>

            <motion.div
                variants={
                    {
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }
                }
                initial={"hidden"}
                animate={mainControls}
                transition={{
                    duration: 1,
                    delay: 0.3 * delay,
                    ease: ["easeOut"]
                }}
            >
                {children}
            </motion.div>
        </div>
    )

}