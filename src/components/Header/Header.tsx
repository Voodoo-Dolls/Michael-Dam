import Link from "next/link"

export default function Header() {
    return (
        <header className="navbar bg-base-100">
            <div className="container px-4 mx-auto">
                <Link href={`/`}>
                    <h1>Michael Dam</h1>
                </Link>

            </div>
        </header>
    )
}