import OrderForm from "@/components/OrderForm";
import React from "react";

const orderpage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[90%] md:w-1/2 bg-gray-800 p-4 my-14 rounded shadow-lg">
        <h1 className="text-2xl text-center text-white font-bold mb-4">
          Place Your Order
        </h1>
        <OrderForm />
      </div>
    </div>
  );
};

export default orderpage;
