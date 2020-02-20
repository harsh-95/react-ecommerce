import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProductConsumer } from '../context';

class Product extends Component{
    render(){
        /* destructuring values from props product object */
        const {id, title, img, price, inCart} = this.props.product;
        return(
            <div className="col-9 col-md-6 col-lg-3 my-5 mx-auto">
                {/* Product Card start */}
                <div className="card">
                    <ProductConsumer>
                        {(value) => (<div className="img-container p-5" onClick={()=> value.handleDetail(id)}>
                                        <Link to='/details'> 
                                            <img src={img} alt={title} title={title} className="card-img-top"/>
                                        </Link>
                                        <button 
                                            className="cart-btn" 
                                            title={inCart?"In Cart":"Add To Cart"} 
                                            disabled={inCart ? true: false} 
                                            onClick={()=> {
                                                value.addToCart(id); 
                                                value.openModal(id);
                                                }}>
                                            {inCart? <span className="text-capitalize">in cart</span> : <i className="fas fa-shopping-cart"></i>}
                                        </button>
                                    </div>)}
                    </ProductConsumer>
                    <div className="card-footer justify-content-between d-flex">
                        <p>{title}</p>
                        <h5>${price}</h5>
                    </div>
                </div>
                {/* Product Card end */}
            </div>
        );
    }
}

/* Product object validations */
Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        img: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};

export default Product;