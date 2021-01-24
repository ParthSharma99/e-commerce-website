import './App.css';
import ItemContainer from '../Components/ItemContainer';
import {React, useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { connect } from 'react-redux';
import { setSearchField, requestItems,addRemoveCart, requestItemById } from '../actions';

import ItemList from '../Components/ItemList';
import SearchBox from '../Components/SearchBox';
import ErrorBoundry from '../Components/ErrorBoundary';
import Cart from '../Components/Cart';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    searchField: state.searchItems.searchField,
    items: state.requestItems.items,
    isPending: state.requestItems.isPending,
    cartItems: state.cartItems.cartItems,
    totalPrice: state.cartItems.totalPrice
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


const App = ({ items, searchField, onSearchChange, isPending, onRequestItems, cartItems,addRemoveCartItem, totalPrice }) => {

  const [showCart, setShowCart] = useState(false);

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
            <div className="loader"></div>
            <h2 style={{color:"white"}}>Loading...</h2>
          </div> 
          : 
          (showCart 
            ? 
            <>
            <span className="home-button noselect" onClick={() => setShowCart(false)}>Home <FontAwesomeIcon icon={faHome}/></span>
              <Cart cartItems={cartItems}  addRemoveCartItem={addRemoveCartItem} totalPrice={totalPrice}/>
            </>
            :
            <div class-name="search-item-wrapper" >
              <div className="search-box">
                <SearchBox searchChange={onSearchChange} cartItems={cartItems} setShowCart={setShowCart}/>
              </div>
              <div className="item-container">
                <ItemList items={filteredItems} addRemoveCartItem={addRemoveCartItem} cartItems={cartItems}/>
              </div>
            </div>
            
            )
          
        }
      </div>
      <span className="bg-circle circle-size1" style={{left:'7vw',top:'20vw'}}></span>
      <span className="bg-circle circle-size3" style={{right:'10vw',top:'2vw'}}></span>
      <span className="bg-circle circle-size2" style={{right:'5vw',bottom:'10vw'}}></span>
      <span className="bg-circle circle-size3" style={{left:'8vw',top:'3vw'}}></span>
      <span className="bg-circle circle-size1" style={{left:'25vw',bottom:'7vw'}}></span>
      
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
