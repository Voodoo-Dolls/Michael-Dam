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
            <section className="bg-black min-h-halfdh hero">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="container flex flex-col p-4 lg:flex-row-reverse lg:items-center lg:justify-between">
                    {/* Image */}
                    <div className="w-full max-w-sm mx-auto mb-4 xl:max-w-xl lg:p-8 lg:mx-0 imgContainer aspect-square">
                        <Image
                            src="https://picsum.photos/400"
                            className="rounded-full shadow-2xl"
                            fill
                            alt=""
                        />
                    </div>
                    <div>
                        <h1 className="min-h[115px] text-hero text-nowrap mb-6">
                            <span className="text-primary">
                                {/* Hand Animation */}
                                <motion.div
                                    animate={{ rotate: [0, 20, 0] }}
                                    transition={{
                                        duration: 3,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatDelay: 0,
                                    }} className="inline-block">
                                    👋
                                </motion.div>
                                Hi, I&apos;m<br></br>
                            </span>
                            {/* Type Animation */}
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
                            <Link href="#contact" className="text-black rounded-full text-button btn bg-primary border-primary hover:text-primary">
                                <MdAlternateEmail />
                                Hire Me
                            </Link>
                            <Link href="#" className="rounded-full text-button btn border-primary text-primary hover:text-black hover:bg-primary">
                                <GrDocumentPdf />
                                Download CV
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}