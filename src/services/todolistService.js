import axios from "axios";

const getAllTasksApi = (taskId) => {
    return axios.get('http://localhost:8080/api/get-all-tasks', {
        params: {
            id: taskId,
        }
    });
}

export { 
    getAllTasksApi,
}