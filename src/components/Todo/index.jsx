import { createSignal, createEffect, Index, Show } from "solid-js";
import {createStore} from 'solid-js/store'; 
import TodoItem from "./TodoItem";
import TodoForm from '../TodoForm';
import styles from '../Todo/Todo.module.css';
import customUUID from '../../utils/randomID';

function Todo() {
    const [todoTitle, setTodoTitle] = createSignal("");
    const [store, setStore] = createStore({
        todos: []
    });

    const addTodo = (e) => {
        e.preventDefault();
        try {
            setStore({
                todos: [
                    ...store.todos,
                    {
                        id: customUUID(7),
                        title: todoTitle(),
                        completed: false,
                        timestamp: Date.now()
                    }
                ]
            });

            setTodoTitle("");
        } catch (e) {
            console.log(e);
        }
    };

    createEffect(() => {
        console.log(store.todos);
    })


    return (
        <div class={styles.main}>
            <TodoForm 
                todoTitle={todoTitle()}
                onClick={addTodo}
                onInput={(e) => setTodoTitle(e.currentTarget.value)} 
            />

            <Show when={store.todos.length > 0} fallback={<p class={styles.empty}>No new todo</p>}>
                <Index each={store.todos}>
                    {(todo, i) => 
                        <TodoItem 
                            checked={todo().completed}
                            onChange={(e) => setStore("todos", i, {completed: e.currentTarget.checked})}
                            todo={todo()}
                        />
                    }
                </Index>
            </Show>
        </div>
    )
}

export default Todo;