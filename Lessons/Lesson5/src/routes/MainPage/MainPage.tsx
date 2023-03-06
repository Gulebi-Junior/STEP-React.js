import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./MainPage.css";

function MainPage() {
    return (
        <div className="main-page-block">
            <div className="main-page-links-subblock">
                <Link to="/">
                    <h3>Main</h3>
                </Link>
                <Link to="/posts">
                    <h3>Posts</h3>
                </Link>
            </div>
            <Outlet />
        </div>
    );
}

export default MainPage;
