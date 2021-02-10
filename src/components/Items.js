import React, { useContext } from 'react';
import '../App.css'
import Navigation from './Navigation';
import { ProductContext } from '../contexts/ProductContext';
import {AddItemContext} from '../contexts/AddItemContext';
 


const Items = ( )=> {
const {addItem}= useContext(AddItemContext)
const {items} = useContext(ProductContext)
 
    


 

    return (
        <div>  
         <div className = 'items'>
 
            
           

              {items.map(i=> {
                return (
                     <div  className = 'item' key = {i.id}>
                     <h3>{i.item}</h3> 
                     <h3>{i.id}</h3>    
                    <h3>${i.price.toFixed(2)}</h3> 
                    <h4>{i.time}</h4>
                    
                    <img className = 'image'src = {i.image}/>
                    <button className = 'add-item' onClick = {(e)=> {addItem(i)}}>Add Item</button>
                    </div>
                )
            })}   
        </div>
        </div>
    )
}

export default Items