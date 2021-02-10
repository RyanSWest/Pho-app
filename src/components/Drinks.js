import React, {useContext} from 'react';
import '../App.css';
import {DrinkContext} from '../contexts/DrinkContext'
import {AddItemContext} from '../contexts/AddItemContext';


const Drinks = ()=> {
    const {drinks} = useContext(DrinkContext)
    const {addItem} = useContext(AddItemContext)
     return (
        <div className = 'items'>
            <h1>Drinks</h1>
            { drinks.map (d => {
                return (
                    <div className = 'item'> 
                    <h3>{d.item}</h3>
                    <h4>{d.price.toFixed(2)}</h4>
                    <img src = {d.image}></img>
                    <button className = 'add-item'onClick={()=>addItem(d)}  >Add Item</button>

                     </div>
                    
                )
            })}


        </div>
    )
}
export default Drinks