"use client";

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
      <h1>{product.name}</h1>
    </div>
  );
};

export default ProductDetails;
