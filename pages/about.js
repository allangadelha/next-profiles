import { FaRegCheckSquare } from 'react-icons/fa';
import styles from "../styles/About.module.css";

export default function About() {

    return ( 
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <h2>FullStack Challenge</h2>
            <h2>NextJS + API</h2>
            <hr />
            <ul>
                <li><FaRegCheckSquare /> Criar um array com uma lista de perfis (nome e redes sociais)</li>
                <li><FaRegCheckSquare /> Ser possível exportar os perfis em CSV</li>
                <li><FaRegCheckSquare /> Criar uma rota que retorna cada dado do perfil</li>
                <li><FaRegCheckSquare /> Gerar um QRCode que da acesso a rota com o perfil</li>
                <li><FaRegCheckSquare /> Ser publicado no seu Github em público</li>
                <li><FaRegCheckSquare /> Ser publicado na Vercel</li>
            </ul>
            <h2>Extras</h2>
            <hr />
            <ul>
                <li><FaRegCheckSquare /> design</li>
                <li><FaRegCheckSquare /> criar um storybook com seus componentes</li>
                <li><FaRegCheckSquare /> testes usando jest - testing library</li>
            </ul>

            
        </div>
    )

}