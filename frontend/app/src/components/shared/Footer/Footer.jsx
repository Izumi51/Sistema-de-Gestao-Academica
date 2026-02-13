import styles from './Footer.module.css'
import Logo from '@/assets/logo.png'

export function Footer(){
    return(
        <footer className={styles.footerSection}>
            <div className={styles.footerCont}>
                <div className={styles.logoBox}>
                    <img src={Logo} alt="" />
                    <p>Sistema inteligente para gestão educacional com automação e IA.</p>
                </div>
                <div className={styles.linkCont}>
                    <ul className={styles.linkBox}>
                        <li><a href="#recursos">Recursos</a></li>
                        <li><a href="#comoFunciona">Como funciona</a></li>
                        <li><a href="#beneficios">Benefícios</a></li>
                        <li><a href="/login">Acessar portal</a></li>
                    </ul>
                    <ul className={styles.linkBox}>
                    <li><a href="">Email</a></li>
                        <li><a href="">Linkedin</a></li>
                        <li><a href="https://github.com/Izumi51/Sistema-de-Gestao-Academica.git" target='_blank'>GitHub</a></li>
                    </ul>
                </div>
            </div>
            <p>© 2026 SmartEducation. All rights reserved.</p>
            <p>Developed at FuzzyLab FAETERJ-Rio</p>
        </footer>
    )
}