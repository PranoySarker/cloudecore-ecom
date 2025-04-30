"use client";

import Image from "next/image";
import { useSelector } from "react-redux";

const ProductDetails = ({ id }) => {
  const products = useSelector((state) => state.product.products);

  if (!products || products.length === 0) {
    return <div>Loading...</div>;
  }

  const product = products.find((product) => product.id === Number(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex justify-end items-center">
          <Image
            src={`https://admin.refabry.com/storage/product/${product.image}`}
            width={300}
            height={500}
            alt={product.name}
            className="w-1/2 h-auto object-cover"
          />
        </div>
        <div className="flex flex-col space-y-8">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <div>
            <h2 className="text-lg font-semibold">Product Details:</h2>
            <p className="text-gray-700"> {product.short_desc}</p>
          </div>
          <p className="text-xl font-semibold mt-2">
            Price: {product.price} BDT
          </p>
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
