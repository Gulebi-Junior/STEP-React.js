import React, { Component } from "react";

export class AddTodo extends Component<{ onAddTodo: (name: string) => void }, { newTodoName: string }> {
    state = {
        newTodoName: "",
    };

    changeNewTodoName = (newName: string) => {
        this.setState(() => {
            return {
                newTodoName: newName,
            };
        });
    };

    render() {
        return (
            <div className="add-todo-block">
                <input type="text" onChange={(e) => this.changeNewTodoName(e.target.value)} />
                <button onClick={() => this.props.onAddTodo(this.state.newTodoName)}>Add</button>
            </div>
        );
    }
}

export default AddTodo;
