import React, { Component } from 'react';
import ProductA from '../../../images/product1.jpg';
import './ProductDescription.css';

class ProductDescription extends Component {
    render() {
        let productDescription = null;

        switch(this.props.product){
            case('productA'):
            productDescription = (<div>
            <img src={ProductA} alt="product A" />
                <p>
                This is a ketchup container. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div> );
              break;
              case('productB'):
            productDescription =( <div>
            <img src="/src/images/product2.jpg" alt="product B" />
                <p>
                This is a ketchup container. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>);
              break;
              case('productC'):
            productDescription = (<div>
            <img src="/src/images/product3.jpg.jpg" alt="product B" />
                <p>
                This is a ketchup container. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>);
              break;
              default:
                productDescription = null;
        }

        return productDescription;
    }
}

export default ProductDescription;
