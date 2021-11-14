import axios from "axios"
import { ADD_TO_CART_FAIL, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, REMOVE_FROM_CART } from "../constants/cartConstants"

export const addToCart=(productId)=>async(dispatch,getState)=>{
  dispatch({type:ADD_TO_CART_REQUEST,payload:productId})
  try {
    const {data}=await axios.get(`http://localhost:5000/api/v1/products/find/${productId}`)
    const item=data.product
    dispatch({type:ADD_TO_CART_SUCCESS,payload:{
      name:item.name,
      image:item.image,
      product:item._id,
      count:1,
      price:item.price,
    }})
    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems))
  } catch (error) {
    dispatch({type:ADD_TO_CART_FAIL,payload:error})
  }
}

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type:REMOVE_FROM_CART, payload: productId });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};