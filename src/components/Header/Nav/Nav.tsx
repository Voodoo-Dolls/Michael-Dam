import Link from "next/link"
import routes from "./routes"
export default function Nav({ open }: { open: boolean }) {


    return (
        <nav
            className={`absolute left-0 z-40 grid w-full transition-all top-full ${open ? "grid-rows-1" : "grid-rows-0"} md:relative md:w-fit md:inline-block`}
        >
            <ul className="overflow-hidden text-black bg-primary md:flex md:overflow-auto md:bg-transparent md:text-white ">
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
        </nav>
    )
}