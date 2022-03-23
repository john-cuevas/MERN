import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState("")
    const history = useHistory()
    const [errors, setErrors] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        // ask question
        axios.post(`http://localhost:8000/api/authors`, {name})
            .then(res => {
                history.push("/")
            })

            // .catch(err => {
            //     console.log(err.response.data.errors.name.message)
            //     setError(err.response.data.errors.name.message)
            // })
            .catch(err => {
                const errorResponse = err.response.data.errors
                const errorArr = []
                for ( const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key]["message"])
                }
                console.log(errorArr)
                setErrors(errorArr)
            })
    }
    return (
        <div>
            <Link to={`/`}>Home</Link>
            <h3>Add a new author:</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button>Submit</button>
            </form>

            {
                errors &&
                <p style = {{color:"red"}}>{errors}</p>
            }
            

        </div>
    )
}

export default Create