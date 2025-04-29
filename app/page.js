import axios from "axios";
import React from "react";
import ReduxProvider from "./redux/provider";
import ProductList from "@/components/ProductList";
import HydrateProducts from "@/components/HydrateProducts";

const fetchProducts = async () => {
  const res = await axios.get("https://admin.refabry.com/api/all/product/get");
  const resData = await res.data;
  const data = await resData.data;
  return data;
};

const Homepage = async () => {
  const data = await fetchProducts();
  const products = data.data;

  return (
    <>
      <h1 className="text-2xl font-bold my-4">Product List</h1>
      <ProductList products={products} />
    </>
  );
};

export default Homepage;
