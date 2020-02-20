import React,{ Component } from 'react';
import {ProductConsumer} from '../context';
import { detailProduct } from '../data';
import {Link} from 'react-router-dom';
import './Details.css'; 

class Details extends Component{


    handleMouse = (event) =>{console.log(event);
        document.getElementById('product-details').style.display = 'none';
        document.getElementById('zoom').style.display = 'flex';
        const inner = document.querySelector(".inner");
        const left = document.querySelector(".left");
        let { width, height } = left.getBoundingClientRect();
        let xAxis = event.offsetX / width * 100;
        let yAxis = event.offsetY / height * 100;
        inner.style.transform = `translate(-${xAxis}%, -${yAxis}%)`;
    }

    render(){
        
        return(
            <React.Fragment>
            <ProductConsumer>
                {(value)=>{
                    /* destructuring values from detail object from state */
                    const {id,img,title,price,company,info,inCart} = value.detail;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                {/* Product Title */}
                                <div className="col-10 mx-auto text-center">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                {/* Product Image */}
                                <div className="col-10 mx-auto col-md-6">
                                <div className="wrapper">
                                    <div className="left" 
                                         onMouseMove={(e)=>this.handleMouse(e.nativeEvent)} 
                                         onMouseLeave={()=>{document.getElementById('zoom').style.display = 'none';document.getElementById('product-details').style.display = 'block';}}>
                                        <img src={img} />
                                    </div>
                                </div>
                                </div>
                                {/* Product Details */}
                                <div className="col-10 mx-auto col-md-6">
                                    <div className="wrapper2" id="zoom">
                                        <div className="right">
                                            <div className="inner">
                                            <img src={img}  />
                                            </div>
                                        </div>
                                    </div>
                                    <div id="product-details" className="my-5">
                                        <div><h4 className="d-inline-block">Model:</h4><span className="mx-3">{title}</span></div>
                                        <div><h4 className="d-inline-block">Made By:</h4><span className="mx-3 text-capitalize">{company}</span></div>
                                        <div><h4 className="d-inline-block">Price:</h4><span className="mx-3">{price}</span></div>
                                        <div><h4 className="d-inline-block">Info:</h4><span className="mx-3">{info}</span></div>
                                        <div className="d-flex my-3">
                                            <Link to="/">
                                                <button className="btn btn-outline-primary">Back to products</button>
                                            </Link>
                                            <button className="btn btn-outline-warning add-cart-btn mx-3" 
                                            title={inCart?"In Cart":"Add to Cart"} 
                                            onClick={()=> {
                                                value.addToCart(id);
                                                value.openModal(id);
                                                }} 
                                            disabled={inCart?true:false}>
                                                {inCart? <span>In Cart</span> : <span>Add to Cart</span>}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ProductConsumer>
            </React.Fragment>
        );
    }
}
export default Details;