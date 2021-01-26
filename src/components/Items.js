import React from 'react';
import Item from './Item';
import '../App.css'



const Items = (props)=> {
   console.log( "HAY",props)



    return (
        <div className = 'items'>
           
            {props.items.map(i=> {
                <Item
                key = {i.id}
                {...i}
                // item = {i.item}
                // image = {i.image}
                // price={i.price}
                // addItem={props.addItem}
                />
             })}
           

              {props.items.map(i=> {
                return (
                     <div  className = 'item' key = {i.id}>
                     <h3>{i.item}</h3> 
                     <h3>{i.id}</h3>    
                    <h3>${i.price.toFixed(2)}</h3> 
                    
                    <img className = 'image'src = {i.image}/>
                    <button className = 'add-item' onClick = {()=> props.addItem(i)}>Add Item</button>
                    </div>
                )
            })}   
        </div>
    )
}

export default Items