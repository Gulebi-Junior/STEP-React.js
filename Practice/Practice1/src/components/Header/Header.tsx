import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header>
            <div className="header-column">
                <h1>Header</h1>
            </div>
            <div className="header-column">
                <Link to="/people">
                    <h2>People</h2>
                </Link>
                <Link to="/planets">
                    <h2>Planets</h2>
                </Link>
                <Link to="/starships">
                    <h2>Starships</h2>
                </Link>
            </div>
        </header>
    );
}

export default Header;
