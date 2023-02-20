const TodoList = () => (
    <ul>
        <li>Gleb</li>
        <li>Glob</li>
        <li>Glib</li>
    </ul>
);

function App() {
    const welcomeText = "Hello World!";

    return (
        <div className="App">
            <h1>{welcomeText}</h1>
            <TodoList></TodoList>
        </div>
    );
}

export default App;
