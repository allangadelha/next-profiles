export async function getStaticPaths() {

    const api = 'http://localhost:4000/profiles';
  
    const res = await fetch(`${api}`);
    const data = await res.json();

    console.log(data)
  
    const paths = data.map((profile, index) => {
        
        return {
            params: { profileId: (index + 1).toString()}
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


export default function Profile({profile}) {

    return (
        <>
            <p>Nome: {profile.name}</p>
            <p>Rede Social: {profile.social_network}</p>
            <p>Link de Acesso: {profile.link}</p>
        </>
    )

}