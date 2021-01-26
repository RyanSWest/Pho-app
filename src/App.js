 
import './App.css';
import React, {useState} from  'react';
import {Route} from 'react-router-dom';
import data from './data';
import drinks from './drinks';
import starters from './appetizers';
import Navigation from './components/Navigation';
import Items from './components/Items';
import Appetizers from './components/Appetizers';
import ShoppingCart from './components/ShoppingCart';
import Drinks from './components/Drinks';



function App() {
     const [items]= useState(data)
     const [apps]= useState(starters)
     const [drinkies]= useState(drinks)
     const [cart, setCart]= useState([]);
      
     console.log("CART",cart)

     const addItem = item => {
       setCart([...cart, item])
       console.log("CLICK")
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
            render = {()=> <ShoppingCart cart={cart}/>}
            />
    </div>
  );
}

export default App;
