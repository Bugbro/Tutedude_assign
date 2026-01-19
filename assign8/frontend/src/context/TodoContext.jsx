import { createContext, useContext, useEffect, useState } from "react";
import * as api from "../api/axios.js"

export const TodoContext = createContext();

const TodoContextProvider = (props)=>{
    const [todos, setTodos] = useState([]);

    const fetchTodo = async () => {
        try {
            const { data } = await api.fetchTodoAPI();

            setTodos(data.data);
        } catch (error) {
            console.log("Error find in fetchTodo", error.message);
        }
    };

    const addTodo = async (todo) => {
        try {
            const response = await api.createTodoAPI(todo);
            const savedTodo = response.data.data;
            
            setTodos((prev)=> [savedTodo, ...prev]);
        } catch (error) {
            console.log("Error while add todo", error.message);
        }
    };

    // useEffect(()=>{
    //     console.log(todos)
    // },[todos])

    useEffect(()=>{
        fetchTodo();
    },[])


    const value = {todos, addTodo, fetchTodo};
    return (
        <TodoContext.Provider value={value}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;