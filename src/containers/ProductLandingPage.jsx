import React, { Component} from 'react'
import ProductAImage from '../images/product1.jpg'
import ProductBImage from '../images/product2.jpg'
import ProductCImage from '../images/product3.jpg'
import Products from '../components/Products/Products'
import classes from "./ProductLandingPage.css";
import data from '../data.json';
import Aux from '../hoc/aux.js';
import SideMenu from '../components/UI/SideMenu/SideMenu'
import CartItems from '../components/Cart/CartItems/CartItems'
import formatCurrency from '../util.js'


class ProductLandingPage extends Component {
    constructor(){
        super()
    this.state = {
        productA: data.productA,
        productB: data.ProductB,
        productC: data.ProductC,
        cartItems: [],
        count: 1
    }
    this.handleChange = this.handleChange.bind(this);
}

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    addItemToCart = (product) => {   
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach((item) => {
            if(item.id === product.id){
                item.count++
                alreadyInCart = true;
            }
        });

        if(!alreadyInCart){
            if(this.state.count === 0){
            cartItems.push({...product, count: 1})
              alert("Item has been added")
            }else{
                cartItems.push({...product, count: this.state.count})
                alert("Item has been added")
            }
           
        }
        this.setState({cartItems});
    }

    removeItemFromCart = (product) => {  
        const cartItems = this.state.cartItems.slice();
        this.setState({cartItems: cartItems.filter((item) => item.id !== product.id),});    
    }

    purchaseProducts = () => {
        this.props.history.push({
            pathname:'/checkout',
            data: this.state.cartItems
        });    
    }

    IncrumentCount = () => {
        this.setState((prevState) => { 
            return {count: prevState.count + 1}})
    }

    DecrumentCount = () => {
        this.setState((prevState) => { 
            return {count: prevState.count - 1}})
    }

    render() {

        let getCartItems = this.state.cartItems.map((items) => {
            return( 
                <CartItems 
                    key={items.id}
                    title={items.title}
                    price={items.price}
                    count={items.count}
                    image={items.image}
                    clicked={() => this.removeItemFromCart(items)} /> 

        )})
       
        return (
            <Aux>
            <nav>
            <div>
            <div className={classes.tabbable}>      
            <ul className="nav nav-tabs content--tabs" id="content--tabs" role="tablist">    
            <li className="nav-item"><h4>React Store</h4></li>
                <li className="nav-item">
              <a className="active show" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">ProductA</a>
                </li>
                
                <li className="nav-item">
                     <a data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">ProductB</a>
                   </li>
                <li className="nav-item">
            <a data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">ProductC</a>
            </li>  
              <li className="nav-item">  
              <SideMenu>
              {getCartItems}
              <br/>
              <div className="cart">
                <div className="total">
                {this.state.cartItems.length === 0 ?<div>Cart is empty. Please Add Items to cart</div>: 
                    <div>
                    <div> Subtotal:{" "}
                    {formatCurrency(this.state.cartItems.reduce((a, c) => a + c.price * c.count, 0))}
                  </div>
                    <button className="btn btn-primary" onClick={this.purchaseProducts}>Check Out</button>
                     </div> }
                </div>
              </div>
              </SideMenu>
              </li> 
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
         addToCart={() => this.addItemToCart(this.state.productA)}
         change={this.handleChange}
         value={this.state.count}  
         add={this.IncrumentCount}
         subtract={this.DecrumentCount}/>
            </div>

            <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab"> 
            <Products 
            description={this.state.productB.description}
            image={ProductBImage}
            price={this.state.productB.price} 
            name={this.state.productB.title}
            addToCart={() => this.addItemToCart(this.state.productB)} 
            change={this.handleChange}
            value={this.state.count}  
            add={this.IncrumentCount}
            subtract={this.DecrumentCount} /> 

        </div>

        <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab">
        <Products 
        description={this.state.productC.description}
        image={ProductCImage}
        price={this.state.productC.price} 
        name={this.state.productC.title}
        addToCart={() => this.addItemToCart(this.state.productC)} 
        change={this.handleChange}
        value={this.state.count}  
        add={this.IncrumentCount}
        subtract={this.DecrumentCount}/>
    </div>
         </div>
       </div>
     </div>
       </nav>
       </Aux> )
    }
}

export default ProductLandingPage;
