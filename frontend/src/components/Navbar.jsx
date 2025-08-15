import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = ({user,setUser}) => {
  const navigate=useNavigate();
  const handlelogout=()=>{
    localStorage.removeItem("token");
    setUser(null)
    navigate("/")
  }
  return (
    <nav className='bg-gray-800 p-4 '>
      <div className='container mx-auto flex justify-between '>
        <Link to='/' className='text-white text-lg font-bold'>MERN Auth</Link>
        <div>
          {user?(
          <button onClick={handlelogout} className='text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600 cursor-pointer'>Logout</button>
        ):(
          <>
           <Link to='/login' className='text-white mx-2 hover:underline'>Login</Link>
           <Link to='/register' className='text-white mx-2 hover:underline'>Register</Link>
          </>
        )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar