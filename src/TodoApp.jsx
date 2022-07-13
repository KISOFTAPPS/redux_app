import { useState } from "react";
import { useGetTodosQuery, useGetTodoByIdQuery } from "./store/api";

const TodoApp = () => {
    const [todoId, setTodoId] = useState(0);
    const { data: todo, isLoading } = useGetTodoByIdQuery(
        todoId <= 0 ? 1 : todoId
    );
    let res = [todo];

    const handleClick = (a = 0) => {
        if (a === 0) {
            setTodoId(todoId + 1);
        }
        if (a === 1) {
            setTodoId(todoId - 1);
        }
    };
    return (
        <section className="container">
            <h1>Todos -RTK Query</h1>
            <hr />
            <span>Loading: {isLoading ? "True" : "False"} </span>
            <pre>{res.map(todo =>(
                <h1><span>{todo.completed ? "DONE": "PROCESSING"}</span> {todo.title}</h1>
            ))}</pre>

            <button disabled={todoId <= 1} onClick={() => handleClick(1)}>
                Back
            </button>
            <button disabled={false} onClick={() => handleClick()}>
                Next
            </button>
        </section>
    );
};

export default TodoApp;
