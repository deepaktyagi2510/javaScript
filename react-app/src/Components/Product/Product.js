import React, {Component} from 'react';
import './Product.css';
 
const products=[
    {
        emoji:"😃",
        name: 'big eyes',
        price: 100
},
    {
        emoji:"😄",
        name: 'smiling eyes',
        price: 102
    },
    {
        emoji:"😍",
        name: 'heart eyes',
        price: 104
    }
]
export default class Product extends React.Component{
    state={
        cart:[], //cart:[soap,biscuits,surf] = 3
        total:0
    }
 
    currencyOptions={
        minimumFractionDigits:2,
        maximumFractionDigits:2
    }
 
    getTotal=() => {
        return this.state.total.toLocaleString(undefined,this.currencyOptions);
    }
    add =(product) =>{
        this.setState(state =>(
            {
                cart:[...state.cart,product.name],
                total:state.total + product.price
            }
        ))
    }
    remove =(product)=>{
        this.setState(state => {
            const cart =[...state.cart];
            cart.splice(cart.indexOf(product.name));
            return({
                cart,
                total:state.total - product.price
            })
        })
    }
 
    render(){
        return(
            <div className='wrapper'>
            {/* <div> Shopping Cart :0 total items </div> */}
            <div> Shopping Cart :{this.state.cart.length} total items </div>
            {/* <div>Total:0</div> */}
            {/* <div>Total:{this.state.total}</div> */}
            <div>Total:{this.getTotal()}</div>
            <div>
                {products.map(product =>(
                    <div key={product.name}>
                        <div className="product"><span role='img' aria-label ={product.name}>{product.emoji}</span>
                        </div>
             
         
 
            {/* <div className="product"><span role ="img" aria-label="ice cream">🍨</span></div> */}
            <button onClick ={() =>this.add(product)}>Add</button>
            <button onClick={() =>this.remove(product)}>Remove</button>
            </div>
                ))}
            </div>
              </div>
        )
    }
}