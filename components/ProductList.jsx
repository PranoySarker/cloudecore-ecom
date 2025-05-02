import Image from "next/image";
import React from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductList = async ({ products }) => {
  return (
    <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
