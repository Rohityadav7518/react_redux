import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../feature/todos/todoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handelSubmit = (e) => {
        e.preventDefault()

        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <>
            <div>
                <form onSubmit={handelSubmit}>
                    <input for="text" value={input} placeholder='Enter Text Here' onChange={(e) => setInput(e.target.value)} />
                    <button type='submit'> AddTodo</button>
                </form>

            </div>
        </>
    )
}

export default AddTodo