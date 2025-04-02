import React, {useState} from "react";

const TaskForm = ({ onAdd }) => {
    const [title, setTitle] = useState ("");
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            title,
            description,
            deadline,
        };
        onAdd(newTask);
        setTitle("");
        setDescription("");
        setDeadline("");
    };

    return (
        <form onSubmit={handleSubmit}className="bg-white p-6 rounded-2xl shadow-md mb-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-heading mb-4 text-primary">Lägg till ny uppgift</h2>
            <input
                type="text"
                placeholder="Titel"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full mb-3 p-2 border border-gray-300 rounded"
                required
            />
            <textarea
                placeholder="Beskrivning"
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                className="w-full mb-3 p-2 bborder border-gray-300 rounded"
            />
            <input
                type="date"
                value={deadline}
                onChange={(e)=> setDeadline(e.target.value)}
                className="w-full mb-3 p-2 border border-gray-300 rounded"
            />
            <button type="submit" className="bg-accent text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300">
                Läggg till uppgift
            </button>
            </form>
    );
};

export default TaskForm;