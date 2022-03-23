import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState("")
    const history = useHistory()
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        // ask question
        axios.post(`http://localhost:8000/api/authors`, {name})
            .then(res => {
                history.push("/")
            })
            .catch(err => {
                console.log(err.response.data)
                setError(err.response.data.message)
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
                error &&
                <p style = {{color:"red"}}>{error}</p>
            }
            

        </div>
    )
}

export default Create