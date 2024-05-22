import styles from './HamburgerButton.module.scss'
import Effect from '../../effect/Effect'

const HamburgerButton = () => {
    // const wrapper = document.querySelector('#hamburger_wrapper')
    // const buttons = wrapper?.querySelectorAll('button')

    // buttons?.forEach((button) => {
    //     button.addEventListener("click", () => {
    //         const currentState = button.getAttribute("data-state")

    //         if (!currentState || currentState === "closed") {
    //             button.setAttribute("data-state", "opened")
    //             button.setAttribute("aria-expanded", "true")
    //         } else {
    //             button.setAttribute("data-state", "closed")
    //             button.setAttribute("aria-expanded", "false")
    //         }
    //     })
    // })

    return (
        <Effect 
            title="hamburger button" 
            bg_color="#dbd8cc" 
            tx_color="#000" 
            link="#"
            link_color='#000'
        >
            <div className={styles.wrapper} id='hamburger_wrapper'>
                <button className={styles.btn_one} aria-controls='primary-navigation' aria-expanded='false'>
                    <svg fill='#333' className={styles.hamburger} viewBox='0 0 100 100' width={250}>
                        <rect className={`${styles.line} ${styles.top}`} width={80} height={10} x={10} y={25} rx={5}/>
                        <rect className={`${styles.line} ${styles.middle}`} width={80} height={10} x={10} y={45} rx={5}/>
                        <rect className={`${styles.line} ${styles.bottom}`} width={80} height={10} x={10} y={65} rx={5}/>
                    </svg>
                </button>

                <button className={styles.btn_two} aria-expanded="false">
                    <svg stroke='#333' className={styles.hamburger} viewBox='0 0 100 100' width={250}>
                        <line 
                            className={`${styles.line} ${styles.top}`} 
                            x1='90' x2='10' 
                            y1='40' y2='40'
                            strokeWidth='10'
                            strokeLinecap='round'
                            strokeDasharray='80'
                            strokeDashoffset='0'
                        />
                        <line 
                            className={`${styles.line} ${styles.bottom}`} 
                            x1='10' x2='90' 
                            y1='60' y2='60'
                            strokeWidth='10'
                            strokeLinecap='round'
                            strokeDasharray='80'
                            strokeDashoffset='0'
                        />
                    </svg>
                </button>

                <button className={styles.btn_three}aria-controls="primary-navigation" aria-expanded="false">
                    <svg stroke='#333' fill='none' className={styles.hamburger} viewBox='-10 -10 120 120' width={250}>
                        <path 
                            className={styles.line} 
                            strokeWidth="10" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
                        />
                    </svg>
                </button>
            </div>
        </Effect>
    )
}

export default HamburgerButton