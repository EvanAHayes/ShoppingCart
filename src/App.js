//import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ProductLandingPage from './containers/ProductLandingPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Product from './containers/ProductCLandingPage';


function App() {
  return (
    <div>
    <BrowserRouter>
    
    <Switch>
    <Route exact path="/" component={ProductLandingPage} />
    <Route path="/c" component={Product} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
