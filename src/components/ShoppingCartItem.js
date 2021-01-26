import React from 'react';
import '../App.css'


const Item = props => {
    return (
        <div className = 
    'item'>
           <h3> {props.item}</h3>
           <h4>{props.price}</h4>
        <img className = 'image' src = {props.image} />
        <p>${props.price}</p>
    </div>
    )
}

export default Item