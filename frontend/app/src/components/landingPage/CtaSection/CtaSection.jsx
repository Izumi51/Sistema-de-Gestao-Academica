import styles from './CtaSection.module.css'
import logoSmartEdu from '@/assets/logo.png'
import {BlueButton} from '@/components/shared/BlueButton/BlueButton.jsx'

export function CtaSection (){
    return(
        <section className={styles.Cta}>
            <h3>Transforme sua gestão acadêmica</h3>
            <p>A solução acadêmica que sua instituição merece.</p>
            <img src={logoSmartEdu} alt="" />
            <BlueButton text={"Comece Agora"} to={"/login"}/>
        </section>
    )
}