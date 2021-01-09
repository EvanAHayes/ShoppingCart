import React, { Component } from 'react'
import ProductDescription from './ProductDescription/ProductDescription';

const Product_PRICES = {
    productA: 3.99,
    productB: 0.4,
    productC: 1.3
  
  }

class Products extends Component {
    state = {
        productName: "",
        description: "",
        price: ""
    }

    render() {
        return (
            <div>
                 <main role="main" class="container">
        <div class="mt-5 pt-5">
           <ProductDescription product="productA" />
         </div>
                 </main>

            </div>
        )
    }
}

export default Products;
