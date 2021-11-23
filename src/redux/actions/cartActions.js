import axios from "axios";
import {
  ADD_TO_CART,
  CHANGE_COUNT,
  GET_TOTALS,
  // ADD_TO_CART_FAIL,
  REMOVE_FROM_CART,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";

export const addToCart = (productId) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `https://online-eats.herokuapp.com/api/v1/products/find/${productId}`
  );
  const item = data.product;
  // console.log(data.product);
  dispatch({
    type: ADD_TO_CART,
    payload: {
      name: item.name,
      image: item.image,
      product: item._id,
      count: 1,
      price: item.price,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (productData) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: productData });
  localStorage.setItem("shippingAddress", JSON.stringify(productData));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_CART, payload: productId });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
export const getTotals = () => (dispatch, getState) => {
  const cartItems = getState().cart?.cartItems;
  // console.log(cartItems);
  dispatch({ type: GET_TOTALS, payload: cartItems });
};

export const alterCount = (productId, count) => async (dispatch, getState) => {
  dispatch({ type: CHANGE_COUNT, payload: productId, count });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
