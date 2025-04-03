import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [completed, setCompleted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = { title, description, deadline, completed };

        onAdd(newTask);

        setTitle('');
        setDescription('');
        setDeadline('');
        setCompleted(false);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-800 text-white p-8 rounded-3xl shadow-lg max-w-xl mx-auto mt-8">
            <h2 className="text-3xl font-bold text-center mb-6">Lägg till en ny uppgift</h2>
            <input
                type="text"
                placeholder="Titel"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full p-4 mb-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-400"
            />
            <textarea
                placeholder="Beskrivning"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-4 mb-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-400"
            />
            <input
                type="datetime-local"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full p-4 mb-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-400"
            />
            <label className="flex items-center text-white mb-4">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => setCompleted(!completed)}
                    className="mr-2"
                />
                Markera som klar
            </label>
            <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white rounded-xl hover:bg-green-500 transition-all duration-300"
            >
                Lägg till uppgift
            </button>
        </form>
    );
};

export default TaskForm;
