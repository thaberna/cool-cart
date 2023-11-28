import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  cart:
    typeof localStorage !== "undefined" && localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : { cartItems: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD": {
      const newItem = action.payload;
      const cartItems = [...state.cart.cartItems, newItem];

      typeof localStorage !== "undefined" &&
        localStorage.setItem(
          "cart",
          JSON.stringify({ ...state.cart, cartItems })
        );

      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_REMOVE": {
      const { id } = action.payload;
      const cartItems = state.cart.cartItems.filter((item) => {
        return item.id !== id;
      });

      typeof localStorage !== "undefined" &&
        localStorage.setItem(
          "cart",
          JSON.stringify({ ...state.cart, cartItems })
        );

      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}

export default function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}
