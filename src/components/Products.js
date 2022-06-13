import React from 'react'
import MyComponent from '../hooks/MyComponent'
import './product.css'

const Products = () => {
    // const [products, setProducts] = useState([])
    // const [sortBy, setSortBy] = useState('')
    // const [order, setOrder] = useState('')
    // const []




    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 my-5">
                <MyComponent image='./mobile_img/img1.png' title='Card title' description='this is description'/>
                
                
                
            </div>
        </>
    )
}

export default Products