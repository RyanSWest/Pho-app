import React, { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { BillContext } from "../contexts/BillContext";

const Checkout = (props) => {
  console.log("CHECKOUT PROPS", props);
  const { bill } = useContext(BillContext);
  console.log("CHECKOUT BILL", bill);

  function getTimeStamp() {
    var now = new Date();
    return (
      now.getMonth() +
      1 +
      "/" +
      now.getDate() +
      "/" +
      now.getFullYear() +
      " " +
      now.getHours() +
      ":" +
      (now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()) +
      ":" +
      (now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds())
    );
  }

  const time = () => {
    let now = new Date();
    let hours = now.getHours();
    let mins = now.getMinutes();
    if (hours > 12) {
      return 12 - hours + ":" +(now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()) + "PM";
    } else if (hours == 0) {
      return (
        12 +
        ":" +
        (now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()) +
        "AM"
      );
    } else {
      return (
        hours +
        ":" +
        (now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()) +
        "AM"
      );
    }
  };
  let now = new Date();
  let eta = now.setMinutes(15);
  console.log("ETA", eta)

  let arrive = eta.toString().split("");
  console.log(arrive);

  let arriveHours = arrive[0] + arrive[1];

  let arriveHours2 = parseInt(arriveHours);

  let arriveMinutes = arrive[2]+arrive[3];

  let arriveMinutes2 = parseInt(arriveMinutes)

  const getEtaHrs = (h) => {
    if (h > 12) {
      h = h - 12;
    } else if (h == 0) {
      h = 12;
    } else {
      h = h;
    }
    return h;
  };

  const getEtaMins = (m)=> {
    if (m <10){
      return "0"+ m
    }
    else return m
  }

  console.log("AH", arriveHours2);
  let mins = now.getMinutes();
  return (
    <div>
      <h1 className = 'thankyou'>Thank You!</h1>
      
      <h3 className = 'total'> Total ${bill.toFixed(2)}</h3>
      <h3>Order Placed at {getTimeStamp()}</h3>
      <h3>Time: {time()} </h3>
      <h3>
        {/* Pickup ETA:<h4>  {getEtaHrs(arriveHours2)}: {getEtaMins(arriveMinutes2)}</h4> */}
       <h2 className = 'thankyou'>Order will be ready 10 to 15 mins!</h2>
      </h3>
      <p></p>
    </div>
  );
};

export default Checkout;
