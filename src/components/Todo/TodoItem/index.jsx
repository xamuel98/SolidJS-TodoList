import { splitProps } from 'solid-js';
import styles from './TodoItem.module.css';

function TodoItem(props) {
    const [prop] = splitProps(props, ["todo"]);
    const {todo} = prop;

    return (
        <div class={styles.todo} key={todo.id} data-id={todo.id}>
            <input 
                type="checkbox" 
                onChange={props.onChange}  
                checked={props.checked}
            />
            <p style={props.checked ? 'text-decoration: line-through;' : ''}>{todo.title}</p>
        </div>
    )
}

export default TodoItem;