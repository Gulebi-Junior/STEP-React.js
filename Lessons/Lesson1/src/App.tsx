import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { ITodo } from "@/types";

import React, { Component } from "react";

export class App extends Component<{}, { todos: ITodo[] }> {
    state = {
        todos: [
            { id: 1, name: "Sleep", isDone: false, isImportant: false },
            { id: 2, name: "Eat", isDone: false, isImportant: false },
        ],
    };

    onChangeTodo = (p: string, id: number) => {
        this.setState((state) => {
            if (p === "done") {
                return {
                    todos: state.todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)),
                };
            } else if (p === "important") {
                return {
                    todos: state.todos.map((todo) =>
                        todo.id === id ? { ...todo, isImportant: !todo.isImportant } : todo
                    ),
                };
            }
        });
    };

    render() {
        return (
            <div className="App">
                <Header title="Todo App"></Header>
                <TodoList todos={this.state.todos} onChange={this.onChangeTodo}></TodoList>
            </div>
        );
    }
}

export default App;
