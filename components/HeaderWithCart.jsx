import CartNumber from "./CartNumber";

export default function HeaderWithCart() {
  return (
    <div className="flex justify-between items-center px-4">
      <h1 className="text-2xl font-bold my-4">Product List</h1>
      <CartNumber />
    </div>
  );
}
