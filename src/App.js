import "./App.css";
import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import data from "./data";

import drinks from "./drinks";
import starters from "./appetizers";
import Navigation from "./components/Navigation";
import Items from "./components/Items";
import Appetizers from "./components/Appetizers";
import ShoppingCart from "./components/ShoppingCart";
import Drinks from "./components/Drinks";
import Checkout from "./components/Checkout";
import { CartContext } from "./contexts/CartContext";
import {BillContext} from "./contexts/BillContext";
import {ProductContext} from "./contexts/ProductContext";
import {DrinkContext} from "./contexts/DrinkContext";
import {AppetizerContext} from "./contexts/AppetizerContext";
import {AddItemContext} from "./contexts/AddItemContext";

function App() {
  const [items] = useState(data);
  const [apps] = useState(starters);
  const [drinkies] = useState(drinks);
  const [cart, setCart] = useState([]);

  const [bill, setBill] = useState(0);

  const addItem = (item) => {
 
     setCart([...cart, item]);
  };

  const removeItem = (item) => {
    console.log("ITEM!", cart.indexOf(item));

    const index = cart.indexOf(item);

    if (index > -1) {
      cart.splice(index, 1);
      const newCart = cart;
      setCart(newCart);
    }
    console.log("CART =>", cart);
  };
  return (
    <div className="App">
      <div className="title">
        <img className = 'logo' src = 'https://clipground.com/images/pho-logo-5.jpg'/>
        <h1 className = 'pho'>PHO-NOMENON! </h1>
        <h2 className = 'get'>What can we get PHO you?</h2>
         <Navigation cart={cart} />
      </div>
      <AddItemContext.Provider value = {{addItem}}> 
      <ProductContext.Provider value = {{items}} drinks = {{drinkies}}> 
          <Route
        exact
        path="/"
        render={() => <Items items={items} addItem={addItem} />}
      />
     </ProductContext.Provider>
         
        <AppetizerContext.Provider value = {apps}> 
       <Route
        path="/apps"
        render={() => <Appetizers apps={apps} addItem={addItem} />}
      />
      </AppetizerContext.Provider>
      
            <DrinkContext.Provider value = {{drinks}}> 

      <Route
        path="/drinks"
        render={() => <Drinks  addItem={addItem} />}
      />
           </DrinkContext.Provider>
      <CartContext.Provider value={{ cart, setCart } }  >
        <BillContext.Provider value = {{bill,setBill}} > 
       
        <Route
          path="/cart"
          render={() => (
            <ShoppingCart  removeItem={removeItem}   />
          )}
        />

           <Route path="/checkout" render={() => <Checkout   />} />
            </BillContext.Provider>   
      </CartContext.Provider>
      </AddItemContext.Provider>
   
      
     </div>
  );
}

export default App;
