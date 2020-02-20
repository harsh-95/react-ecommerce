import React,{ Component } from 'react';
import { ProductConsumer } from '../../context';
import Product from '../Product';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import Title from '../Title';
import CartList from './CartList';
import CartTotals from './CartTotals';

class Cart extends Component{
    render(){
        return(
                <section>
                    <ProductConsumer>
                        {value=>{
                            if(value.cart.length>0){
                                return (<React.Fragment>
                                            <div className="container">
                                            <Title title="Our Cart"/>
                                            <CartColumns/>
                                            <CartList value={value}/>
                                            <CartTotals value={value} history={this.props.history}/>
                                            </div>
                                        </React.Fragment>)
                            }
                            else{
                               return <EmptyCart/>
                            }
                        }}
                    </ProductConsumer>
                </section>
        );
    }
}
export default Cart;