import React, { Component } from 'react';
import './App.css';
//import 'bootstrap/dist/min/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/cart';
import Details from './components/Details';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />{/* render navbar outside route */}
        <Switch>
          <Route exact path="/" component={ProductList} />{/* render ProductList component to show products */}
          <Route path="/details" component={Details} />{/* render details for product */}
          <Route path="/cart" component={Cart} />{/* render cart page */}
          <Route component={Default} />{/* for default page not found */}
        </Switch>
        <Modal />
      </div>
    );
  }
}

export default App;
