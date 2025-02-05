import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {removeTodo} from "../feature/todos/todoSlice"

function Todos() {
const todos = useSelector(state => state.todos)
const dispatch = useDispatch()

  return (
   <>
   
    <div> Todo </div>
    <ul>
        {todos.map((todo)=>(
            <li key={todo.id}>
                <div>{todo.text} </div>
                <button onClick={()=>dispatch(removeTodo(todo.id))}> X</button>
                 </li>
        ))}
    </ul>
   </>
  )
}

export default Todos