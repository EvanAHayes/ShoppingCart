import React, { Component } from 'react'
import ProductDescription from '../components/Products/ProductDescription/ProductDescription.jsx';
//import Products from '../components/Products/Products'

class ProductLandingPage extends Component {
    render() {
        return (
            <div>
                 <main role="main" className="container">
        <div className="mt-5 pt-5">
           <ProductDescription product="productA" />
         </div>
                 </main>

            </div>
        )
    }
}

export default ProductLandingPage;
