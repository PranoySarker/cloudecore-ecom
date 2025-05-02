import HeaderWithCart from "@/components/HeaderWithCart";
import ProductList from "@/components/ProductList";

const fetchProducts = async () => {
  try {
    const res = await fetch("https://admin.refabry.com/api/all/product/get");
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    return data.data.data;
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return [];
  }
};

const Homepage = async () => {
  const products = await fetchProducts();

  return (
    <>
      <HeaderWithCart />
      <ProductList products={products} />
    </>
  );
};

export default Homepage;
