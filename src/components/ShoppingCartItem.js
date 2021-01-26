import React from 'react';
import '../App.css'


const Item = props => {

     
    return (
        <div className = 
    'item'>
           <h3> {props.item}</h3>
            <h4>{props.id}</h4>
        {/* <img className = 'image' src = {props.image} /> */}
        <p>${props.price.toFixed(2)}</p>
         <button onClick ={props.removeItem} >remove</button>
    </div>
    )
}

export default Item