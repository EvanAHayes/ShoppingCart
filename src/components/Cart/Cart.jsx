import React, { Component } from 'react'


class Cart extends Component {
    render() {
        const {cartItem} = this.props
        return (
            <div>
           {cartItem.length === 0? <div>Cart is empty. Please Add Items to cart</div>
        : <div>You Have {cartItem.length} in your cart </div>}
            </div>
        )
    }
}

export default Cart;
