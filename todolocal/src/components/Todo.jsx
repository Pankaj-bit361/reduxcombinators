import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtodoaction } from '../redux/Todo/action'

const Todo = () => {
const [todo,settodo]=useState("")
const dispatch=useDispatch()
const {Todos} =useSelector((state)=>state.todo)
console.log(Todos)
const handletodo=()=>{
  let ob={
    title:todo,
    status:false
  }
dispatch(addtodoaction(ob))
settodo("")
}

  return (
    <div>
      <input type="text" placeholder='Add todos'  value={todo} onChange={(e)=>settodo(e.target.value)} />
      <button onClick={handletodo}>ADD</button>
      {Todos?.map((item)=>(
        <>
          <h1>{item.title} - {item.status?"Completed":"Pending"}</h1>
        </>
      ))}
    </div>
  )
}

export default Todo
