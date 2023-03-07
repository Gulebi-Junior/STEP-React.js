import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "@/router";

function App() {
    return (
        <div className="app-container">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
