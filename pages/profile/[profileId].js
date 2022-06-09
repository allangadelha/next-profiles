import Image from 'next/image';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';

import styles from '../../styles/Profile.module.css';

import dataProfiles from '../../db.json';

export async function getStaticPaths() {

    const profiles = dataProfiles.profiles;    


    const paths = profiles.map((profile, index) => {

        return {
            params: { profileId: (index + 1).toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}


export function getStaticProps(context) {
    
    const id = context.params.profileId - 1;

    const profiles = dataProfiles.profiles[id]
    
    return {
        props: {
            profile: profiles
        }
    }
    
}

export default function Profile({ profile }) {

    return (
        <div className={styles.profile_container}>
            <h1 className={styles.title}>{profile.name}</h1>
            <p>Rede Social: {profile.social_network}</p>
            <p className={styles.image}>
                <Link href={profile.link}>
                    <a>
                        <Image
                            src={profile.image_link}
                            width="100"
                            height="100"
                            alt={profile.social_network}
                        />
                    </a>
                </Link>
            </p>
            <p><Link href={profile.link}><a>Clique aqui para acessar</a></Link></p>
            <div className={styles.qrcode}>
                <p>Ou leia o QRcode</p>
                <QRCodeSVG value={profile.link} width="110" height="110" />
            </div>
            <div className={styles.data_container}>
                <Link href="/">
                    <a className={styles.btn}>Voltar ao início</a>
                </Link>
            </div>
        </div>
    )

}