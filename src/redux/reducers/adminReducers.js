import {
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_ALL_ADMINS_REQUEST,
  GET_ALL_ADMINS_SUCCESS,
  GET_ALL_ADMINS_FAIL,
  GET_ALL_VENDORS_REQUEST,
  GET_ALL_VENDORS_SUCCESS,
  GET_ALL_VENDORS_FAIL,
  UPDATE_USER_ROLE_FAIL,
  UPDATE_USER_ROLE_REQUEST,
  UPDATE_USER_ROLE_SUCCESS,
} from "../constants/adminConstants";

export const adminReducers = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_USERS_REQUEST:
      return { loading: true };
    case GET_ALL_USERS_SUCCESS:
      return { loading: false, users: action.payload };
    case GET_ALL_USERS_FAIL:
      return { loading: false, error: action.payload };
    case GET_ALL_ADMINS_REQUEST:
      return { loading: true };
    case GET_ALL_ADMINS_SUCCESS:
      return { loading: false, admins: action.payload };
    case GET_ALL_ADMINS_FAIL:
      return { loading: false, error: action.payload };

    case GET_ALL_VENDORS_REQUEST:
      return { loading: true };
    case GET_ALL_VENDORS_SUCCESS:
      return { loading: false, vendors: action.payload };
    case GET_ALL_VENDORS_FAIL:
      return { loading: false, error: action.payload };

    case UPDATE_USER_ROLE_REQUEST:
      return { loading: true };
    case UPDATE_USER_ROLE_SUCCESS:
      return { loading: false, user: action.payload };
    case UPDATE_USER_ROLE_FAIL:
      return { loading: false, payload: action.payload };
    case GET_USER_REQUEST:
      return { loading: true };
    case GET_USER_SUCCESS:
      return { loading: false, user: action.payload };
    case GET_USER_FAIL:
      return { loading: false, payload: action.payload };
    default:
      return state;
  }
};
