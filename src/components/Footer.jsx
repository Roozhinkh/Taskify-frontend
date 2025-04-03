import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark-gray text-white py-6 mt-8">
            <div className="max-w-6xl mx-auto text-center">
                <p>&copy; 2025 Taskify. All rights reserved.</p>
                <div className="mt-4">
                    <a href="#" className="hover:underline">About</a> | 
                    <a href="#" className="hover:underline ml-4">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
