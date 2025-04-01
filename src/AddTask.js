import React, { useState } from 'react';
import { createTask } from './api';

const AddTask = ({ onTaskCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTask = { title, description, due_date: dueDate };
        try {
            const response = await createTask(newTask);
            onTaskCreated(response.task);
        }   catch (error) {
            console.error('Error creating task:', error);
        }
    };

    return (
        <div>
            <h2>Create Task</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Due Date (YYYY-MM-DD)"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default AddTask;
