import React, { Component } from 'react';
import data from '../data.json';
import classes from './index.css'

class ProductCLandingPage extends Component {
    state = {
        products: data.products
    }
    render() {
        return (
            <div className="content">
            <header>
            <h1>React</h1>
            </header>
            <main>
            <div className={classes.main}>Products</div>
            <div className={classes.main}>Products</div>
            <div className={classes.main}>Products</div>

            <div className={classes.side}>View Cart</div>
            </main>
                
            </div>
        )
    }
}
export default ProductCLandingPage