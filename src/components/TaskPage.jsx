import React, { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { getalltasks, createtask, completetask, updatetask, deletetask } from "../services/userApi";

const TaskPage = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const data = await getalltasks();
                setTasks(data);
            } catch (err) {
                console.error("Fel vid hämtning:", err);
                setError("Kunde inte hämta uppgifter.");
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    const handleAddTask = async (newTask) => {
        try {
            const savedTask = await createtask(newTask);
            setTasks((prev) => [...prev, savedTask]);
        } catch (err) {
            console.error("Kunde inte lägga till uppgift:", err);
        }
    };

    const handleCompleteTask = async (taskId) => {
        try {
            await completetask(taskId);
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === taskId ? { ...task, completed: true } : task
                )
            );
        } catch (err) {
            console.error("Kunde inte markera som klar:", err);
        }
    };

    const handleUpdateTask = async (taskId, updatedTask) => {
        try {
            const updatedTaskData = await updatetask(taskId, updatedTask);
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === taskId ? { ...task, ...updatedTaskData } : task
                )
            );
        } catch (err) {
            console.error("Error updating task:", err);
        }
    };

    const handleDeleteTask = async (taskId) => {
        try {
            await deletetask(taskId);
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
        } catch (err) {
            console.error("Error deleting task:", err);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 py-12 px-4">
            <TaskForm onAdd={handleAddTask} />

            {loading ? (
                <p className="text-center text-gray-400 mt-10">Laddar uppgifter...</p>
            ) : error ? (
                <p className="text-center text-red-400 mt-10">{error}</p>
            ) : (
                <TaskList
                    tasks={tasks}
                    onUpdate={handleUpdateTask}
                    onDelete={handleDeleteTask}
                />
            )}
        </div>
    );
};

export default TaskPage;
