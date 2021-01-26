 
import './App.css';
import React, {useState, useHistory} from  'react';
import {Route} from 'react-router-dom';
import data from './data';
import drinks from './drinks';
import starters from './appetizers';
import Navigation from './components/Navigation';
import Items from './components/Items';
import Appetizers from './components/Appetizers';
import ShoppingCart from './components/ShoppingCart';
import Drinks from './components/Drinks';
import Checkout from './components/Checkout';



function App() {
     const [items]= useState(data)
     const [apps]= useState(starters)
     const [drinkies]= useState(drinks)
     const [cart, setCart]= useState([]);
      

     const addItem = item => {
        item.id =  cart.indexOf(item)
       setCart([...cart, item])
       
     }

     const removeItem = item => {
      //  delete cart[item.id]
       const filtered = cart.filter(e=> {
         if (cart.indexOf (e) != cart.indexOf (item))
          //  if (e!= item)
         {
           return e
         }
       })
       setCart(filtered)
       console.log('NEWCART', cart, "FILTERED", filtered)
      console.log( "IDX",cart.indexOf(item))
     }
  return (
    <div className="App">

      <div className = 'title'>
      <h1>PHO-NOMENON! </h1>
      <h2>What can we get PHO you?</h2>
       <Navigation cart = {cart}/>
      </div>
      
       

<Route
				exact
				path="/"
				render={() => (
					<Items
						items={items}
						addItem={addItem}
					/>
				)}
			/>

       <Route 
         path = '/products'
         render = {()=> {
           <Items 
             items = {items}
             addItem = {addItem}
             />
         }}
         />
          <Route
            path ="/apps"
            render = {()=> <Appetizers apps = {apps} addItem = {addItem}/>}
            />
             <Route
            path ="/drinks"
            render = {()=> <Drinks drinks = {drinkies} addItem = {addItem}/>}
            />

         <Route
            path ="/cart"
            render = {()=> <ShoppingCart cart={cart}  removeItem = {removeItem}/>}
            />
             <Route
            path ="/checkout"
            render = {()=> <Checkout cart={cart}/>}
            />
    </div>
  );
}

export default App;
