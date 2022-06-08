import Link from 'next/link';
import styles from '../styles/Card.module.css';

export default function Card({profile}) {

    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{profile.social_network}</h3>
            <Link href={`/profile/${profile.id}`}>
                <a className={styles.btn}>Detalhes</a>
            </Link>
        </div>
    )
}