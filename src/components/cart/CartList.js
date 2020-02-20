import React from 'react';
import CartItem from './CartItem';

function CartList(props) {
    const cart = props.value.cart;
    return (<div>

                {cart.map((item)=>{
                    return <CartItem key={item.id} value={props.value} item={item}/>
                })}
                
            </div>
    );
}

export default CartList;