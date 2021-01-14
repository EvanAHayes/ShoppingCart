import React from 'react'
import CartItems from '../Cart/CartItems/CartItems'

const CheckoutComponent = (props) => {
    return(
      <div>
      <h1>Checkout</h1>
      <div className="container">
        <CartItems title={props.title} price={props.price}/>
        </div>
      </div>
    )
}

export default CheckoutComponent;
