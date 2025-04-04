import axiosInstance from "./axiosInstance.js";

export const getalltasks = async () => {
    try {
        const response = await axiosInstance.get("/tasks");
        return response.data
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
    }
}

export const createtask = async (task) => {
    try {
        const response = await axiosInstance.post("/tasks", task);
        return response.data
    } catch (error) {
        console.error("Error creating task:", error);
        throw error;
    }
}

export const updatetask = async (taskId, task) => {
    try {
        const response = await axiosInstance.put(`/tasks/${taskId}`, task);
        return response.data
    } catch (error) {
        console.error("Error updating task:", error);
        throw error;
    }
}

export const deletetask = async (taskId) => {
    try {
        const response = await axiosInstance.delete(`/tasks/${taskId}`);
        return response.data
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
}

export const searchtaskbydeadline = async (deadline) => {
    try {
        const response = await axiosInstance.get(`/tasks/search?deadline=${deadline}`);
        return response.data
    } catch (error) {
        console.error("Error searching tasks:", error);
        throw error;
    }
}

export const searchtaskbytitle = async (title) => {
    try {
        const response = await axiosInstance.get(`/tasks/search?title=${title}`);
        return response.data
    } catch (error) {
        console.error("Error searching tasks:", error);
        throw error;
    }
}

export const completetask = async (taskId) => {
    try {
        const response = await axiosInstance.put(`/tasks/${taskId}/complete`);
        return response.data
    } catch (error) {
        console.error("Error completing task:", error);
        throw error;
    }
}