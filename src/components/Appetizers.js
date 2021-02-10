import React, { useContext } from 'react';
import starters from '../appetizers'
import {AppetizerContext} from '../contexts/AppetizerContext';
import {AddItemContext} from '../contexts/AddItemContext'


const Appetizers = ( )=> {
  const apps = useContext(AppetizerContext)
  const {addItem} = useContext(AddItemContext)
 

    return (
        <div className = 'items'>
            <h1> Appetizers</h1>
          
            {apps.map(a=> {
                return (
                    <div className = 'item' key = {a.id}>

                    <h2>{a.item}</h2>
                    <h3>${a.price.toFixed(2)}</h3> 
                    <img className = 'image' src = {a.image}></img>
                    <button className = 'add-item'onClick={()=>addItem(a)}  >Add Item</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Appetizers