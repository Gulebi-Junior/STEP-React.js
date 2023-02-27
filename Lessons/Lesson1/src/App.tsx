import Header from "./components/Header";
import TodoList from "./components/TodoList";
import SearchInput from "./components/SearchInput";
import AddTodo from "./components/AddTodo";
import { ITodo } from "@/types";

import React, { Component } from "react";

interface IAppState {
    todos: ITodo[];
    searchText: string;
}

export class App extends Component<{}, IAppState> {
    state = {
        todos: [
            { id: 1, name: "Sleep", isDone: false, isImportant: false },
            { id: 2, name: "Eat", isDone: false, isImportant: false },
        ],
        searchText: "",
    };

    onChangeTodo = (p: string, id: number) => {
        this.setState((state) => {
            if (p === "done") {
                return {
                    todos: state.todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)),
                    searchText: state.searchText,
                };
            } else if (p === "important") {
                return {
                    todos: state.todos.map((todo) =>
                        todo.id === id ? { ...todo, isImportant: !todo.isImportant } : todo
                    ),
                    searchText: state.searchText,
                };
            }
        });
    };

    onDeleteTodo = (id: number) => {
        this.setState((state) => {
            return {
                todos: state.todos.filter((todo) => todo.id !== id),
                searchText: state.searchText,
            };
        });
    };

    onAddTodo = (name: string) => {
        this.setState((state) => {
            return {
                todos: [
                    ...state.todos,
                    {
                        id: state.todos[state.todos.length - 1].id + 1,
                        name,
                        isDone: false,
                        isImportant: false,
                    } as ITodo,
                ],
                searchText: state.searchText,
            };
        });
    };

    onSearch = (searchText: string) => {
        this.setState((state) => {
            return {
                todos: state.todos,
                searchText: searchText,
            };
        });
    };

    // console.log(
    //     this.state.todos.map((todo, index) => {
    //         return {
    //             todoIndex: index,
    //             stringIndex: todo.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()),
    //             stringLength: this.state.searchText.toLowerCase().length,
    //         };
    //     })
    // );

    render() {
        return (
            <div className="app">
                <Header title="Todo App" />
                <AddTodo onAddTodo={this.onAddTodo} />
                <TodoList
                    todos={this.state.todos.filter((todo) =>
                        todo.name.toLowerCase().includes(this.state.searchText.toLowerCase())
                    )}
                    onChange={this.onChangeTodo}
                    onDelete={this.onDeleteTodo}
                />
                <SearchInput onSearch={this.onSearch} />
            </div>
        );
    }
}

export default App;
