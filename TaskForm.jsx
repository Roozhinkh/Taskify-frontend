import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
    const [title, setTitle] = useState("");
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
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md mb-6 max-w-2x1 mx-auto">
            <h2 className="text-xl font-bold mb-4">Lägg till ny uppgift</h2>
            <input
                type="text"
                placeholder="Titel"
                value={title}
                onChange={(e) => setDeadline.Title(e.target.value)}
                className="w-full mb-3 p-2 border rounded"
                required 
            />
            <textarea
                placeholder="Beskrivning"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full mb-3 p-2 border rounded"
            />
            <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.vakue)}
                className="w-full mb-3 p-2 border rounded"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Lägg till uppgift
            </button>
        </form>
    );
};

export default TaskForm;
