import React from 'react';
import '../App.css'


const Item = props => {

     
    return (
        <div className = 
    'item'>
           <h3> {props.item}</h3>
           <h3> {props.price.toFixed(2)}</h3>
            <h4>{props.id}</h4>
            <button onClick = {props.removeItem(props.id)}>Remove</button>
        {/* <img className = 'image' src = {props.image} /> */}
        <p>${props.price.toFixed(2)}</p>
     </div>
    )
}

export default Item