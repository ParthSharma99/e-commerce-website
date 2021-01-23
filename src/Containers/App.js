import './App.css';
import ItemContainer from '../Components/ItemContainer';
import {React, useState, useEffect} from "react";

import { connect } from 'react-redux';
import { setSearchField, requestItems,addRemoveCart, requestItemById } from '../actions';

import ItemList from '../Components/ItemList';
import SearchBox from '../Components/SearchBox';
import ErrorBoundry from '../Components/ErrorBoundary';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    searchField: state.searchItems.searchField,
    items: state.requestItems.items,
    isPending: state.requestItems.isPending,
    cartItems: state.cartItems.cartItems
  }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestItems: () => dispatch(requestItems()),
    addRemoveCartItem: (mode,item) => dispatch(addRemoveCart(mode,item)),
    onRequestItemById: (id) => dispatch(requestItemById(id)),

  }
}


const App = ({ items, searchField, onSearchChange, isPending, onRequestItems, cartItems,addRemoveCartItem, onRequestItemById }) => {

  useEffect(()=>{
    onRequestItems();
  },[]);


  const filteredItems = items.filter(item =>{
    return item.title.toLowerCase().includes(searchField.toLowerCase());
  })

  return (
    <div className="main">
      <div className="main-wrapper">
        {
          isPending ? 
          <div>
            <h2>Loading...</h2>
          </div> 
          :
          <div class-name="search-item-wrapper" >
            <div className="search-box">
              <SearchBox searchChange={onSearchChange} cartItems={cartItems}/>
            </div>
            <div className="item-container">
              <ItemList items={filteredItems} addRemoveCartItem={addRemoveCartItem} cartItems={cartItems}/>
            </div>
          </div>
        }
      </div>
      
      
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
