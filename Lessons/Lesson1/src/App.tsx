import Header from "./components/Header";
import TodoList from "./components/TodoList";

const App = () => {
    return (
        <div className="App">
            <Header title="Todo App"></Header>
            <TodoList></TodoList>
        </div>
    );
};

export default App;
