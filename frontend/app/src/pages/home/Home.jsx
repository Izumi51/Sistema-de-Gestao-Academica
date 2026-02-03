import styles from './Home.module.css'
import Logo from '../../assets/logo.png'
import HeroImg from '../../assets/heroSectionImg.png'
import { BlueButton } from '../../components/BlueButton/BlueButton'

export function Home(){
    return(
        <>
            <header>
                <img src={Logo} alt="SmartEducation" />
                <nav>
                    <ul>
                        <li><a href='#recursos'>Recursos</a></li>
                        <li>|</li>
                        <li><a href='#comoFunciona'>Como funciona</a></li>
                        <li>|</li>
                        <li><a href='#sobre'>Sobre</a></li>
                        <li>|</li>
                    </ul>
                    <BlueButton to="/login" text="Acessar Portal"/>
                </nav>
            </header>
            <section className= {styles.heroSection}>
                <div>
                    <h1>Organize sua instituição com <span>IA</span> que automatiza rotinas e melhora a comunicação.</h1>
                    <h2>Atendimento automatizado, gestão de turmas, avaliações, frequência e painéis analíticos — tudo em um só sistema.</h2>
                    <BlueButton to="/login" text="Comece Agora!"/>
                </div>
                <img src={HeroImg} alt="imagem temporária" />
            </section>
        </>
    )
}