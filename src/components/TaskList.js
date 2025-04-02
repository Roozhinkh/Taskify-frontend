import React, { useState, useEffect } from 'react';
import { getTasks, deleteTask } from './api.js'; // Adjust the import path as necessary

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const tasks = await getTasks();
                setTasks(tasks);
            }   catch (error) {
                console.error('Error fetching tasks:', error);
            }
    };

    fetchTasks();
}, []);

    const handleDelete = async (id) => {
        try {
            await deleteTask(id);
            setTasks(tasks.filter(task => task.id !== id));
        }   catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <strong>{task.title}</strong><br />
                        Description: {task.description}<br />
                        Due Date: {task.due_date}<br />
                        Status: {task.completed ? 'Completed' : 'Pending'}<br />
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
