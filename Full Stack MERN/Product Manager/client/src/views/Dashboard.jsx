import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
    const [products, setProducts] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products &&
                            products.map((product, i) =>(
                                <tr key={i}>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                </tr>
                            ))
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Dashboard