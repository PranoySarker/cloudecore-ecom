import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./slices/orderSlice";
import cartReducer from "./slices/cartSlice";

export const makestore = (preloadedState) => {
  return configureStore({
    reducer: {
      order: orderReducer,
      cart: cartReducer,
    },
    preloadedState: preloadedState,
  });
};
