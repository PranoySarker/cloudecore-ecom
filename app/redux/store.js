import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import orderReducer from "./slices/orderSlice";

export const makestore = (preloadedState) => {
  return configureStore({
    reducer: {
      product: productReducer,
      order: orderReducer,
    },
    preloadedState: preloadedState,
  });
};
