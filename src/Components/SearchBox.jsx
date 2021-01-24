import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const SearchBox = ({ searchfield, searchChange, cartItems, setShowCart }) => {
  return (
    <div className="search-wrapper">
      <input
        className="search-bar"
        placeholder="Search items"
        onChange={searchChange}
      />
      <span className="cart-count noselect" onClick={() => setShowCart(true)}>
        <FontAwesomeIcon icon={faShoppingCart} /> <sup>{cartItems.length}</sup>
      </span>
    </div>
  );
};

export default SearchBox;
