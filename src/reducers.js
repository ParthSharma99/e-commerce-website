import * as constants from './constants';
  
  const initialStateSearch = {
    searchField: ''
  }
  
  export const searchItems = (state=initialStateSearch, action={}) => {
    switch (action.type) {
      case constants.CHANGE_SEARCHFIELD:
        return Object.assign({}, state, {searchField: action.payload})
      default:
        return state
    }
  }
  
  const initialStateItems = {
    items: [],
    isPending: true
  }
  
  export const requestItems = (state=initialStateItems, action={}) => {
    switch (action.type) {
      case constants.REQUEST_ITEMS_PENDING:
        return Object.assign({}, state, {isPending: true})
      case constants.REQUEST_ITEMS_SUCCESS:
        return Object.assign({}, state, {items: action.payload, isPending: false})
      case constants.REQUEST_ITEMS_SUCCESS:
        return Object.assign({}, state, {error: action.payload})
      default:
        return state
    }
  }

  const initialStateItem = {
    items: [],
    isPending: true
  }

  export const requestItemById = (state=initialStateItem, action={}) => {
    switch (action.type) {
      case constants.REQUEST_ITEMS_PENDING:
        return Object.assign({}, state, {isPending: true})
      case constants.REQUEST_ITEMS_SUCCESS:
        return Object.assign({}, state, {items: action.payload, isPending: false})
      case constants.REQUEST_ITEMS_SUCCESS:
        return Object.assign({}, state, {error: action.payload})
      default:
        return state
    }
  }

  const initialStateCart = {
    cartItems: [],
  }

  export const cartItems = (state=initialStateCart, action={}) => {
    switch (action.type) {
      case constants.ADD_ITEMS:
        let idx = state.cartItems.indexOf(action.payload);
        let temp = action.payload;
        if(idx !== -1){
          temp = state.cartItems[idx];
          temp["count"]++;
          return { 
            ...state,
            cartItems:  [
              ...state.cartItems.slice(0,idx),
              temp, 
              ...state.cartItems.slice(idx+1)

            ]
          }
        }
        temp["count"] = 1;
        return { 
          ...state,
          cartItems: [...state.cartItems, temp]
        }
      case constants.REMOVE_ITEMS:
        let remove_idx = state.cartItems.indexOf(action.payload);
        let remove_temp = action.payload;
        if(remove_temp["count"] > 1){
          remove_temp["count"]--;
          return { 
            ...state,
            cartItems: [
              ...state.cartItems.slice(0,remove_idx), 
              remove_temp,
              ...state.cartItems.slice(remove_idx+1)
            ]
          }
        }else{
          return { 
            ...state,
            cartItems: [
              ...state.cartItems.slice(0,remove_idx), 
              ...state.cartItems.slice(remove_idx+1)
            ]
         }
        }
        
      default:
        return state
    }
  }