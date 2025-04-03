import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <header className="bg-dark-gray text-white p-4 shadow-lg">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <img src={logo} alt="Taskify Logo" className="logo" />
                <h1 className="text-xl font-bold">Taskify</h1>
                <nav className="ml-auto">
                    <Link to="/" className="nav-link">Hem</Link>
                    <Link to="/tasks" className="nav-link">Mina Uppgifter</Link>
                    <Link to="/add-task" className="nav-link">Lägg till uppgift</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
