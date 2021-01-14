import React, { Component } from 'react'
import CartItems from '../../components/Cart/CartItems/CartItems'
import formatCurrency from '../../util.js'


class Checkout extends Component {

  Puchased = () => {
    this.props.history.push('/purchased');
  }

    render() {
        const {data} = this.props.location
        let ItemsData = data.map((item) => {
            return(
            <CartItems 
                  key={item.id}
                  title={item.title} 
                  price={item.price} 
                  count={item.count}/>
            )
        })

        return (
            <div className="container">
            <h1>Checkout</h1>
              {ItemsData}

              <div className="cart">
                <div className="total">
                  <div> Subtotal:{" "}
                    {formatCurrency(data.reduce((a, c) => a + c.price * c.count, 0))}
                  </div>
                </div>
              </div>
              <button onClick={this.Puchased} type="button" className="btn btn-success">Purchase</button>
            </div>

        )
    }
}

export default Checkout;
