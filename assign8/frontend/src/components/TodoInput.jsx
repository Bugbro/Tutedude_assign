import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext';

const TodoInput = () => {
   
    const [todoText, setTodoText] = useState("");
    const {addTodo, fetchTodo} = useContext(TodoContext)

    const onSubmitAdd = (e)=>{
        e.preventDefault();
        addTodo(todoText);
        setTodoText("");

    }
    
  return (
    <div className='w-3/4 lg:w-1/3'>
        <h1 className='text-4xl font-bold'>Todo - App</h1>
        <form onSubmit={onSubmitAdd} className='bg-white my-5 py-3 px-2 rounded-xl '>
            <input className=' px-4 py-2 outline-red-300 w-3/4 bg-gray-100' type="text" value={todoText} onChange={(e)=> setTodoText(e.target.value)} placeholder='Add a new task....' required />
            <button className='bg-red-300 p-2 cursor-pointer border-red-500 font-semibold hover:text-white duration-300 px-4' type='submit'>ADD</button>
        </form>
    </div>
  )
}

export default TodoInput