import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const ShowTodos = () => {

    const {todos, editTodo, deleteTodo, updateTodo } = useContext(TodoContext);

    const confimDelete = (id)=>{
        const pakkaDelete = confirm("Are you sure");
        if(pakkaDelete){
            deleteTodo(id);
        }
    };

    const checkboxCompleted = (item)=>{
        updateTodo(item._id, { isCompleted : !item.isCompleted});
    }
    
  return (
    <div className='flex flex-col gap-3 w-3/4 lg:w-1/3'>
        {
            todos.map((item, i)=>(
                <div className='flex items-center justify-between gap-4 px-4 py-2 bg-amber-100 rounded-2xl hover:scale-102 hover:hover:shadow-[11px_10px_6px_0px_rgba(0,0,0,0.1)] duration-300 cursor-pointer' key={i}>
                    <div className='flex gap-2 py-2 w-2/3'>
                        <input className='w-5 h-5' type="checkbox" checked={item.isCompleted} onChange={()=> checkboxCompleted(item)} />
                        <p className={`text-justify ${item.isCompleted ? "line-through" : ""}`} >{item.todo}</p>
                    </div>
                    <div className='flex gap-2 m-2 items-start'>
                        <button className='px-4 py-2 font-medium hover:bg-gray-200 cursor-pointer rounded-2xl' onClick={()=> editTodo(item)}>Edit</button>
                        <button className='px-4 py-2 font-medium hover:bg-gray-200 cursor-pointer rounded-2xl' onClick={()=> confimDelete(item._id)}>Delete</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ShowTodos