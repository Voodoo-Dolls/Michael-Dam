'use client'
import Image from "next/image"
import Link from "next/link"
import Nav from "./Nav/Nav"
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { useState } from "react"

export default function Header() {
    const [open, setOpen] = useState(false)
    return (
        <header className="sticky top-0 z-50 bg-black navbar">
            <div className="container flex items-center justify-between px-4 mx-auto">
                <Link href={`/`} className="flex items-center gap-4">
                    <h1>
                        <Image src={`/images/logo.svg`} alt="Michael Dam's Logo depicting a wolf howling with a moon background." width={80} height={80} title="Welcome to Michael Dam's Portfolio" />
                    </h1>
                </Link>
                {/* Hamburger */}
                <div className="text-[48px] cursor-pointer p-2 lg:hidden" onClick={() => (setOpen(!open))}>
                    {open ? <IoMenu /> : <IoClose />}
                </div>
                {/* Nav */}
                <Nav open={open} />
            </div>
        </header>
    )
}