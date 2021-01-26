import React, {useState} from 'react'


const Checkout = (props)=> {

    console.log("CHECKOUT PROPS", props)

    const [tip, setTip]= useState(0)
    const [customTip, setCustomTip]= useState(0)
    const getCartTotal = ()=> {
        return props.cart.reduce((acc, value)=> {
            return acc + value.price +tip+ customTip ;
        }, 0)
        .toFixed(2); 
         
    } 

    function getTimeStamp() {
        var now = new Date();
        return ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear() + " " + now.getHours() + ':' +
          ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now
            .getSeconds()) : (now.getSeconds())));
      }
    return (
        <div>
            <h2>CHECKOUT</h2>
            <p>{getCartTotal()}</p>

             <h3>Order Placed at {getTimeStamp()}</h3>
            <p></p>
        </div>
    )
}

export default Checkout