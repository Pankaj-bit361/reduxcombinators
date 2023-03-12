import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Todo from '../Todo'


const Allroute = () => {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/todo" element={<Todo/>}></Route>
    </Routes>
     
    </div>
  )
}

export default Allroute
