import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const Navigation = (props) => {
  const history = useHistory();
  const goToCart = () => {
    history.push("/cart");
  };
  return (
    <div className="nav">
      <NavLink className="link" to="/">
        Entrees
      </NavLink>

      <NavLink className="link" to="/apps">
        Appetizers
      </NavLink>
      <NavLink className="link" to="/drinks">
        Drinks
      </NavLink>

      <div className="cart-nav">
        <button className="cart-button" onClick={goToCart}>
          Go to Cart
        </button>
        <h4>Items: {props.cart.length}</h4>
      </div>
    </div>
  );
};

export default Navigation;
