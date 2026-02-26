import { ContResource } from '../ContResource/ContResource'
import styles from './Resource.module.css'
import iaIcon from '@/assets/icone-ia.png'
import analysticIcon from '@/assets/icone-analystics.png'
import classIcon from '@/assets/icone-classe.png'

export function ResourceSection(){
    return(
        <section id='recursos' className={styles.resource}>
            <h3>O que o Sistema oferece?</h3>
            <div className={styles.resourcesBox}>
                <ContResource icon={iaIcon} label="Atendimento automatizado"  descrip="IA que responde dúvidas, notas, calendário e documentos."/>

                <ContResource icon={analysticIcon} label="Controle de turmas" descrip="Professores lançam frequência e notas de forma rápida."/>

                <ContResource icon={classIcon} label="Painel analítico de desempenho" descrip="Acompanhamento de desempenho, riscos e frequências."/>
            </div>
        </section>
    )
}