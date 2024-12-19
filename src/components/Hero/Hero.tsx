'use client'
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { GrDocumentPdf } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";

export default function Hero() {
    return (
        <>
            <section className="min-h-halfdh bg-slate-800 hero">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="container flex flex-col p-4 lg:flex-row-reverse lg:items-center lg:justify-between">
                    {/* Image */}
                    <div className="max-w-sm mx-auto mb-4 lg:mx-0 imgContainer aspect-square">
                        <img
                            src="https://picsum.photos/400"
                            className="rounded-full shadow-2xl"
                        />
                    </div>
                    {/* Type Animation */}
                    <div>
                        <h1 className="min-h[115px] text-hero text-nowrap mb-6">
                            <span className="text-primary">
                                👋 Hi, I'm<br></br>
                            </span>
                            <TypeAnimation
                                sequence={[
                                    "Michael",
                                    5000,
                                    "a Web Developer",
                                    3000,
                                    "a Web Designer",
                                    3000,
                                    "a Photographer",
                                    3000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h1>
                        {/* CTA */}
                        <div className="flex flex-wrap gap-4">
                            <button className="rounded-full text-button btn btn-primary">
                                <MdAlternateEmail />
                                Hire Me
                            </button>
                            <button className="rounded-full text-button btn">
                                <GrDocumentPdf />
                                Download CV
                            </button>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}