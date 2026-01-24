import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true
});

export const fetchTodoAPI = ()=> 
    {
        console.log(import.meta.env.VITE_BACKEND_URL)
        return api.get('/api/todos');
    }    
export const createTodoAPI = (todo)=> api.post('/api/todos', {todo: todo});
export const updateTodoAPI = (id, updateTodo)=> api.put(`/api/todos/${id}`, updateTodo);
export const deleteTodoAPI = (id)=> api.delete(`/api/todos/${id}`);