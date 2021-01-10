import React, { Component } from 'react'
import ProductDescription from './ProductDescription/ProductDescription';
import ProductControls from './ProductsControls/ProductControls'

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
                 <img src={this.props.image} alt={this.props.title}/>
                 <p>{this.props.description}</p>
                 <p>{this.props.price}</p>
                 <ProductControls subtract={this.props.subtract} add={this.props.add} />              
              
         </div>
        )
    }
}

export default Products;
