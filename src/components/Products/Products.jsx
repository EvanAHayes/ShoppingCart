import React, { Component } from 'react'
import ProductControls from './ProductsControls/ProductControls'

class Products extends Component {

    render() {
        
        return (
            <div>  
                <p>{this.props.name}</p>   
                 <img src={this.props.image} alt={this.props.name} />
                 <p>{this.props.description}</p>
                 <p>{this.props.price}</p>
                 <ProductControls subtract={this.props.subtract} add={this.props.add} value="1" />

                 <button onClick={this.props.addToCart}>Add To Cart</button>              
              
         </div>
        )
    }
}

export default Products;
