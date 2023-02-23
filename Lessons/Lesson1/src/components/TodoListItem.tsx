import { ITodo } from "@/types";
import React, { Component } from "react";
import "./TodoListItem.css";

interface ITodoListItemProps extends ITodo {
    passOnChange: (p: string, id: number) => void;
}

export class TodoListItem extends Component<ITodoListItemProps> {
    render() {
        const { name, isDone, isImportant, passOnChange, id } = this.props;

        return (
            <li>
                <input type="checkbox" onInput={() => passOnChange("done", id)} />
                <span
                    className={`${isDone ? "done" : ""} ${isImportant ? "important" : ""}`}
                    onDoubleClick={() => passOnChange("important", id)}
                >
                    {name}
                </span>
            </li>
        );
    }
}

export default TodoListItem;
