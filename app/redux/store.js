import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import orderReducer from "./slices/orderSlice";
import cartReducer from "./slices/cartSlice";

export const makestore = (preloadedState) => {
  return configureStore({
    reducer: {
      product: productReducer,
      order: orderReducer,
      cart: cartReducer,
    },
    preloadedState: preloadedState,
  });
};
