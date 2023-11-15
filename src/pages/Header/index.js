import styles from './Header.module.scss'

const Header = () => {
    return(
        <main className={styles.headerContainer}>
            <h1>Challenge</h1>
            <button>Join Beta</button>
        </main>
    )
}

export default Header