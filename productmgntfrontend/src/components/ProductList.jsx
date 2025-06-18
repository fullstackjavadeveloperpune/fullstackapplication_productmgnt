import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const ProductList = () => {


    const [products, setProducts]= useState([])

    useEffect(()=>{

        loadProducts()
    }, [])

    const loadProducts = async()=>{
        const result = await axios.get("http://localhost:8080/products/findall")

        setProducts(result.data)
    }

  return (
    <div className='container'>

        <div className='row'>

            <Link to={`/add-product`} className='btn btn-success'>Add Product</Link>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Description</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        products.map((product)=>(
                            <tr>
                                <td>{product.productId}</td>
                                <td>{product.productName}</td>
                                <td>{product.productPrice}</td>
                                <td>{product.productDescription}</td>

                            </tr>
                        )
                    )
                    }
                </tbody>

                
            </table>

           

        </div>

    </div>
  )
}
