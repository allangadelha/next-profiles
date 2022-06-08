import styles from '../styles/Footer.module.css';

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <p>
                <span>Next Profiles</span> | &copy; { new Date().getFullYear() }
            </p>
        </footer>
    )
}