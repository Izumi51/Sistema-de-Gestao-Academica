import styles from './Audience.module.css'
import StudentIcon from '@/assets/icone-estudante.png'
import ProfessorIcon from '@/assets/icone-professor.png'
import AdmIcon from '@/assets/icone-assistente.png'

export function AudienceSection(){
    return(
        <section className={styles.audienceSection}>
            <h3>Para quem é o sistema?</h3>
            <div className={styles.audienceCont}>
                <div className={styles.audienceBox}>
                    <img src={StudentIcon} alt="Imagem de Aluno" />
                    <p><span>ALUNOS</span></p>
                    <p>Consulta notas, faltas, atividades, calendário e usa o chatbot para solicitação de documentos.</p>                
                </div>
                <div className={styles.audienceBox}>
                    <img src={ProfessorIcon} alt="Imagem de Professor" />
                    <p><span>PROFESSORES</span></p>
                    <p>Lança notas, frequência, gerencia turmas e visualiza desempenho de alunos.</p>                
                </div>
                <div className={styles.audienceBox}>
                    <img src={AdmIcon} alt="Imagem de Diretor" />
                    <p><span>DIREÇÃO</span></p>
                    <p>Gerenciamento geral, acompanha desempenho de alunos e professores, responde solicitações de documentação.</p>                
                </div>
            </div>
        </section>
    )
}