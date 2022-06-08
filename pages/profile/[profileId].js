import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

import styles from '../../styles/Profile.module.css';

export async function getStaticPaths() {

    const api = 'http://localhost:4000/profiles';

    const res = await fetch(`${api}`);
    const data = await res.json();

    const paths = data.map((profile, index) => {

        return {
            params: { profileId: (index + 1).toString() }
        }
    })

    return {
        paths,
        fallback: false
    }

}


export async function getStaticProps(context) {
    
    const id = context.params.profileId;
    
    const api = 'http://localhost:4000/profiles';
    const res = await fetch(`${api}/${id}`);
    const data = await res.json();
    
    return {
        props: {
            profile: data
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
            <div className={styles.data_container}>
                <Link href="/">
                    <a className={styles.btn}>Voltar ao início</a>
                </Link>
            </div>
        </div>
    )

}