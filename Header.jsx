import React from "react";

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow">
            <div className="max-w-6x1 mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold"> Taskify</h1>
                <nav className="space-x-4">
                    <a href="/" className="hover:underline">Mina Uppgifter</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
