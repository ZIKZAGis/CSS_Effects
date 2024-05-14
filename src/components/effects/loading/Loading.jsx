import Effect from "../../effect/Effect"
import styles from './Loading.module.scss'

const Loading = () => {
    return (
        <Effect 
            title="Loading" 
            bg_color="#242834" 
            tx_color="white" 
            link="#"
        >
            <div className={styles.wrapper}>
                <div className={styles.circle}/>
                <div className={styles.circle}/>
                <div className={styles.circle}/>
                <div className={styles.circle}/>
                <div className={styles.circle}/>
            </div>
        </Effect>
    )
}

export default Loading