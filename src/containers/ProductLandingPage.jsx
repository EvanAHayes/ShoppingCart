import React, { Component } from 'react'
import Navbar from '../components/NavBar/Navbar'
import Products from '../components/Products/Products'

class ProductLandingPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Products />
            </div>
        )
    }
}

export default ProductLandingPage;
