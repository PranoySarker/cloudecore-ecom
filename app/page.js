import HeaderWithCart from "@/components/HeaderWithCart";
import ProductList from "@/components/ProductList";
import axios from "axios";

const fetchProducts = async () => {
  try {
    const res = await axios.get(
      "https://admin.refabry.com/api/all/product/get"
    );
    return res.data.data;
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return [];
  }
};

const Homepage = async () => {
  const data = await fetchProducts();
  const products = data.data;

  return (
    <>
      <HeaderWithCart />
      <ProductList products={products} />
    </>
  );
};

export default Homepage;
