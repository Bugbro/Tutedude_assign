import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const ShowTodos = () => {

    const {todos} = useContext(TodoContext);

  return (
    <div className='flex flex-col gap-3 w-3/4 lg:w-1/3'>
        {
            todos.map((item, i)=>(
                <div className='flex items-center justify-between gap-4 px-4 py-2 bg-amber-100 rounded-2xl hover:scale-102 hover:hover:shadow-[11px_10px_6px_0px_rgba(0,0,0,0.1)] duration-300 cursor-pointer' key={i}>
                    <div className='flex gap-2 py-2 w-2/3'>
                        <input type="checkbox" />
                        <p className='text-justify'>{item.todo}</p>
                    </div>
                    <div className='flex gap-2 m-2 items-start'>
                        <button className='px-4 py-2 font-medium hover:bg-gray-200 cursor-pointer rounded-2xl'>Edit</button>
                        <button className='px-4 py-2 font-medium hover:bg-gray-200 cursor-pointer rounded-2xl'>Delete</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ShowTodos