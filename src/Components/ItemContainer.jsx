import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const ItemContainer = ({ item, addRemoveCartItem, cartItems }) => {
  const countOccurences = (arr, val) => {
    return arr.reduce((acc, elem) => {
      return val === elem ? acc + 1 : acc;
    }, 0);
  };

  const [cnt, setCnt] = useState(0);

  return (
    <div className="item-wrapper">
      <img src={item.image} className="item-image" />
      <div>{item.title.slice(0, Math.min(item.title.length, 50))}</div>
      <button
        className="item-price"
        onClick={() => {
          addRemoveCartItem("ADD", item.id);
          setCnt(cnt + 1);
        }}
      >
        <FontAwesomeIcon icon={faCartPlus} /> ${item.price}
      </button>
      {cnt ? <span>In Cart : {cnt}</span> : <span>Not In Cart</span>}
    </div>
  );
};

export default ItemContainer;
