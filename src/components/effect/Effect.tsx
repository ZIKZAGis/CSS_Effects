import styles from './Effect.module.scss'

type Props = {
    title: string,
    children: React.ReactNode
    bg_color?: string
    tx_color?: string
    link?: string
    link_color?: string
}

const Effect = ({title, children, bg_color, tx_color, link, link_color}: Props) => {
    return (
        <div className={styles.wrapper} style={{background: `${bg_color}`}}>
            <h2 style={{color: `${tx_color}`}}>{title}</h2>
            {children}
            <a href={link? link : '#'} style={{color: `${link_color}`}}>code</a>
        </div>
    )
}

export default Effect