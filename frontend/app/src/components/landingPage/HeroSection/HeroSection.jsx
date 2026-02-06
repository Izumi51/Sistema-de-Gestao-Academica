import styles from "./HeroSection.module.css"
import HeroImg from '@/assets/heroSectionImg.png'
import { BlueButton } from '@/components/shared/BlueButton/BlueButton'

export function HeroSection(){
    return(
        <section className= {styles.heroSection}>
                <div>
                    <h1>Organize sua instituição com <span>IA</span> que automatiza rotinas e melhora a comunicação.</h1>
                    <h2>Atendimento automatizado, gestão de turmas, avaliações, frequência e painéis analíticos — tudo em um só sistema.</h2>
                    <BlueButton to="/login" text="Comece Agora!"/>
                </div>
                <img src={HeroImg} alt="imagem temporária" />
        </section>
    )
}