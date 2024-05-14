import styles from './Grid.module.scss'

type Props = {
    children: React.ReactNode
}

const Grid = ({children}: Props) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default Grid