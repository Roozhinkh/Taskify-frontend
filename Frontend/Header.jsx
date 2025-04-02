import React from "react";

const Header = () => {
    return (
        <header className="bg-primary text-white p-4 shadow">
            <div className="max-w-6x1 mx-auto flex justify-between items-center">
                <h1 className="text-2x1 font-heading">Taskify</h1>
                <nav className="space-x-4 font-semibold">
                    <a href="/" className="hover:underline">Mina Uppgifter</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;