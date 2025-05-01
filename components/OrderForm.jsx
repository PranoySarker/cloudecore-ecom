"use client";

import { addOrder } from "@/app/redux/slices/orderSlice";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/navigation";

const OrderForm = ({ id }) => {
  const { push } = useRouter();

  const products = useSelector((state) => state.product.products);
  const product = products.find((product) => product.id === Number(id));

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
  });

  const handleOrderSubmit = async (formData) => {
    try {
      const orderData = {
        ...formData,
        product_ids: formData.product_ids || product.id,
        advance: formData.advance || null,
        discount_amount: formData.discount_amount || null,
      };

      const response = await axios.post(
        "https://admin.refabry.com/api/public/order/create",
        orderData
      );

      if (response.status === 200) {
        dispatch(addOrder(response.data));
        alert("Order placed successfully!");
        reset();
        push("/");
      }
    } catch (err) {
      console.error("Order error:", err?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleOrderSubmit)} className="space-y-4">
      <div>
        <label htmlFor="product_ids" className="text-white mb-2">
          Product IDs
        </label>
        <input
          type="text"
          value={id}
          readOnly
          {...register("product_ids")}
          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-100 w-full sm:text-sm border-white rounded-md focus:outline-none text-white"
        />
      </div>
      <div>
        <label htmlFor="s_product_qty" className="text-white mb-2">
          Product Quantity
        </label>
        <input
          type="number"
          {...register("s_product_qty", {
            required: "Quantity is required",
            min: { value: 1, message: "Must be at least 1" },
          })}
          className="px-4 py-2 border focus:border-gray-100 w-full sm:text-sm border-white rounded-md focus:outline-none text-white"
        />
        {errors.s_product_qty && (
          <p className="text-red-500">{errors.s_product_qty.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="c_name" className="text-white mb-2">
          Your Name
        </label>
        <input
          type="text"
          {...register("c_name", { required: "Customer name is required" })}
          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-100 w-full sm:text-sm border-white rounded-md focus:outline-none text-white"
        />
        {errors.c_name && (
          <p className="text-red-500">{errors.c_name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="c_phone" className="text-white mb-2">
          Your Phone Number
        </label>
        <input
          type="tel"
          {...register("c_phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10,15}$/,
              message: "Enter a valid phone number",
            },
          })}
          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-100 w-full sm:text-sm border-white rounded-md focus:outline-none text-white"
        />
        {errors.c_phone && (
          <p className="text-red-500">{errors.c_phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="address" className="text-white mb-2">
          Your Address
        </label>
        <textarea
          {...register("address", { required: "Address is required" })}
          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-100 w-full sm:text-sm border-white rounded-md focus:outline-none text-white"
        />
        {errors.address && (
          <p className="text-red-500">{errors.address.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="courier" className="text-white mb-2">
          Select Courier Service
        </label>
        <select
          {...register("courier", { required: "Courier is required" })}
          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-100 w-full sm:text-sm border-white rounded-md focus:outline-none text-white bg-gray-800"
        >
          <option value="Steadfast">Steadfast</option>
          <option value="Sundarban">Sundarban</option>
          <option value="FedEx">FedEx</option>
        </select>
        {errors.courier && (
          <p className="text-red-500">{errors.courier.message}</p>
        )}
      </div>

      {/* Advance (nullable) */}
      <div>
        <label htmlFor="advance" className="text-white mb-2">
          Advance Amount (optional)
        </label>
        <input
          type="number"
          {...register("advance")}
          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-100 w-full sm:text-sm border-white rounded-md focus:outline-none text-white"
        />
      </div>

      <div>
        <label htmlFor="cod_amount" className="text-white mb-2">
          COD Amount
        </label>
        <input
          type="number"
          value={product?.price}
          readOnly
          {...register("cod_amount", {
            required: "COD amount is required",
          })}
          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-100 w-full sm:text-sm border-white rounded-md focus:outline-none text-white"
        />
      </div>

      {/* Discount (nullable) */}
      <div>
        <label htmlFor="discount_amount" className="text-white mb-2">
          Discount Amount (optional)
        </label>
        <input
          type="number"
          {...register("discount_amount")}
          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-100 w-full sm:text-sm border-white rounded-md focus:outline-none text-white"
        />
      </div>

      <div>
        <label htmlFor="delivery_charge" className="text-white mb-2">
          Delivery Charge
        </label>
        <input
          type="number"
          value={80}
          readOnly
          {...register("delivery_charge")}
          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-100 w-full sm:text-sm border-white rounded-md focus:outline-none text-white"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Placing Order..." : "Place Order"}
      </button>
    </form>
  );
};

export default OrderForm;
