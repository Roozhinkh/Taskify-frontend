import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskForm from "./components/TaskForm"; // För att skapa nya uppgifter
import TaskList from "./components/TaskList"; // För att visa uppgifter
import Header from "./components/Header"; // Header-komponenten
import StartPage from "./components/StartPage"; // Start-sidan
import Footer from "./components/Footer";

const App = () => {
    const [tasks, setTasks] = useState([]);

    // Funktion för att lägga till en ny uppgift
    const handleAddTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    // Funktion för att markera uppgift som klar
    const handleCompleteTask = (taskIndex) => {
        const updatedTasks = tasks.map((task, index) =>
            index === taskIndex ? { ...task, completed: true } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <Router>
            <div className="min-h-screen bg-gray-800 text-white">
                <Header />
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/add-task" element={<TaskForm onAdd={handleAddTask} />} />
                    <Route path="/tasks" element={<TaskList tasks={tasks} onComplete={handleCompleteTask} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
