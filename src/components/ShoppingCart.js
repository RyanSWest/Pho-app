import React from "react";
import Item from "./ShoppingCartItem";
import { useState, useContext} from "react";
import { CartContext } from "../contexts/CartContext";

import { useHistory } from "react-router-dom";
import { BillContext } from "../contexts/BillContext";

const ShoppingCart = (props) => {

   const history = useHistory();
  const { bill, setBill } = useContext(BillContext);
  const { cart, setCart } = useContext(CartContext);
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState(0);

  console.log("CART =>", cart);

  console.log("BILL", bill);

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };


   
  const gotoCheckout = () => {
    history.push("/checkout");
  };

   


  let total = getCartTotal();

  setBill(parseFloat(total) + parseFloat(tip) + parseFloat(customTip));
  

  const addCustomTip = () => {
    setBill(parseFloat(total) + parseFloat(customTip));
  };

  const enterTip = (e) => {
    e.preventDefault();
    addCustomTip();
  };

   

  const remover = (item) => {
     
    props.removeItem(item);
    setTip(total * 0.1);
    setTip(parseFloat (0));
     
  };

   

  const cancelTip = () => {
    setCustomTip(0);
    setTip(parseFloat (0));
  };
  return (
    <div>
      <h2>Cart</h2>

      {cart.map((e, idx) => {
        return (
          <div className="cart-item" key={idx}>
            <h3>{e.item}</h3>
            <h3>${e.price.toFixed(2)}</h3>
            <button onClick={() => remover(e)}>remove</button>
          </div>
        );
      })}

      <h3>Tip: {tip.toFixed(2)}</h3>

      <h3>${bill.toFixed(2)}</h3>

      <div className="tips">
        <div className="tip-div">
          <button className="tip" onClick={() => cancelTip()}>
            No Tip
          </button>
        </div>

        <div className="tip-div">
          <button
            className="tip"
            disabled={tip > 0}
            onClick={() => setTip(total * 0.1)}
          >
            10%
          </button>
        </div>

        <div className="tip-div">
          <button
            className="tip"
            disabled={tip > 0}
            onClick={() => setTip(total * 0.15)}
          >
            15%
          </button>
        </div>

        <div className="tip-div">
          <button
            className="tip"
            disabled={tip > 0}
            onClick={() => setTip(total * 0.25)}
          >
            25%
          </button>
        </div>
        <button onClick ={()=>cancelTip()}>Cancel</button>
      </div>

      <form type="submit" onSubmit={enterTip}>
        <input
          name="customTip"
          value={customTip}
          onChange={(e) => setCustomTip(e.target.value)}
          placeholder={parseFloat(0)}
        />
      </form>
       <button disabled = {cart.length<1}onClick={gotoCheckout}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
