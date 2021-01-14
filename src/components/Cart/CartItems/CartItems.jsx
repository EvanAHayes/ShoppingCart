import React, { Component } from 'react';
import formatCurrency from '../../../util.js';
import classes from './CartItems.css';

class CartItems extends Component {
    render() {
        return (
            <div className="row" id={this.props.id}>
            <div className="col-md-6">
            <ul className="border border-dark cart-items">     
            <li>
            <button onClick={this.props.clicked} style={{float: 'right', cursor: 'pointer'}}>&#10005;</button>
            <img className={classes.cartImage} src={this.props.image} alt={this.props.title} />
            </li>
            <li>
                <p>{this.props.title}</p> 
                <p>({this.props.count}) x {formatCurrency(this.props.price)} </p>
            </li> 
           
             </ul>  
             </div>
            </div>
        )
    }
}

export default CartItems;
