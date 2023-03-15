import styles from './Header.module.css';

function Header() {
    return (
        <div class={styles.header}>
            <h1 class={styles.logo}>Todo App</h1>
        </div>
    )
}

export default Header;