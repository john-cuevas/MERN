// 1. npx create-react-app client
// 2. cd client
// 3. npm install axios react-router-dom@5 
// 4. npm start
// 5. views and components folders

//****************APP.js******************/

import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Dashboard from "./views/Dashboard";
import Create from "./views/Create";
import EditAuthor from "./views/EditAuthor";
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <h1>Favorite Authors</h1>
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route exact path="/new">
                        <Create />
                    </Route>
                    <Route exact path="/edit/:id">
                        <EditAuthor />
                    </Route>
                </Switch>
            </BrowserRouter>

        </div>
    );
}

export default App;
//****************VIEWS******************/
//****************CREATE.jsx******************/
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

            {/* errors with multiple  */}

            {
                errors.map((err, i) =>(
                    <p key = {i} style = {{color:"red"}}>{err}</p>
                ))
            }
            

        </div>
    )
}

// export default Create

//****************DASHBOARD.jsx******************/

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [authors, setAuthors] = useState()
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }, [refresh])

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
            .then(res => {
                setRefresh(!refresh)
            })
            .catch(err => console.log(err))
    }



    return (
        <div>
            <h3>We have quotes by:</h3>
            <Link to={`/new`}>Add an Author</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Product Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        authors &&
                        authors.map((author, i) => (
                            <tr key={i}>
                                <td>{author.name}</td>
                                <td><Link to={`/edit/${author._id}`}>Edit</Link></td>
                                <td><button onClick={() => handleDelete(author._id)}>Delete</button></td>
                            </tr>
                        ))}
                </tbody>

            </table>

        </div>
    )
}

// export default Dashboard

//****************EDIT.jsx******************/

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

// export default EditAuthor