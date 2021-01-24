import React, { useEffect, useState } from "react";

const CartItem = ({ item, addRemoveCartItem }) => {
  const countOccurences = (arr, val) => {
    return arr.reduce((acc, elem) => {
      return val === elem ? acc + 1 : acc;
    }, 0);
  };

  const [cnt, setCnt] = useState(0);

  return (
    <div className="item-wrapper">
      <img src={item.image} className="item-image" />
      <div className="item-title">
        {item.title.slice(0, Math.min(item.title.length, 50))}
      </div>
      <div>
        <button
          className="cart-remove-button"
          onClick={() => addRemoveCartItem("REMOVE", item)}
        >
          {" "}
          -{" "}
        </button>

        <span className="cart-count-counter">{item.count}</span>
        <button
          className="cart-add-button"
          onClick={() => addRemoveCartItem("ADD", item)}
        >
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
};

export default CartItem;
