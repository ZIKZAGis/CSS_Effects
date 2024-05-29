import Effect from "../../effect/Effect";
import styles from "./AcrobaticLoading.module.scss"

const AcrobaticLoading = () => {
    return (
        <Effect
            title="Acrobatic loading"
            bg_color="hsl(223, 10%, 90%)"
            tx_color="hsl(223,90%,55%)"
            link="#"
            link_color="hsl(223,90%,55%)"
        >
            <div className={styles.wrapper}>
                <svg className={styles.ap} viewBox="0 0 128 256" width={128} height={256} xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="ap-grad1" x1={0} y1={0} x2={0} y2={1}>
                            <stop offset="0%" stopColor="hsl(223,90%,55%)"/>
                            <stop offset="100%" stopColor="hsl(253,90%,55%)"/>
                        </linearGradient>
                        <linearGradient id="ap-grad2" x1={0} y1={0} x2={0} y2={1}>
                            <stop offset="0%" stopColor="hsl(193,90%,55%)"/>
                            <stop offset="50%" stopColor="hsl(223,90%,55%)"/>
                            <stop offset="100%" stopColor="hsl(253,90%,55%)"/>
                        </linearGradient>
                    </defs>
                    <circle 
                        className={styles.ap_ring} 
                        r={56} cx={64} cy={192} 
                        fill="none" 
                        stroke="#ddd" 
                        strokeWidth={16} 
                        strokeLinecap="round"
                    />
                    <circle 
                        className={styles.ap_worm1} 
                        r={56} cx={64} cy={192} 
                        fill="none" 
                        stroke="url(#ap-grad1)" 
                        strokeWidth={16} 
                        strokeLinecap="round" 
                        strokeDasharray="87.96 263.89"
                    />
                    <path  
                        className={styles.ap_worm2} 
                        d="M120,192A56,56,0,0,1,8,192C8,161.07,16,8,64,8S120,161.07,120,192Z" 
                        fill="none" 
                        stroke="url(#ap-grad2)" 
                        strokeWidth={16} 
                        strokeLinecap="round" 
                        strokeDasharray="87.96 494"
                    />
                </svg>
            </div>    
        </Effect>
    )
}

export default AcrobaticLoading