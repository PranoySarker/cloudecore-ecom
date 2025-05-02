"use client";

import Image from "next/image";
import React from "react";

import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/slices/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-gray-200 border border-gray-300 shadow-md p-4">
      <div className="flex justify-center mb-4">
        <Image
          width={350}
          height={150}
          src={`https://admin.refabry.com/storage/product/${product.image}`}
          alt={product.name}
        />
      </div>
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <h2 className="text-lg font-semibold">Price: {product.price}</h2>

      <button
        className="w-full bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
