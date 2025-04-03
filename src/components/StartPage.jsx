import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-center px-6">
            <h1 className="text-5xl font-bold text-white mb-8">
                Välkommen <span className="text-green-400"></span>
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
                Den bästa appen för att hålla koll på dina uppgifter och deadlines.
            </p>
            <div className="space-y-8">
                <Link
                    to="/add-task"
                    className="bg-gradient-to-r from-green-500 to-green-700 text-white px-10 py-4 rounded-xl hover:bg-green-600 hover:scale-105 transition-all ease-in-out duration-300 shadow-lg w-full sm:w-auto"
                >
                    
                </Link>
                
                <Link
                    to="/tasks"
                    className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-4 rounded-xl hover:bg-blue-600 hover:scale-105 transition-all ease-in-out duration-300 shadow-lg w-full sm:w-auto"
                >
                    
                </Link>
            </div>
        </div>
    );
};

export default StartPage;
