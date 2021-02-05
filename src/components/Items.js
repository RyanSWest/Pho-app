import React from 'react';
import Item from './Item';
import '../App.css'
import Navigation from './Navigation';



const Items = (props)=> {


    


const adder = (e, item)=> {
    e.stopPropogation()
    props.addItem()

}

    return (
        <div>  
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
                    <h4>{i.time}</h4>
                    
                    <img className = 'image'src = {i.image}/>
                    <button className = 'add-item' onClick = {(e)=> {  props.addItem(i)}}>Add Item</button>
                    </div>
                )
            })}   
        </div>
        </div>
    )
}

export default Items