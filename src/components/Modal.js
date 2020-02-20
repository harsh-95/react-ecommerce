import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { ProductConsumer } from '../context';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    /* destructuring modal functions from state object */
                    const {modalOpen, closeModal} = value;
                    /* destructuring values from modal product from state */
                    const {img, title, price} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }
                    else{
                        return (<div className="modalContainer">
                                    <div className="container">
                                        <div className="row">
                                            <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize py-5">
                                                <h5>item added to the cart</h5>
                                                <img src={img} className="img-fluid" alt="product"/>
                                                <h5>{title}</h5>
                                                <h5 className="text-muted">price : $ {price}</h5>
                                                <Link to="/">
                                                    <button className="btn btn-outline-primary" onClick={()=> closeModal()}>
                                                        Continue Shopping
                                                    </button>
                                                </Link>
                                                <Link to="/cart">
                                                    <button className="btn btn-outline-warning mx-3 my-3" onClick={()=> closeModal()}>
                                                        Go to cart
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                    }
                }}
            </ProductConsumer>
        );
    }
} 

export default Modal; 