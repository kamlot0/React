import React from'react';
import {Link} from 'react-router-dom'
import './ProductList.css'

const products = ["car", "bike", "motocycle"];
const ProductList = () => {
    const list = products.map(product=>(
        <li key={product}>
            <Link to={`/product/${product}`}>{product}</Link>
        </li>
    ))
    return ( 
        <div className="products">
        <h2>ProductList</h2>
        <div>
            <ul>
                {list}
            </ul>
        </div>
        </div>
     );
}
 
export default ProductList;