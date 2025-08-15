import {BrowserRouter as Router , Routes,Route,Navigate} from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { useEffect, useState } from "react"
import axios from "axios"
import NotFound from "./components/NotFound"

function App() {
   const [user,setUser]=useState(null);
   const [error,setError]=useState('');
   const [loding,setLoading]=useState(true);
  //  console.log(user);
   useEffect(()=>{
    const fetchUser=async () => {
      const token=localStorage.getItem("token");
      await new Promise((f)=>setTimeout(f,2000))
      if(token){
        try{
          const res=await axios.get('/api/users/me',{
            headers:{Authorization:`${token}`}
          })
          setUser(res.data)
        }catch(err){
          setError("Failed to fetch user data")
          localStorage.removeItem("token")
        }
      }
      setLoading(false)
    }
    fetchUser()
   },[])

   if(loding){
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-xl font-bold text-white">Loading...</div>
      </div>
    )
   }

  return (
    <Router>
      <Navbar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home user={user} error={error}/>}/>
        <Route path="/login" element={user? <Navigate to='/'/>:<Login setUser={setUser}/>}/>
        <Route path="/register" element={  <Register setUser={setUser}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
