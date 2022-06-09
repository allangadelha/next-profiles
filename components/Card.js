import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import {QRCodeSVG} from 'qrcode.react';

import styles from '../styles/Card.module.css';

const baseUrl = "http://localhost:3000";

export function iconSocialNetwork(social_network){
    if(social_network == 'Facebook'){
        return <FaFacebook />
    } else if(social_network == 'Instagram'){
        return <FaInstagram />

    } else if(social_network == 'LinkedIn'){
        return <FaLinkedin />

    } else if(social_network == 'Github'){
        return <FaGithub />

    }
}

export default function Card({profile}) {

    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{profile.social_network}</h3>
            <h3 className={`${styles[profile.social_network]}`}>
                {iconSocialNetwork(profile.social_network)}</h3>
            <Link href={`/profile/${profile.id}`}>
                <a className={styles.btn}>Detalhes</a>
            </Link>
            <div className={styles.qrcode}>
                <QRCodeSVG value={`${baseUrl}/profile/${profile.id}`} width="110" height="110"/>
            </div>
        </div>
    )
}