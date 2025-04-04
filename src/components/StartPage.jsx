import React from "react";

const StartPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-center px-6">
            <h1 className="text-5xl font-bold text-white mb-8">
                Välkommen <span className="text-green-400"></span>
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
                Den bästa appen för att hålla koll på dina uppgifter och deadlines.
            </p>
        </div>
    );
};


export default StartPage;
