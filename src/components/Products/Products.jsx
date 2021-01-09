import React, { Component } from 'react'
import ProductDescription from './ProductDescription/ProductDescription';

// const Product_PRICES = {
//     productA: 3.99,
//     productB: 0.4,
//     productC: 1.3
  
//   }

class Products extends Component {
    state = {
        productName: "",
        description: "",
        price: ""
    }

    render() {
        return (
            <div>     
           <ProductDescription product="productA" />
         </div>
        )
    }
}

export default Products;
