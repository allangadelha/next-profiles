import { CSVLink } from "react-csv";

import Card from '../components/Card';
import styles from '../styles/Home.module.css'
import dataProfiles from '../db.json'

export default function Home({profiles}) {

  let newProfiles = dataProfiles.profiles
  return (
    <>
      <div className={styles.title}>
        <h1>Perfis | {newProfiles[0].name}</h1>
      </div>
      <div className={styles.profile_container}>
          {
          newProfiles.map((profile) => (
            <Card key={profile.id} profile={profile}/>
          ))}
      </div>
      <div>
        <CSVLink
          data={newProfiles}
          className={styles.btn_csv}
          filename="allangadelha.csv"
          target="_blank"
        >Ver perfis em CSV!</CSVLink>
      </div>
    </>
  )
}
