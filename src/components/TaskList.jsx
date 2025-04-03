import React from "react";

const TaskList = ({ tasks, onComplete }) => {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-white mb-6">Mina Uppgifter</h2>
            {tasks.length === 0 ? (
                <p className="text-center text-gray-500">Inga uppgifter ännu!</p>
            ) : (
                tasks.map((task, index) => (
                    <div key={index} className="bg-gray-700 p-6 mb-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-xl font-semibold text-white">{task.title}</h3>
                        <p className="text-gray-300 mt-2">{task.description}</p>
                        <p className="text-sm text-gray-500 mt-2">📅 Deadline: {task.deadline ? task.deadline : "Ingen deadline"}</p>
                        <p className={`mt-3 text-sm font-medium ${task.completed ? "text-green-500" : "text-yellow-400"}`}>
                            {task.completed ? "✅ Klar" : "⏳ Pågående"}
                        </p>
                        <button
                            onClick={() => onComplete(index)}
                            className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-xl hover:bg-blue-500 transition-all duration-300"
                        >
                            Markera som klar
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default TaskList;
