import React, { useState } from "react";
import { searchtaskbydeadline, searchtaskbytitle } from "../services/userApi";
import TaskList from "./TaskList";

const SearchTasksPage = () => {
    const [deadline, setDeadline] = useState("");
    const [title, setTitle] = useState("");
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearchByDeadline = async () => {
        if (!deadline) return;

        setLoading(true);
        setError(null);
        try {
            const data = await searchtaskbydeadline(deadline);
            setTasks(data);
        } catch (err) {
            setError("Kunde inte hämta uppgifter.");
        } finally {
            setLoading(false);
        }
    };

    const handleSearchByTitle = async () => {
        if (!title) return;

        setLoading(true);
        setError(null);
        try {
            const data = await searchtaskbytitle(title);
            setTasks(data);
        } catch (err) {
            setError("Kunde inte hämta uppgifter.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 py-12 px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Sök Uppgifter</h2>

            <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-3xl shadow-lg">
                {}
                <input
                    type="datetime-local"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full p-4 mb-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-400"
                    placeholder="Sök efter deadline"
                />
                <button
                    onClick={handleSearchByDeadline}
                    className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all duration-300"
                >
                    Sök efter deadline
                </button>

                {}
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-4 mt-6 mb-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-400"
                    placeholder="Sök efter titel"
                />
                <button
                    onClick={handleSearchByTitle}
                    className="w-full py-3 bg-green-600 text-white rounded-xl hover:bg-green-500 transition-all duration-300"
                >
                    Sök efter titel
                </button>
            </div>

            {loading && <p className="text-center text-gray-400 mt-10">Laddar...</p>}
            {error && <p className="text-center text-red-400 mt-10">{error}</p>}

            {}
            {tasks.length > 0 && !loading && (
                <TaskList tasks={tasks} onComplete={() => {}} />
            )}
        </div>
    );
};

export default SearchTasksPage;
