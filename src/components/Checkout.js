import React, {useState, useContext} from 'react'
import {CartContext} from '../contexts/CartContext'


const Checkout = (props)=> {

    console.log("CHECKOUT PROPS", props)
    const {bill}= useContext(CartContext)
    console.log("CHECKOUT BILL", bill) 

    function getTimeStamp() {
        var now = new Date();
        return ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear() + " " + now.getHours() + ':' +
          ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now
            .getSeconds()) : (now.getSeconds())));
      }

     
    return (
        <div>
            <h2>CHECKOUT</h2>
              <h3>${bill.toFixed(2)}</h3>
             <h3>Order Placed at {getTimeStamp()}</h3>
            <p></p>
        </div>
    )
}

export default Checkout