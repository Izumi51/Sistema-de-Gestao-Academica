import styles from './BlueButton.module.css'
import {Link} from 'react-router-dom'

export function BlueButton({text, to}){
    return(
        <Link className={styles.blueButton} to={to}>{text}</Link>
    )
}