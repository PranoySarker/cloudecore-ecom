import React, { Suspense } from "react";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";

const Homepage = () => {
  return (
    <>
      <h1 className="text-2xl font-bold my-4">Product List</h1>
      <Suspense fallback={<Skeleton />}>
        <ProductList />
      </Suspense>
    </>
  );
};

export default Homepage;
