
import routes from "./routes"
export default function Nav() {
    return (
        <nav>
            <ul className="">
                {routes.map((link, index) => {
                    return <li>{link.label}</li>
                })}
            </ul>
        </nav>
    )
}