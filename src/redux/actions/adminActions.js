import axios from "axios";
// import { useSelector } from "react-redux";
import {
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_VENDORS_FAIL,
  GET_ALL_VENDORS_SUCCESS,
  GET_ALL_VENDORS_REQUEST,
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  UPDATE_USER_ROLE_FAIL,
  UPDATE_USER_ROLE_REQUEST,
  UPDATE_USER_ROLE_SUCCESS,
  GET_ALL_ADMINS_REQUEST,
  GET_ALL_ADMINS_SUCCESS,
  GET_ALL_ADMINS_FAIL,
} from "../constants/adminConstants";

export const getAllUsers = () => async (dispatch, getState) => {
  const userInfo = getState().userLogin.userInfo;

  dispatch({ type: GET_ALL_USERS_REQUEST });
  try {
    const { data } = await axios.get(
      "https://online-eats.herokuapp.com/api/v1/users",
      {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: GET_ALL_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_USERS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

export const getAllAdmins = () => async (dispatch, getState) => {
  const userInfo = getState().userLogin.userInfo;

  dispatch({ type: GET_ALL_ADMINS_REQUEST });
  try {
    const { data } = await axios.get(
      "https://online-eats.herokuapp.com/api/v1/users/admins",
      {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: GET_ALL_ADMINS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_ADMINS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

export const getAllVendors = () => async (dispatch, getState) => {
  const userInfo = getState().userLogin.userInfo;

  dispatch({ type: GET_ALL_VENDORS_REQUEST });
  try {
    const { data } = await axios.get(
      "https://online-eats.herokuapp.com/api/v1/users/vendors",
      {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: GET_ALL_VENDORS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_VENDORS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

export const updateRole = (user) => async (dispatch, getState) => {
  const userInfo = getState().userLogin.userInfo;
  // console.log(user.id);
  dispatch({ type: UPDATE_USER_ROLE_REQUEST, payload: user });
  try {
    const { data } = await axios.patch(
      `https://online-eats.herokuapp.com/api/v1/users/find/${user.id}`,
      { role: user.role },
      {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: UPDATE_USER_ROLE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_USER_ROLE_FAIL, payload: error });
  }
};
export const getUser = (id) => async (dispatch, getState) => {
  const userInfo = getState().userLogin.userInfo;
  dispatch({ type: GET_USER_REQUEST, payload: id });
  try {
    const { data } = await axios.get(
      `https://online-eats.herokuapp.com/api/v1/users/find/${id}`,
      {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: GET_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USER_FAIL, payload: error });
  }
};
