import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const DisplayList = (props) => {
    const {products} = props

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
            .then(res => {
                console.log("hello world")
                props.reload()
            })
            .catch(err => console.log(err.response))
    }

    return (
        <div>
            <h2>All Products:</h2>
            <div>
                
                    
                    <table className='table'>
                            <thead>
                                <tr>
                                    <th>Product Title</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                            products.map((product, i) => (
                                <tr key={i}>
                                    <td><Link to={`/products/${product._id}`}>{product.title}</Link></td>
                                    <td><Link to={`/products/${product._id}/edit`}>Edit</Link></td>
                                    <td><button onClick={() => handleDelete(product._id)}>Delete</button></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    
                
            </div>


        </div>
    )
}

export default DisplayList