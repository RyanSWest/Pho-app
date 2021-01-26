import React from "react";
import Item from "./ShoppingCartItem";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { CartContext} from '../contexts/CartContext';


const ShoppingCart = (props) => {


  console.log("CART PROPS", props);
  const history = useHistory();
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState(0);

  const[tipPress, setTipPress]= useState(false)

  const getCartTotal = () => {
    return props.cart
      .reduce((acc, value) => {
        return acc + value.price + tip + customTip;
      }, 0)
      .toFixed(2);
  };

  let total = getCartTotal();
  console.log("TOTAL", total);

//   const addTip = (e) => {
//     e.preventDefault();
//     setCustomTip(e.target.value);
//     total = parseInt((total += customTip)).toFixed(2);
//   };

  let twentyfive = total * 0.25;
  const goToCheckout = () => {
    history.push("/checkout");
  };

  //tip percentages
  let ten = total * 0.1;
  let fifteen = total * 0.15;

  function getTimeStamp() {
    var now = new Date();
    return (
      now.getMonth() +
      1 +
      "/" +
      now.getDate() +
      "/" +
      now.getFullYear() +
      " " +
      now.getHours() +
      ":" +
      (now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()) +
      ":" +
      (now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds())
    );
  }

  let d = new Date();
  // let time = d.now();
  console.log("TIME", getTimeStamp());

  return (
    <div className="items">
      <h1>Cart</h1>
      {props.cart.map((i) => {
        return (
          <Item key={i.id} {...i} removeItem={() => props.removeItem(i)} />
        );
      })}

      <p> Total: ${getCartTotal()}</p>

      {props.cart.length > 0 && (
         
         <div className = 'tip-container' >


             <h4> Add Tip</h4>
           



           <div className= 'tips'>
          <div className="tip-div">
            <button className="tip" onClick={() => setTip(0)}>
              No Tip
            </button>
            <p>$0.00</p>
          </div>

          <div className="tip-div">
            <button
              className="tip"
              disabled ={!ten}
              onClick={() => setTip((total * 0.1) / props.cart.length)}
            >
              10%
            </button>
            <p className="tip-amount">${ten.toFixed(2)}</p>  

           </div>

          <div className="tip-div">
            <button
              className="tip"
              onClick={() => setTip((total * 0.15) / props.cart.length)}
            >
              15%
            </button>
            <p>${fifteen.toFixed(2)}</p>
          </div>

          <div className="tip-div">
            <button
              className="tip"
              onClick={() => setTip((total * 0.25) / props.cart.length)}
            >
              25%
            </button>
            <p>${twentyfive.toFixed(2)}</p>
          </div>


        </div>


             </div>


        
      )}

      {/* <form type="submit" onSubmit={(e) => addTip}>
          <input
            className="tip-input"
            type="text"
            name="customTip"
            value={customTip}
            onChange={(e) => setCustomTip(e.target.value)}
            placeholder="add custom amount"
          />
        </form> */}
      <button onClick={goToCheckout}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
