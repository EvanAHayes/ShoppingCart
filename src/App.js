import React from 'react';
import ProductLandingPage from './containers/ProductLandingPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import Purchased from './containers/Purchased/Purchased';

   
function App() {
  return (
    <div>
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={ProductLandingPage} />
    <Route exact path="/checkout" component={Checkout} />
    <Route exact path="/purchased" component={Purchased} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
