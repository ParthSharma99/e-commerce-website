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
        return { 
          ...state,
          cartItems: [...state.cartItems, action.payload]
       }
      case constants.REMOVE_ITEMS:
        const idx = state.cartItems.indexOf(action.payload);
        return { 
          ...state,
          cartItems: [
            ...state.cartItems.slice(0,idx), 
            ...state.cartItems.slice(idx+1)
          ]
       }
      default:
        return state
    }
  }