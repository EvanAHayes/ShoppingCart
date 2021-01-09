import React, { Component } from 'react'
//import ProductDescription from '../components/Products/ProductDescription/ProductDescription.jsx';
import Products from '../components/Products/Products'
import "./index2.css";

class ProductLandingPage extends Component {
    state = {
        product: 0,
        Total: 0
    }
    render() {
        return (
            <div>
           
            <nav>
            <ul className="nav-tabs content--tabs" id="content--tabs" role="tablist">     
                <li><h4>React Store</h4></li>
                
                <li className="nav-item" >
                <a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">productA</a></li>
                
                <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">productB</a></li>
                
                <li id="tab-3" data-toggle="tab" role="tab" href="#tab-3" aria-selected="true" aria-controls="tab-3">
                <a className="nav-link" href="/">productC</a></li>
                
                <li className="float-right nav-item"><a href="/">View Cart</a></li>
                
            </ul>
        
        

        
        <div className="container">
         <div className="tab-content" id="myTabContent">
           <div className="tab-pane fade show active" id="tab-1" aria-labelledby="tab-1" role="tabpanel">
           contact 1
           </div>
           <div className="tab-pane fade" id="tab-2" aria-labelledby="tab-2" role="tabpanel">Content 2</div>
         </div>
       </div>

       </nav>
       </div>
        
        
        )
    }
}

export default ProductLandingPage;
