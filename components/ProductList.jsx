import Image from "next/image";
import React from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const fetchProducts = async () => {
  const res = await axios.get("https://admin.refabry.com/api/all/product/get");
  const resData = await res.data;
  const data = await resData.data;
  return data;
};

const ProductList = async () => {
  const data = await fetchProducts();
  const products = data.data;

  return (
    <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
