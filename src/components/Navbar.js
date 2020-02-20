import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-default">
                <Link to="/">
                    <img src={logo} alt="store"/>
                </Link>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <Link to="/">Products</Link>
                    </li>
                </ul>
                <Link to="/cart">
                    <button className="btn btn-outline-success"><i className="fas fa-shopping-cart"></i> My cart</button>
                </Link>
            </nav>
        );
    }
}
export default Navbar;