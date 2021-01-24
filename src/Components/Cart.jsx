import { React, useState, useEffect } from "react";
import ItemContainer from "./ItemContainer";
import CartItem from "./CartItem";

const Cart = ({ cartItems, addRemoveCartItem, totalPrice }) => {
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
      <span className="total-price">
        Total Price : <span>$ {totalPrice}</span>
      </span>
    </div>
  );
};

export default Cart;
