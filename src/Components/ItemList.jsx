import React from "react";
import ItemContainer from "./ItemContainer";
import Card from "./ItemContainer";

const ItemList = ({ items, addRemoveCartItem, cartItems }) => {
  return (
    <div className="item-list-wrapper">
      {items.map((user, i) => {
        return (
          <ItemContainer
            key={i}
            item={items[i]}
            addRemoveCartItem={addRemoveCartItem}
            cartItems={cartItems}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
