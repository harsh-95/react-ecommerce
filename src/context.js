import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

/* create a Context object */
const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        products: [],
        detail: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubtotal:0,
        cartTax:0,
        cartTotal:0
    }

    componentDidMount(){
        /* set copy of products from data.js to products[] array */
        this.setProducts();
    }

    /* function to display the modal */
    openModal = id =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {modalProduct: product, modalOpen: true}
        })
    }

    /* function to close the modal */
    closeModal = () =>{
        this.setState(()=>{
           return {modalOpen: false}
        })
    }

    /* function to increase product quantity */
    increment = id =>{
        const product = this.state.cart.find(item=>item.id === id);
        product.count += 1;
        product.total += product.price;
        this.setState(()=>{
            this.addTotals();
        })
    }

    /* function to decrease product quantity */
    decrement = id =>{
        const product = this.state.cart.find((item)=>item.id === id);
            product.count -= 1;
            if(product.count === 0){
                this.removeItem(id);
            }
            else{
                product.total -= product.price;
                this.setState(()=>{
                    this.addTotals();
                })
            }
    }

    /* function to remove the specific product from the cart */
    removeItem = id =>{
        console.log('item removed'+id);
        const tempCart = this.state.cart.filter((item)=>item.id !== id);

        const tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = false;
        product.count = 0;
        product.total = product.price;
        this.setState(()=>{
            return{
                cart: tempCart,
                products: tempProducts
            }
        },()=>{this.addTotals();})
    }

    /* function to clear the whole cart */
    clearCart = () =>{
        this.setState(()=>{
            return {cart:[]}
        },
        ()=>{
            this.setProducts();
            this.addTotals();
        })
    }

    /* function to copy products from data.js to state array */
    setProducts =()=>{
        let tempProducts = [];
        storeProducts.forEach((item)=>{
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });

        this.setState(()=>{
           return {products: tempProducts}
        });
    }

    /* function to get a product object by id */
    getItem =(id)=>{
        const product = this.state.products.find(item=>item.id === id);
        return product;
    };

    /* function for handling details of product */
    handleDetail =(id)=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return{detail: product}
        })
    };

    /* function to add the product to the cart */
    addToCart =(id)=>{
        console.log('added to cart id: '+id);
        const tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        product.total = product.price;
        this.setState(()=>{
            return{
                products: tempProducts,
                cart: [...this.state.cart, product]
            }
        },()=>{
            this.addTotals();
        })
    };

    /* function to calculate cart subtotals and totals  */
    addTotals = () =>{
        let subTotal = 0;
        this.state.cart.map((item)=>{subTotal +=item.total });
        const tempTax = subTotal*0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal+tax;
        this.setState(()=>{
            return{
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,  
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
