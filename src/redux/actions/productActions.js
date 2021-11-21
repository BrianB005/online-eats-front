import {
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  SEARCH_PRODUCTS_FAIL,
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from "../constants/productConstants";
import Axios from "axios";

export const getProducts = (searchTerm) => async (dispatch, getState) => {
  const category = getState().category?.category;
  if (searchTerm) {
    dispatch({ type: SEARCH_PRODUCTS_REQUEST });
    try {
      const { data } = await Axios.get(
        `https://online-eats.herokuapp.com/api/v1/products/search?search_query=${searchTerm}`
      );
      dispatch({ type: SEARCH_PRODUCTS_SUCCESS, payload: data });
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: SEARCH_PRODUCTS_FAIL,
        payload:
          error.response && error.response.data.msg
            ? error.response.data.msg
            : error.message,
      });
    }
  }
  dispatch({ type: GET_PRODUCTS_REQUEST, payload: category });
  try {
    const { data } = await Axios.get(
      "https://online-eats.herokuapp.com/api/v1/products"
    );
    // console.log(data);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data, category });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error });
  }
};
export const getProduct = (productId) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST, payload: productId });
  try {
    const { data } = await Axios.get(
      `https://online-eats.herokuapp.com/api/v1/products/find/${productId}`
    );
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAIL, payload: error });
  }
};

export const getCatgories = () => async (dispatch) => {
  dispatch({ type: GET_CATEGORIES_REQUEST });
  try {
    const { data } = await Axios.get(
      "https://online-eats.herokuapp.com/api/v1/products/categories"
    );
    dispatch({ type: GET_CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_CATEGORIES_FAIL, payload: error });
  }
};
export const addProduct = (product) => async (dispatch, getState) => {
  const userInfo = getState().userLogin.userInfo;
  dispatch({ type: CREATE_PRODUCT_REQUEST, payload: product });
  try {
    const { data } = await Axios.post(
      "https://online-eats.herokuapp.com/api/v1/products",
      product,
      {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    const failMessage =
      error.response && error.response.data.msg
        ? error.response.data.msg
        : error.message;
    dispatch({ type: CREATE_PRODUCT_FAIL, payload: failMessage });
  }
};

export const updateItem =
  (product, productId) => async (dispatch, getState) => {
    // console.log(product._id);
    const userInfo = getState().userLogin.userInfo;
    dispatch({ type: UPDATE_PRODUCT_REQUEST, payload: product });
    try {
      const { data } = await Axios.put(
        `https://online-eats.herokuapp.com/api/v1/products/find/${productId}`,

        product,
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({ type: UPDATE_PRODUCT_SUCCESS });
      console.log(data);
    } catch (error) {
      const failMessage =
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message;
      dispatch({ type: UPDATE_PRODUCT_FAIL, payload: failMessage });
    }
  };
export const deleteItem = (productId) => async (dispatch, getState) => {
  const userInfo = getState().userLogin.userInfo;
  dispatch({ type: DELETE_PRODUCT_REQUEST, payload: productId });
  try {
    const { data } = await Axios.delete(
      `https://online-eats.herokuapp.com/api/v1/products/find/${productId}`,
      {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: DELETE_PRODUCT_SUCCESS });
    console.log(data);
  } catch (error) {
    const failMessage =
      error.response && error.response.data.msg
        ? error.response.data.msg
        : error.message;
    dispatch({ type: DELETE_PRODUCT_FAIL, payload: failMessage });
  }
};
