import React from 'react';
import starters from '../appetizers'


const Appetizers = (props)=> {
  console.log('APP PROPS', props)

    return (
        <div className = 'items'>
            <h1> Appetizers</h1>
          
            {props.apps.map(a=> {
                return (
                    <div className = 'item' key = {a.id}>

                    <h2>{a.item}</h2>
                    <h3>${a.price.toFixed(2)}</h3> 
                    <img className = 'image' src = {a.image}></img>
                    <button className = 'add-item'onClick={()=>props.addItem(a)}  >Add Item</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Appetizers