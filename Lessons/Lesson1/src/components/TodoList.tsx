import TodoListItem from "./TodoListItem";

import React, { FC } from "react";
import { ITodo } from "@/types";

interface ITodoListProps {
    todos: ITodo[];
    onChange: (p: string, id: number) => void;
}

const TodoList: FC<ITodoListProps> = (props) => {
    return (
        <ul>
            {props.todos.map((todo) => (
                <TodoListItem key={todo.id} {...todo} passOnChange={props.onChange} />
            ))}
        </ul>
    );
};

export default TodoList;
