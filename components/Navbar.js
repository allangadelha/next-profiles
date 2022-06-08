import Link from "next/link";

export default function Navbar() {

    return (
        <nav>
            <div>
                <h1>List Profiles</h1>
            </div>
            <ul>
                <li>
                    <Link href='/'><a>Home</a></Link>
                </li>
                <li>
                    <Link href='/about'><a>About</a></Link>
                </li>
            </ul>
        </nav>
    )
}