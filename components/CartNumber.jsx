"use client";

import { useSelector } from "react-redux";

import Link from "next/link";
import React from "react";

const CartNumber = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <Link href="/cart">
      <button className="border-2 border-gray-800 rounded-md p-2 cursor-pointer">
        <h3>View Cart Products - {cartItems.length}</h3>
      </button>
    </Link>
  );
};

export default CartNumber;
