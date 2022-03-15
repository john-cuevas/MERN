import React, { useState } from 'react'


// input
// 1. useState
// 2. initiate the state
// 3. eventHandler

// form
// 1. create function for submit
// 2. e.preventDefault
// 3. eventHandler
const InputForm = (props) => {
    const [task, setTask] = useState("")
    const [completed, setCompleted] = useState(false)

    const handleSubmit = (e) => {
        // prevent refresh
        e.preventDefault()
        console.log({ task, completed })
        props.onNewTask({ task, completed })
    }
    return (
        <div>
            <h1>My Tasks</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='form-label'> Task </label>
                    <textarea name="task" className='form-control'
                        onChange={(e) => setTask(e.target.value)}></textarea>
                </div>
                <div>
                    <label className='form-label'> Completed? </label>
                    <input type="checkbox" name="completed" checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}></input>

                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default InputForm
