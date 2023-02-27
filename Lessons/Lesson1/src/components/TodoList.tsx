import TodoListItem from "./TodoListItem";
import "./TodoList.css";

import React, { FC } from "react";
import { ITodo } from "@/types";

interface ITodoListProps {
    todos: ITodo[];
    onChange: (p: string, id: number) => void;
    onDelete: (id: number) => void;
}

const TodoList: FC<ITodoListProps> = (props) => {
    return (
        <div className="todo-list">
            <ul>
                {props.todos.map((todo) => (
                    <TodoListItem key={todo.id} {...todo} passOnChange={props.onChange} passOnDelete={props.onDelete} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
