import {
  ADD_TO_CART,
  ADD_TO_CART_FAIL,
  CHANGE_COUNT,
  CART_SAVE_SHIPPING_ADDRESS,
  GET_TOTALS,
  REMOVE_FROM_CART,
} from "../constants/cartConstants";

export const CartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const itemExists = state.cartItems.find(
        (x) => x.product === item.product
      );
      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === itemExists.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case ADD_TO_CART_FAIL:
      return { ...state, loading: false, error: action.payload };

    case REMOVE_FROM_CART:
      return {
        ...state,
        error: "",
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case GET_TOTALS:
      const total = action.payload?.reduce(
        (total, item) => (total += item.price * Number(item.count)),
        0
      );
      const deliveryFee = total * 0.04;
      const Tax = total * 0.02;
      const cartTotal = total + Tax + deliveryFee;
      // console.log(Tax)

      return {
        ...state,
        totalAmount: total,
        deliveryFee: deliveryFee,
        tax: Tax,
        cartTotal: cartTotal,
      };
    case CHANGE_COUNT:
      const productId = action.payload.productId;
      const newCount = action.payload.count;

      let updatedCart = state.cartItems.map((item) => {
        if (item.product === productId) {
          return { ...item, count: newCount };
        }
        return item;
      });
      return {
        ...state,
        cartItems: updatedCart,
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload };

    default:
      return state;
  }
};
