import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'
import { addaction } from '../../redux/Login/action'
const Login = () => {
const [email,setemail]=useState("eve.holt@reqres.in")
const [password,setpassword]=useState("")

const {token}=useSelector((state)=>state.token)
console.log(token)
const dispatch=useDispatch()
const handlelogin=()=>{
let ob={
    email,password
}

axios.post(`https://reqres.in/api/login`,ob)
.then((res)=>{
    console.log(res.data)
    dispatch(addaction(res.data.token))
})
}


  return (
    <div>
      <input type="text" placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)} />
      <input type="text" placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
      <button onClick={handlelogin} >Login</button>
      <br/>
      <br/>
      <br/>
      <h1>Token:{token}</h1>
    </div>
  )
}

export default Login
