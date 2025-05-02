"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  clearCart,
} from "@/app/redux/slices/cartSlice";
import Link from "next/link";

const CartDetails = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  const totalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 rounded shadow"
          >
            <div>
              <h2 className="font-bold">{item.name}</h2>
              <p className="text-sm text-gray-400">
                ${item.price} x {item.quantity}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                className="bg-gray-300 px-2 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => dispatch(addToCart(item))}
                className="bg-gray-300 px-2 rounded"
              >
                +
              </button>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-500 text-white px-3 py-1 rounded ml-4"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right mt-10">
        <h2 className="text-2xl font-bold">
          Total: ${totalPrice().toFixed(2)}
        </h2>

        <div className="mt-4 flex justify-end gap-4">
          <Link
            href="/order"
            className="bg-green-600 text-white py-2 px-6 mt-4 rounded"
          >
            Order
          </Link>
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-red-600 text-white py-2 px-6 mt-4 rounded"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
