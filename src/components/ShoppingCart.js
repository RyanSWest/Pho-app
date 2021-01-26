import React from 'react'
import Item from './ShoppingCartItem';
import { useState } from 'react';

const ShoppingCart = (props)=> {
     
    
    
    const [tip, setTip]= useState(0)
    const [customTip, setCustomTip]= useState(0)

    const getCartTotal = ()=> {
        return props.cart.reduce((acc, value)=> {
            return acc + value.price +tip+ customTip ;
        }, 0)
        .toFixed(2); 
         
    } 


    let total = getCartTotal()
    console.log("TOTAL", total)

    const addTip = (e)=> {
        e.preventDefault()
        setCustomTip(e.target.value)
        total = parseInt (total += customTip)
        .toFixed(2)
         
          
    }

    const cancelTip =()=> {
        setCustomTip(0)
        setTip(0)
    }
    return (
        <div className = 'cart-div'>
        <h1>Cart</h1>
         {props.cart.map(i=> {
             return (
             <Item key = {i.id}{...i}/>)
         })} 

         

         <div className = 'checkout'>on
             <p> Total: ${getCartTotal()}</p>
              <div className = 'tip-buttons'>
                  <h3>ADD TIP</h3>
              <button className = 'tip' onClick = {()=> setTip((total * .15)/props.cart.length)}>15%</button>
              <button className = 'tip' onClick = {cancelTip}>cancel</button>
              <button className = 'tip'onClick = {()=> setTip((total * .25)/props.cart.length)}>25%</button>

              
              
              






              </div>
              <form 
              type = 'submit'
              onSubmit = {(e)=>addTip}>
              
              <input className = 'tip-input'
                type= 'text'
                name = 'customTip'
                value = {customTip}
                onChange = {(e)=>setCustomTip(e.target.value)}
                placeholder = 'add custom amount'
              
              /> 

              </form>
              <button>Checkout</button>
         </div>


        </div>
    )
}

export default ShoppingCart