'use client'
import Link from "next/link"
import routes from "./routes"
import { motion } from "motion/react"
import { useMediaQuery } from "react-responsive"
import { useEffect } from "react"
export default function Nav({ open }: { open: boolean }) {
    const isDesktop = useMediaQuery({
        query: 'min-width:1024'
    })
    useEffect(() => {
        console.log("Change")
    }, [isDesktop])
    return (
        <motion.nav
            variants={{
                desktop: { height: "auto" },
                closed: { height: "0" },
                open: { height: "auto" }
            }}
            initial={isDesktop ? "desktop" : "closed"}
            animate={open || !isDesktop ? "closed" : "open"}
            className="absolute left-0 z-40 w-full top-full lg:top-0 overflow-clip lg:overflow-visible lg:relative lg:w-fit lg:h-fit"
        >
            <ul className="text-black bg-primary lg:flex ">
                {routes.map((link, index) => {
                    return (
                        <li key={index}>
                            <Link href={link.route} className="block p-4 transition-colors hover:bg-black hover:text-primary">
                                {link.label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </motion.nav>
    )
}