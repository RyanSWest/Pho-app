import React from 'react';
import '../App.css';



const Drinks = (props)=> {
    return (
        <div className = 'items'>
            <h1>Drinks</h1>
            {props.drinks.map (d => {
                return (
                    <div className = 'item'> 
                    <h3>{d.item}</h3>
                    <h4>{d.price.toFixed(2)}</h4>
                    <img src = {d.image}></img>
                    <button className = 'add-item'onClick={()=>props.addItem(d)}  >Add Item</button>

                     </div>
                    
                )
            })}


        </div>
    )
}
export default Drinks