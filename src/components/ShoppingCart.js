import React from "react";
import List from "./List";

const ShoppingCart = (props) => {
  return (
    <div className="list">
      <h1>Shopping Cart</h1>
      <button onClick={props.buttonEvent}>Empty shopping cart</button>
      <List event={() => {}} readAmount={props.readAmount} list={props.list} />
    </div>
  );
};

export default ShoppingCart;
