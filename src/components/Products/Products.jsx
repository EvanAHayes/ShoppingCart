import React, { Component } from 'react'
import ProductControls from './ProductsControls/ProductControls'
import formatCurrency from '../../util.js';

class Products extends Component {
    //state for value 

    render() {
        return (
            <div className="container">
            <h4>{this.props.name}</h4>        
                <div className="row">
                <div className="col-auto">
                 <img src={this.props.image} alt={this.props.name} />
                 </div>
                 <div className="col-sm-6">
                 <p>{this.props.description}</p>
                 </div>
                 </div>
                
                 <label>{formatCurrency(this.props.price)}</label>
                 <ProductControls subtract={this.props.subtract} 
                                  add={this.props.add} 
                                  change={this.props.change} 
                                  value={this.props.value} />
                 <br/>
                 <button onClick={this.props.addToCart}>Add To Cart</button>     
         </div>
        )
    }
}

export default Products;
