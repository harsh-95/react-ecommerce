import React from 'react';

function CartItem({item, value}) {
    const {id,img,title,price,total,count} = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div className="row my-1 text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width:"5rem", height:"5rem"}} className="img-fluid"/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product : </span>{title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price : </span>$ {price}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="jsutify-content-center">
                    <span className="btn btn-sm mx-1 btn-outline-primary" onClick={()=> decrement(id)}>-</span>
                    <span className="btn mx-1 btn-outline-primary">{count}</span>
                    <span className="btn btn-sm mx-1 btn-outline-primary" onClick={()=> increment(id)}>+</span>
                </div>
            </div>
            <div className="col-10 mx-auto my-2 col-lg-2">
                <div className="cart-icon" onClick={()=> removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>Item Total : $ {total}</strong>
            </div>
        </div>
    );
}

export default CartItem;