import styles from './TodoForm.module.css';

function TodoForm(props) {
    return (
        <form class={styles.form} onSubmit={props.onClick}>
            <input 
                class={styles.input}
                type="text" 
                placeholder="Enter todo" 
                value={props.todoTitle} 
                onInput={props.onInput}
            />
            <button type="submit" class={styles.button}>Add</button>
        </form>
    );
}

export default TodoForm;