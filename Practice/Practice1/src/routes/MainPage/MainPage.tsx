import React from "react";
import { Header } from "@/components";
import { Outlet } from "react-router-dom";
import "./MainPage.css";

function MainPage() {
    return (
        <div className="main-page-container">
            <Header />
            <div className="main-page-outlet-container">
                <Outlet />
            </div>
        </div>
    );
}

export default MainPage;
