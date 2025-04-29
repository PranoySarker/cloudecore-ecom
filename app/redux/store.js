import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import { preload } from "react-dom";

export const makestore = (preloadedState) => {
  return configureStore({
    reducer: {
      product: productReducer,
    },
    preloadedState: preloadedState,
  });
};
