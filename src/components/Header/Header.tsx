import Image from "next/image"
import Link from "next/link"
import Nav from "./Nav/Nav"

export default function Header() {
    return (
        <header className="navbar bg-base-100">
            <div className="container flex items-center justify-between px-4 mx-auto">
                <Link href={`/`} className="flex items-center gap-4">
                    <h1>
                        <Image src={`/images/logo.svg`} alt="Michael Dam's Logo depicting a wolf howling with a moon background." width={80} height={80} title="Welcome to Michael Dam's Portfolio" />
                    </h1>
                </Link>

                <Nav />
            </div>
        </header>
    )
}