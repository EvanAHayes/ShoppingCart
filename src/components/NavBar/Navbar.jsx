import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
            <a className="navbar-brand" href="/">React Store</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Product A</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Product B</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Product C</a>
                    </li>
                </ul>
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">View Cart</button>      
            </div>
        </nav>
            </div>
        );
    }
}

export default Navbar;