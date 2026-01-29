import styles from './Home.module.css'
import Logo from '../../assets/logo.png'
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
        </>
    )
}