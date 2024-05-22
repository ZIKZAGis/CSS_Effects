import Effect from "../../effect/Effect"
import styles from "./PulseLoading.module.scss"

const PulseLoading = () => {
    return (
        <Effect 
            title="Pulse loading" 
            bg_color="#242834" 
            tx_color="white" 
            link="https://github.com/ZIKZAGis/CSS_Effects/tree/main/src/components/effects/pulse_loading"
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

export default PulseLoading