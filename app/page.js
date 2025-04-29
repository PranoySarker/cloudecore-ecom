import axios from "axios";
import React from "react";
import ProductList from "@/components/ProductList";

const fetchProducts = async () => {
  const res = await axios.get("https://admin.refabry.com/api/all/product/get");
  const resData = await res.data;
  const data = await resData.data;
  return data;
};

const Homepage = async () => {
  const data = await fetchProducts();
  const products = data.data;
  console.log(products);
  return (
    <>
      <h1 className="text-2xl font-bold my-4">Product List</h1>
      <ProductList products={products} />
    </>
  );
};

export default Homepage;
