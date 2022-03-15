import React, { useState } from 'react'

const InputDisplay = (props) => {
    console.log(props)

    const updatedTasks = [...props.tasks]

    const Handler = (i, newValue) => {
        updatedTasks[i].completed = newValue
        props.handleUpdate(updatedTasks)
    }

    const deleteHandler = (deleteID) => {
        const filteredTasks = props.tasks.filter((item, i) => i !== deleteID)
        props.handleUpdate(filteredTasks)
    }
    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Task ID</th>
                        <th>Task</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.tasks.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td className={
                                        item.completed === true
                                            ? "text-decoration-line-through"
                                            : ""
                                    }
                                    >{item.task}</td>
                                    <td>{item.completed ? "Yes" : "No"}
                                        <input type="checkbox" checked={item.completed}
                                            onChange={(e) => Handler(i, e.target.checked)}
                                        />
                                    </td>
                                    <td>
                                        <button className='btn btn-danger'
                                            onClick={() => deleteHandler(i)}
                                        >
                                            Delete</button>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default InputDisplay


