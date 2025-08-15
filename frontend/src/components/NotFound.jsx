import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate=useNavigate()
    const navigateToHomePage=()=>{
        navigate("/")
    }
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-2xl'>
        404 - Page Not Found
        <div className='text-center bg-gray-800 p-3 rounded-2xl mt-4 text-md font-medium hover:bg-gray-600 cursor-pointer hover:rounded-xl'>
        <button onClick={navigateToHomePage} className='cursor-pointer'>Home </button>
        </div>
    </div>
  )
}

export default NotFound