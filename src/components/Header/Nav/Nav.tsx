import Link from "next/link"
import routes from "./routes"
import styles from "./Nav.module.css"
export default function Nav({ open }: { open: boolean }) {


    return (
        <nav
            // className={`absolute left-0 z-40 w-full top-full lg:top-0 overflow-clip lg:overflow-visible lg:relative lg:w-fit lg:h-fit`}
            className={styles.nav}
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
        </nav>
    )
}