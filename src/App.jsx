import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskForm from "./components/TaskForm"; 
import TaskList from "./components/TaskList"; 
import Header from "./components/Header"; 
import StartPage from "./components/StartPage"; 
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

const App = () => {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

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
                    <Route path="/contact" element={<ContactForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
