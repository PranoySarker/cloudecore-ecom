"use client";

import { setProducts } from "@/app/redux/slices/productSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function HydrateProducts({ products }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(products));
  }, [products, dispatch]);

  return null;
}
