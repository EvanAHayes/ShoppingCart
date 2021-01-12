import React, { Component } from 'react'
import styles from './CartItems.css';

class CartItems extends Component {
    render() {
        return (
            <div className={styles.design}>
                <p>{this.props.title}</p>
                <p>{this.props.price}</p>
            </div>
        )
    }
}

export default CartItems;
