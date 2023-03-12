import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
const navigate=useNavigate()

  return (
    <div>
    <h1>Welcome To home page</h1>
      <button onClick={()=>navigate("/login")} >Login</button>
      <button onClick={()=>navigate("/todo")}>Todos</button>
    </div>
  )
}

export default Home
