import React from 'react';
import ProductLandingPage from './containers/ProductLandingPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import Navbar from './components/NavBar/Navbar';


function App() {
  return (
    <div>
    <BrowserRouter>
    
    <Switch>
    <Route exact path="/" component={ProductLandingPage} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
