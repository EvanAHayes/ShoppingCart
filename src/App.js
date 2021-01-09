import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import ProductLandingPage from './containers/ProductLandingPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';


function App() {
  return (
    <div>
       <BrowserRouter>
       <Navbar>
        <Switch>
        <Route path="/" exact component={ProductLandingPage} />
        </Switch>
       </Navbar>
       </BrowserRouter>
    </div>
  );
}

export default App;
