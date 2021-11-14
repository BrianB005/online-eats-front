import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { alertReducer } from './reducers/alertReducers';
import { CartReducer } from './reducers/cartReducers';
import { categoryReducer } from './reducers/categoryReducers';
import { createProductReducer, deleteProductReducer, productReducer, productsReducer, updateProductReducer } from './reducers/productReducers';
import { sideBarReducer } from './reducers/sideBarReducers';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';
const initialState={

  userLogin:{
    userInfo:
    localStorage.getItem("userInfo")
    ?JSON.parse(localStorage.getItem("userInfo"))
    :{}},
  cart:{
    cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):{}}
};
const reducer=combineReducers({
  sidebar:sideBarReducer,
  category:categoryReducer,
  products:productsReducer,
  product:productReducer,
  userLogin:userLoginReducer,
  userRegister:userRegisterReducer,
  categories:categoryReducer,
  alert:alertReducer,
  cart:CartReducer,
  createProduct:createProductReducer,
  deleteProduct:deleteProductReducer,
  updateProduct:updateProductReducer

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;