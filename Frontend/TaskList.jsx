import React from "react";

const TaskList = ({ tasks }) => {
    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading mb-4 text-center text-primary">Mina Uppgifter</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className="bg-white rounded-2xl shadow p-4 hover:shadow-md transition-shadow duration-300"
                    >
                        <h3 className="text-lg font-bold text-gray-800">{task.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Deadline: {task.deadline}
                        </p>
                        <button className="mt-4 bg-accent text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300">
                            Markera som klar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;
