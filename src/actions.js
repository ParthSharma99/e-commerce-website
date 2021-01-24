  
import { apiCall } from './api/api'
import * as constants from './constants';


export const addRemoveCart = (mode,item) => (dispatch) => {
  
  if(mode === "ADD"){
    dispatch({type: constants.ADD_ITEMS, payload:item})
  }else if(mode === "REMOVE"){
    dispatch({type: constants.REMOVE_ITEMS, payload:item})
  }
}

export const setSearchField = (text) => ({ type: constants.CHANGE_SEARCHFIELD, payload: text })

export const requestItems = () => (dispatch) => {
  dispatch({ type: constants.REQUEST_ITEMS_PENDING })
  apiCall('https://fakestoreapi.com/products')
    .then(data => dispatch({ type: constants.REQUEST_ITEMS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: constants.REQUEST_ITEMS_SUCCESS, payload: error }))
}


export const requestItemById = (id) => (dispatch) => {
  dispatch({ type: constants.REQUEST_ITEMS_PENDING })
  apiCall('https://fakestoreapi.com/products/' + id)
    .then(data => dispatch({ type: constants.REQUEST_ITEMS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: constants.REQUEST_ITEMS_SUCCESS, payload: error }))
}