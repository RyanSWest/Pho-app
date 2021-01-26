import React from 'react';


const Item = props=> {

    console.log('ITEM PROPS', props)
    return(
        <div>
            <h1>Item</h1>
         <img src = {props.i.image} alt = {`${props.i.item}`}/>

         <p className = 'item-name'>{props.i.item}</p>
         <p>{props.price}</p>
         <button onClick = {() => props.addItems(props.i)}>
             Add to Cart
         </button>
        </div>
    );
};

export default Item;