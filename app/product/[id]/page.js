import HydrateProducts from "@/components/HydrateProducts";
import ProductDetails from "@/components/ProductDetails";
import axios from "axios";
import React from "react";

const singleProductpage = async ({ params }) => {
  const { id } = await params;
  const res = await axios.get("https://admin.refabry.com/api/all/product/get");
  const products = res.data?.data?.data;

  return (
    <>
      <HydrateProducts products={products} />
      <h1 className="text-2xl text-center font-bold my-8">Product Details</h1>
      <ProductDetails id={id} />
    </>
  );
};

export default singleProductpage;
