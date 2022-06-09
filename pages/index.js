import { CSVLink } from "react-csv";

import Card from '../components/Card';
import styles from '../styles/Home.module.css'

export async function getStaticProps() {

  const api = [
    {
      "profiles": [
        {
          "id": 1,
          "name": "Allan Gadelha",
          "social_network": "Github",
          "link": "https://github.com/allangadelha/",
          "image_link": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/GitHub_Mark.png/640px-GitHub_Mark.png"
        },
        {
          "id": 2,
          "name": "Allan Gadelha",
          "social_network": "Facebook",
          "link": "https://www.facebook.com/allan.gadelhaxavier",
          "image_link": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/640px-2021_Facebook_icon.svg.png"
        },
        {
          "id": 3,
          "name": "Allan Gadelha",
          "social_network": "Instagram",
          "link": "https://www.instagram.com/allangadelhaxavier",
          "image_link": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/640px-Instagram-Icon.png"
        },
        {
          "id": 4,
          "name": "Allan Gadelha",
          "social_network": "LinkedIn",
          "link": "https://www.linkedin.com/in/allan-gadelha-xavier-1659b428",
          "image_link": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/640px-Linkedin_icon.svg.png"
        }
      ]
    }
  ];

  const res = await fetch(`${api}`);
  const data = await res.json();

  return {
    props: {
      profiles: data
    }
  }

}

export default function Home({ profiles }) {
  return (
    <>
      <div className={styles.title}>
        <h1>Perfis | {profiles[0].name}</h1>
      </div>
      <div className={styles.profile_container}>
        {profiles.map((profile) => (
          <Card key={profile.id} profile={profile} />
        ))}
      </div>
      <div>
        <CSVLink
          data={profiles}
          className={styles.btn_csv}
          filename="allangadelha.csv"
          target="_blank"
        >Ver perfis em CSV!</CSVLink>
      </div>
    </>
  )
}
