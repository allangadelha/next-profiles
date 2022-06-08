import Card from '../components/Card';
import styles from '../styles/Home.module.css'

export async function getStaticProps() {

  const api = 'http://localhost:4000/profiles';

  const res = await fetch(`${api}`);
  const data = await res.json();

  console.log(data);

  return {
    props: {
      profiles: data
    }
  }

}

export default function Home({profiles}) {
  return (
    <>
      <div className={styles.title}>
        <h1>Perfis | {profiles[0].name}</h1>
      </div>
      <div className={styles.profile_container}>
          {profiles.map((profile) => (
            <Card key={profile.id} profile={profile}/>
          ))}
      </div>
    </>
  )
}
