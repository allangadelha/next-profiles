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
    <div className={styles.container}>
      <h1>Perfis</h1>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>{profile.id}</li>
        ))}
      </ul>
    </div>
  )
}
