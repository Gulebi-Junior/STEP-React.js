// import React from "react";

// const TodoListItem = (props: { text: string }) => {
//     let isDone = false;

//     return (
//         <li>
//             <span onClick={done} style={{ textDecoration: isDone ? "line-through" : "auto" }}>
//                 {props.text}
//             </span>
//             <button>Delete</button>
//         </li>
//     );
// };

// export default TodoListItem;

import React, { Component } from "react";

interface ITodoListState {
    isDone: boolean;
    isImportant: boolean;
}

export class TodoListItem extends Component<{ text: string }, ITodoListState> {
    state = {
        isDone: false,
        isImportant: false,
    };

    done = (): void => {
        this.setState({ isDone: !this.state.isDone });
    };

    important = (): void => {
        this.setState({ isImportant: !this.state.isImportant });
    };

    render(): JSX.Element {
        const { text } = this.props;
        return (
            <li>
                <span
                    onClick={this.done}
                    onDoubleClick={this.important}
                    style={{
                        textDecoration: this.state.isDone ? "line-through" : "auto",
                        fontWeight: this.state.isImportant ? "bold" : "normal",
                    }}
                >
                    {text}
                </span>
                <button>Delete</button>
            </li>
        );
    }
}

export default TodoListItem;
