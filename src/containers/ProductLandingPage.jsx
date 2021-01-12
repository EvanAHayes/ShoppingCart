import React, { Component} from 'react'
import ProductAImage from '../images/product1.jpg'
import ProductBImage from '../images/product2.jpg'
import ProductCImage from '../images/product3.jpg'
import Products from '../components/Products/Products'
import classes from "./index2.css";
import data from '../data.json';
import Aux from '../hoc/aux.js';
import SideMenu from '../components/UI/SideMenu/SideMenu'
import CartItems from '../components/Cart/CartItems/CartItems'

class ProductLandingPage extends Component {
    state = {
        productA: data.productA,
        productB: data.ProductB,
        productC: data.ProductC,
        cartItems: []
    }

    addItemToCart = (product) => {
        
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach((item) => {
            if(item.id === product.id){
                item++
                alreadyInCart = true;
            }
        });

        if(!alreadyInCart){
            cartItems.push({...product, count: 1})
            console.log(cartItems);
        }
        this.setState({cartItems});
    }

    render() {

        
       
        return (
            <Aux>
            <nav>
            <div>
            <div className={classes.tabbable}>      
            <ul className="nav nav-tabs content--tabs" id="content--tabs" role="tablist">    
            <li><h4>React Store</h4></li>
                
                <li className="nav-item">
              <a className="active show" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">ProductA</a>
                </li>
                
                <li className="nav-item">
                     <a data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">ProductB</a>
                   </li>
                <li className="nav-item">
            <a data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">ProductC</a>
            </li>  
              <li><SideMenu><CartItems/></SideMenu></li>    
            </ul>
            </div> 
                  
        
        <div className="container">
         <div className="tab-content" id="myTabContent">

         <div className="tab-pane fade active show" id="tab-1" role="tabpanel" aria-labelledby="1-tab"> 
         <Products 
         description={this.state.productA.description}
         image={ProductAImage}
         price={this.state.productA.price}
         name={this.state.productA.title}
         addToCart={() => this.addItemToCart(this.state.productA)} />
            </div>

            <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab"> 
            <Products 
            description={this.state.productB.description}
            image={ProductBImage}
            price={this.state.productB.price} 
            name={this.state.productB.title}  />
        </div>

        <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab">
        <Products 
        description={this.state.productCdescription}
        image={ProductCImage}
        price={this.state.productC.price} 
        name={this.state.productC.title} />
    </div>
         </div>
       </div>
     </div>
       </nav>
       </Aux>
        
        )
    }
}

export default ProductLandingPage;
