import React, { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (newTask) => {
        setTasks((prev) => [...prev, newTask]);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />
            <main className="p-4">
                <TaskForm onAdd={handleAddTask} />
                <TaskList tasks={tasks} />
            </main>
        </div>
    );
};  

export default App;