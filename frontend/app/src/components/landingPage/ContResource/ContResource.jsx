import styles from './ContResource.module.css'

export function ContResource({icon, label, descrip}){
    return(
        <div className={styles.containerBox}>
            <div className={styles.boxContent}>
                <img src={icon} />
                <p>{label}</p>
            </div>
            <p>{descrip}</p>
        </div>
    )
}