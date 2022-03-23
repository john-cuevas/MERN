import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams, Link } from 'react-router-dom'

const EditAuthor = () => {
    const {id} = useParams()
    const [name, setName] = useState("")
    const history = useHistory()
    const [error, setError] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                const author = res.data
                setName(author.name)
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
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
            <h3>Edit this author</h3>
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

export default EditAuthor