import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [products, setProducts] = useState()
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
            .then(res => {
                setRefresh(!refresh)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>All Products:</h2>
            <div>
                {
                    products &&
                    products.map((product, i) => (
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Product Title</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td key={i}><Link to={`/products/${product._id}`}>{product.title}</Link></td>
                                    <td><Link to={`/products/${product._id}/edit`}>Edit</Link></td>
                                    <td><button onClick={() => handleDelete(product._id)}>Delete</button></td>
                                </tr>
                            </tbody>
                        </table>
                    ))
                }
            </div>


        </div>
    )
}

export default Dashboard

// return (
//     <div>
//         <h2>All Products</h2>
//         <table className='table'>
//             <thead>
//                 <tr>
//                     <th>Product Title</th>
//                     <th>Price</th>
//                     <th>Description</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     products &&
//                         products.map((product, i) =>(
//                             <tr key={i}>
//                                 <td>{product.title}</td>
//                                 <td>{product.price}</td>
//                                 <td>{product.description}</td>
//                             </tr>
//                         ))
//                 }
//             </tbody>

//         </table>
//     </div>
// )