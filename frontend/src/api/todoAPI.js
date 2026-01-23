import axios from 'axios';

const baseURL =
  import.meta.env.VITE_API_URL ||
  'https://nestjs-production-98a6.up.railway.app';

const API_URL = `${baseURL}/todos`;

console.log('API URL:', API_URL);


export const todoAPI = {
  getAllTodos: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  createTodo: async (todo) => {
    const response = await axios.post(API_URL, todo);
    return response.data;
  },

  updateTodo: async (id, todo) => {
    const response = await axios.patch(`${API_URL}/${id}`, todo);
    return response.data;
  },

  deleteTodo: async (id) => {
    await axios.delete(`${API_URL}/${id}`);
  },
};
