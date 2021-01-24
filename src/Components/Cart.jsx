import { React, useState, useEffect } from "react";
import ItemContainer from "./ItemContainer";
import CartItem from "./CartItem";

const Cart = ({ cartItems, addRemoveCartItem }) => {
  return (
    <div className="item-list-wrapper">
      {cartItems.map((user, i) => {
        return (
          <CartItem
            key={i}
            item={cartItems[i]}
            addRemoveCartItem={addRemoveCartItem}
          />
        );
      })}
    </div>
  );
};

export default Cart;
