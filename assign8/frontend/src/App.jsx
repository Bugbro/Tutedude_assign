import React from 'react'
import TodoInput from './components/TodoInput.jsx';
import ShowTodos from './components/ShowTodos.jsx';

const App = () => {
  return (
    <div className='bg-linear-to-b from-teal-400 to-indigo-600 h-full text-center flex flex-col items-center justify-center min-h-screen'>
      <TodoInput/>
      <ShowTodos/>
    </div>
  )
}

export default App;