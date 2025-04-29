"use client";

import { Provider } from "react-redux";
import { makestore } from "./store";
import { useRef } from "react";

export default function ReduxProvider({ children, preloadedState }) {
  const storeRef = useRef();

  if (!storeRef.current) {
    storeRef.current = makestore(preloadedState);
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
