import React from "react";
import { PostsList, UserList } from "./components";
import "./App.css";

function App() {
    return (
        <div className="app-container">
            <UserList />
            <PostsList />
        </div>
    );
}

export default App;
