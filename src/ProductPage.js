import React from'react';
import {Link}from 'react-router-dom';
import Product from './Product'

const ProductPage = ({match}) => {
    return (
        <> 
        <div>Strona produktu

        </div>
        <Product id={match.params.id}/>
        <Link to="/products">Powrót do listy produktow</Link>
        </>
     );
}
 
export default ProductPage;