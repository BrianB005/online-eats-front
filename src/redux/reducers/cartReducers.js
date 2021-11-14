import { ADD_TO_CART_REQUEST,ADD_TO_CART_SUCCESS,ADD_TO_CART_FAIL, REMOVE_FROM_CART } from "../constants/cartConstants";

export const CartReducer=(state={cartItems:[]},action)=>{
  switch(action.type){
  case ADD_TO_CART_REQUEST:
    return {loading:true}
  case ADD_TO_CART_SUCCESS:
      const item = action.payload;
      const ItemExists = state.cartItems.find((x) => x.product === item.product);
      if (ItemExists) {
        return {
          ...state,
          loading:false,
          error: '',
          cartItems: state.cartItems.map((x) =>
            x.product === ItemExists.product ? item : x
          ),
        };
      } else {
        return { ...state, error: '',loading:false, cartItems: [...state.cartItems, item] };
      }
  case ADD_TO_CART_FAIL:
    return{...state,loading:false,error:action.payload}

  case REMOVE_FROM_CART:
    return {
      ...state,
      error: '',
      cartItems: state.cartItems.filter((x) => x.product !== action.payload)
    };  
  default:
    return state;      
  }

}