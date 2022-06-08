import Link from "next/link";

import styles from '../styles/Navbar.module.css';

export default function Navbar() {

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <h1>List Profiles</h1>
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href='/'><a>Início</a></Link>
                </li>
                <li>
                    <Link href='/about'><a>Sobre</a></Link>
                </li>
            </ul>
        </nav>
    )
}