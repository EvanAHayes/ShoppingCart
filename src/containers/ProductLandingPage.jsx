import React, { Component } from 'react'
//import ProductDescription from '../components/Products/ProductDescription/ProductDescription.jsx';
import Products from '../components/Products/Products'
import classes from "./index2.css";
import data from '../data.json';

class ProductLandingPage extends Component {
    state = {
        productA: data.productA,
        productB: data.ProductB,
        productC: data.ProductC
    }
    render() {
        const ProductAResults = this.state.productA.map(productA => {
            return(
                <Products key={productA.id}
                          description={productA.description}
                          image={productA.image}
                          price={productA.price} />

            )
        })
        return (
            <div>
           
            <nav>
            <div>
            <div className={classes.tabbable}>
            <div className={classes.valign}>
                <button class="btn btn-primary btn-xs" type="submit">Test button</button>
            </div>

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
               <li className="float-right nav-item"><a href="/">View Cart</a></li>
            </ul>

            </div>        
        
        <div className="container">
         <div className="tab-content" id="myTabContent">

         <div className="tab-pane fade active show" id="tab-1" role="tabpanel" aria-labelledby="1-tab"> 
                {ProductAResults}
            </div>

            <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab"> 
                2
        </div>

        <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab">
            3
    </div>
         </div>
       </div>
     </div>
       </nav>
       </div>
        
        
        )
    }
}

export default ProductLandingPage;
