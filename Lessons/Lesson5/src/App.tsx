import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
    return (
        <div className="app-container">
            <main>
                <RouterProvider router={router} />
            </main>
        </div>
    );
}

export default App;
