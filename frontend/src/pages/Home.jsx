import React from 'react'
import { Link } from 'react-router-dom'
const Home = ({user,err}) => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 p-4'>
      <div className='bg-white p-8 rounded-lg shadow-md text-center w-full max-w-lg'>
        {err&& <p className='text-red-500 mb-4 text-sm'>{err}</p>}
        {user?(
          <div>
            <h2 className='text-2xl mb-4 font-bold text-gray-800 '>Welcome, {user.username}</h2>
            <h2 className='text-gray-600 '>Email: {user.email}</h2>
          </div>
        ):<div>
            <h2 className='text-2xl mb-6 font-bold text-gray-800 '>Welcome!</h2>
            <p className='text-2xl font-bold mb-6 text-gray-800'>Please Login or Register </p>
            <div className='flex flex-col space-y-4'>
              <Link to="/login" className='w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700 font-medium'>Login</Link>
              <Link to="/register" className='w-full bg-gray-200 text-gray-800 p-3 rounded-md hover:bg-gray-300 font-medium'>Register</Link>
            </div>
          </div>}
      </div>
    </div>
  )
}

export default Home