import styles from './Benefits.module.css'

export function BenefitsSection (){
    return(
        <section className={styles.Benefits}>
            <h3 id='beneficios'>Porque escolher a <span>SmartEducation</span>?</h3>
            <div className={styles.BenefitsCont}>
                <p>Acesso de qualquer dispositivo</p>
                <p>Facilita a organização</p>
                <p>Ajuda no desempenho</p>
                <p>Automatiza documentações</p>
                <p>Simples de usar</p>
                <p>Não requer infraestrutura</p>
            </div>
        </section>
    )
}