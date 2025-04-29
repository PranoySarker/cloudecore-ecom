"use client";

import { Provider } from "react-redux";
import { useRef } from "react";
import { makestore } from "./store";

export default function ReduxProvider({ children }) {
  const storeRef = useRef();

  if (!storeRef.current) {
    storeRef.current = makestore(); // No preloaded state here!
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
