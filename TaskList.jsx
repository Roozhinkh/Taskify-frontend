import React from "react";

const TaskList = ({ tasks }) => {
    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Mina Uppgifter</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tasks.map((task) => (
                    <div
                    key={task.id}
                    className="bg-white rounded-2xl shadown p-4 hover:shadow-md transition-shadow duration-300"
                >
                    <h3 className="text-xl font-semibold">{task.title}</h3>
                    npx --yes tailwindcss init -p
                     <p className="text-sm text-gray-400 mt-1">
                        Deadline: {task.deadline}
                        </p>
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                            Markera som klar 
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;