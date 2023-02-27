import { ITodo } from "@/types";
import React, { Component } from "react";
import "./TodoListItem.css";

interface ITodoListItemProps extends ITodo {
    passOnChange: (p: string, id: number) => void;
    passOnDelete: (id: number) => void;
}

export class TodoListItem extends Component<ITodoListItemProps> {
    render() {
        const { name, isDone, isImportant, passOnChange, passOnDelete, id } = this.props;

        return (
            <li>
                <input type="checkbox" checked={isDone} onInput={() => passOnChange("done", id)} />
                <span
                    className={`${isDone ? "done" : ""} ${isImportant ? "important" : ""}`}
                    onDoubleClick={() => passOnChange("important", id)}
                >
                    {name}
                </span>
                <button onClick={() => passOnDelete(id)}>Delete</button>
            </li>
        );
    }
}

export default TodoListItem;
