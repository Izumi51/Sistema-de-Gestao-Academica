import styles from './HomeHeader.module.css'
import Logo from '@/assets/logo.png'
import { BlueButton } from '@/components/shared/BlueButton/BlueButton'

export function HomeHeader(){
    return(
        <header className={styles.homeHeader}>
            <img src={Logo} alt="SmartEducation" />
                <nav>
                    <ul className={styles.linkBox}>
                        <li><a href='#recursos'>Recursos</a></li>
                        <li>|</li>
                        <li><a href='#comoFunciona'>Como funciona</a></li>
                        <li>|</li>
                        <li><a href='#beneficios'>Beneficios</a></li>
                        <li>|</li>
                    </ul>
                    <BlueButton to="/login" text="Acessar Portal"/>
                </nav>
        </header>
    )
}