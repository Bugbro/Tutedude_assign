import { createContext, useContext, useEffect, useState } from "react";
import * as api from "../api/axios.js"

export const TodoContext = createContext();

const TodoContextProvider = (props)=>{
    const [todoText, setTodoText] = useState("");
    const [todos, setTodos] = useState([]);
    const [editItem, setEditItem] =useState(null);


    const editTodo = (item)=>{
        setEditItem(item);
    }

    // delete the todo this function only when confirm
    const deleteTodo = async(id)=>{
        try {
            const response = await api.deleteTodoAPI(id);
            console.log(response);
            
            //update the todos local to avoid unnecessary api call
            setTodos(prev => prev.filter(item => item._id !== id));
        } catch (error) {
            console.log("Error while updating todo", error.message);
        }
    }

    // update the existing todo
    const updateTodo = async(id, updateText)=>{
        try {
            const { data } = await api.updateTodoAPI(id, updateText);
            //update our local state becuase it updat in DB 
            setTodos(prev => prev.map(item => item._id === id ? data.data : item));
            setEditItem(null);
            
        } catch (error) {
            console.log("Error while updating todo", error.message);
        }
    }
    // fetch todo from the db
    const fetchTodo = async () => {
        try {
            const { data } = await api.fetchTodoAPI();

            setTodos(data.data);
        } catch (error) {
            console.log("Error find in fetchTodo", error.message);
        }
    };

    // add new todo
    const addTodo = async (todo) => {
        try {
            const response = await api.createTodoAPI(todo);
            const savedTodo = response.data.data;
            
            setTodos((prev)=> [savedTodo, ...prev]);
        } catch (error) {
            console.log("Error while add todo", error.message);
        }
    };


    useEffect(()=>{
        fetchTodo();
    },[])


    const value = {todoText, setTodoText, todos, addTodo, fetchTodo, editTodo, updateTodo, editItem, setEditItem, deleteTodo};
    return (
        <TodoContext.Provider value={value}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;