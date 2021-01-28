import React from 'react'
import Item from './ShoppingCartItem';
import { useState, useContext, useEffect} from 'react';
import {CartContext} from '../contexts/CartContext';
 
import {useHistory} from 'react-router-dom';
import { BillContext } from '../contexts/BillContext';


const ShoppingCart = (props)=> {
     
    const history = useHistory()
    const {bill, setBill}= useContext(BillContext)
    const {cart, setCart} = useContext(CartContext)
    const [tip, setTip]= useState(0)
    const [customTip, setCustomTip]= useState(0)
    
    console.log("WHAT",cart)

    console.log("BILL", bill)

    const getCartTotal = () => {
        return cart
          .reduce((acc, value) => {
            return acc + value.price ;
          }, 0)
          .toFixed(2);
      };

    const gotoCheckout=()=> {
        history.push('/checkout')
    }

    useEffect(()=> {
        let cartie  =  cart
        setCart(cartie)
        console.log("CART",  cart)


    },[ cart.length])
    let total = getCartTotal()
     
    let realTip = tip/props.cart.length
    setBill(parseFloat(total)+ parseFloat(tip) )
    const addTip = (e)=> {
        e.preventDefault()
        setCustomTip(e.target.value)
        // total = parseInt (total += customTip)
        .toFixed(2)
         
          
    }

    const remover =(item)=> {
        props.removeItem(item)
        setTip(total * .10)
        setTip(0)
    }

    const cancelTip =()=> {
        setCustomTip(0)
        setTip(0)
    }
    return (
        <div>
         <h2>Cart</h2>
         
         {cart.map(e => {
             return(
                <div className = 'cart-item' key= {e.id}>
                    <h3>{e.item}</h3>
                    <h3>{e.price}</h3>
                    <button onClick = {()=>remover(e)}>remove</button>
                    
                    
                     </div>
             )
         })}

     
       <h3>Tip: {tip.toFixed(2)}</h3>
        
        <h3>${bill.toFixed(2)}</h3>


<div className= 'tips'>
          <div className="tip-div">
            <button className="tip" onClick={() => setTip(0)}>
              No Tip
            </button>
            
          </div>

          <div className="tip-div">
            <button
              className="tip"
              disabled ={tip>0}
              onClick={() => setTip((total * 0.1)  )}
            >
              10%
            </button>
            

           </div>

          <div className="tip-div">
            <button
              className="tip"
              disabled ={tip>0}

              onClick={() => setTip(total * 0.15)  }
            >
              15%
            </button>
            
          </div>

          <div className="tip-div">
            <button
              className="tip"
              disabled ={tip>0}

              onClick={() => setTip(total * 0.25)  }
            >
              25%
            </button>
            
          </div>
 
        </div>
        <button onClick = {gotoCheckout}>Checkout</button>

         
         </div>
 
        
        
    )
}

export default ShoppingCart