import React from 'react'
import useFetch from '../hooks/useFetch'
import spinner from "../assets/spinner.svg"

const ShowData = () => {

  const url = "https://api.escuelajs.co/api/v1/products"

  const {data, loading, error } = useFetch(url);  

  if(loading){
    return <p className='flex items-center justify-center h-screen gap-4'>
      <img src={spinner} className='w-10 h-10 animate-spin'/>
      Loading...
      </p>
  }
  if(error){
    return <p className='flex items-center justify-center h-screen gap-4'>
      Error while fetching data. Please try again. {error}
      </p>
  }
  
  if(data){
    console.log(data.slice(0,1)[0].description.split(" ").slice(0,30).join(" "));
    return (
      <div className='grid grid-cols-1 place-items-center justify-items-start sm:grid-cols-3 lg:grid-cols-5 gap-8 '>
          {data.map((item, i)=>(
            <div key={i} className='overflow-hidden hover:scale-105 duration-200'>
              <img src={item.images[0]} className='h-60 ' />
              <h2 className='text-2xl font-bold h-16 overflow-hidden my-2'>{item.title}</h2>
              <p className=''>{item.description.split(" ").slice(0,30).join(" ")}</p>
              <button className='border rounded-2xl px-6 py-2 mt-2 cursor-pointer bg-yellow-500 text-black hover:bg-red-400 duration-200'>Rs. {item.price}</button>
            </div>
          ))}
      </div>
    )
  }
}

export default ShowData