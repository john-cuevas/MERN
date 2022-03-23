import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams, Link } from 'react-router-dom'

const EditAuthor = () => {
    const {id} = useParams()
    const [name, setName] = useState("")
    const history = useHistory()
    const [errors, setErrors] = useState("")

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
                errors &&
                <p style = {{color:"red"}}>{errors}</p>
            }
            

        </div>
    )
}

export default EditAuthor