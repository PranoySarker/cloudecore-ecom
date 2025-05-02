import CartNumber from "@/components/CartNumber";
import ProductList from "@/components/ProductList";
import axios from "axios";

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
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold my-4">Product List</h1>
        <CartNumber />
      </div>

      <ProductList products={products} />
    </>
  );
};

export default Homepage;
