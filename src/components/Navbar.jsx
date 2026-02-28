import { Link } from "react-router"

function Navbar() {
    return (
        <>
            <nav>
                <div id="logo">Xudoyshukur</div>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/about"}>About</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar