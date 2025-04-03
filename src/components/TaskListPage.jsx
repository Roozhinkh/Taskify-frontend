import React from "react";

const TaskListPage = ({ tasks }) => {
    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Mina Uppgifter</h2>
            {tasks.length === 0 ? (
                <p className="text-center text-gray-500">Inga uppgifter ännu. Lägg till en ny!</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tasks.map((task, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                        >
                            <h3 className="text-xl font-semibold text-gray-900">{task.title}</h3>
                            <p className="text-gray-600 mt-2">{task.description}</p>
                            <p className="text-sm text-gray-400 mt-1">
                                📅 Deadline: {task.deadline ? task.deadline : "Ingen deadline"}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TaskListPage;