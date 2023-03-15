import styles from './Header.module.css';

function Header() {
    return (
        <div class={styles.header}>
            <h1 class={styles.logo}>Todo App</h1>
            <a class={styles.href} href="https://github.com/xamuel98/SolidJS-TodoList" target='_blank' rel='noreferrer noopener'>Github</a>
        </div>
    )
}

export default Header;