{checkout && props.cart.length>0  && (
         
    <div className = 'tip-container' >


        <h4> Add Tip</h4>
      



      <div className= 'tips'>
     <div className="tip-div">
       <button className="tip" onClick={() => setTip(0)}>
         No Tip
       </button>
       <p>$0.00</p>
     </div>

     <div className="tip-div">
       <button
         className="tip"
         disabled ={!ten}
         onClick={(e) => console.log("E",e.target.value)}
       >
         10%
       </button>
       <p className="tip-amount">${ten.toFixed(2)}</p>  

      </div>

     <div className="tip-div">
       <button
         className="tip"
         onClick={() => setTip((total * 0.15))}
       >
         15%
       </button>
       <p>${fifteen.toFixed(2)}</p>
     </div>

     <div className="tip-div">
       <button
         className="tip"
         onClick={() => setTip((total * 0.25) / props.cart.length)}
       >
         25%
       </button>
       <p>${ percents[2]}</p>
     </div>


   </div>


        </div>


   
 )}

 
  