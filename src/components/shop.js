import React, { useContext } from "react";
import Item from "./ShoppingCartItem";
import { useState } from "react";
import {CartContext} from '../contexts/CartContext'

const ShoppingCart = (props) => {

  console.log("PROPS GODDAMIT", props)

  const {bill,setBill}= useContext(CartContext)
  // const {cart}= useContext(CartContext)

  // console.log("CONTEXT", cart)

  
  

  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState(0);

  

 

  const [checkout, setCheckout] = useState(false);
  


  const remover = (item)=> {
    props.removeItem(item)
    setTip(0)
    setCustomTip(0)
  }

  const getCartTotal = () => {
    return props.cart
      .reduce((acc, value) => {
        return acc + value.price ;
      }, 0)
      .toFixed(2);
  };

 let total = getCartTotal()
 
setBill(parseFloat(tip)+ parseFloat(total)+parseFloat(customTip))
  
 
 
 
 
const handleInput = (e) => {
    if(e){
    setCustomTip(e.target.value);}
    else{
      setCustomTip(0)
    }
    console.log("EHONDA", e.target.value);
  };

 
  const addTip = () => {
    // setFinalAmount(parseInt(total) + parseInt(customTip));
    // console.log("TOTAL", total, "+", "CUSTOM", customTip);
    // console.log("FINAL", finalAmount);
    setBill(parseFloat(bill) + parseFloat(customTip))
  };

  const enterTip = (e) => {
    e.preventDefault();
    addTip();
  };

  const cancelTip = () => {
    setCustomTip(0);
    setTip(0);
  };
  return (
    <div className="cart-div">
      <h1>Cart</h1>
       

      {props.cart.map((e) => {
        return (
          <div className="cart-div" key= {Math.random()}>
            <h1>{e.item}</h1>
    
            <h2>${e.price.toFixed(2)}</h2>
            <button onClick={() => remover(e)}>Remove</button>
          </div>
        );
      })}
      <button onClick={() => setCheckout(true)}>ENTER</button>
         
        <h2> Bill ${bill.toFixed(2)}</h2>
      {checkout && props.cart.length>0 && (
         <div><h1>HAY</h1> </div>
      )}
      <div className="checkout">
        on
        <p> Total: ${getCartTotal()}</p>
        <div className="tip-buttons">
          <h3>ADD TIP</h3>
          <h4>{tip.toFixed(2)}</h4>
          <button className="tip" onClick={cancelTip}>
            No Tip
          </button>
          
          <button
            className="tip"
            onClick={() => setTip((total * 0.10) )}
            disabled={tip > 0}
          >
            10%
          </button>
          <button
            className="tip"
            onClick={() => setTip((total * 0.15) )}
            disabled={tip > 0}
          >
            15%
          </button>
          <button
            className="tip"
            onClick={() => setTip(total * 0.25)}

            disabled={tip > 0}
          >
            25%
          </button>
          <button className="tip" onClick={cancelTip}>
            cancel
          </button>
        </div>
        <form type="submit" onSubmit={enterTip}>
          <input
            className="tip-input"
            type="text"
            name="customTip"
            value={customTip}
            onChange={handleInput}
            placeholder="add custom amount"
          />
        </form>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
