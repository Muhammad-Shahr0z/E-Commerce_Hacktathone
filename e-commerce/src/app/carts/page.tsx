"use client";

import Link from "next/link";
import { useAtom } from "jotai";
import CartComponent from "../components/CartComponent";
import { addToCart } from "../addToCart";
import { MdLocalGroceryStore } from "react-icons/md";

const CartPage = () => {
  const [addCart] = useAtom(addToCart);

  const updatedCart = addCart.map((item) => ({
    ...item,
    totalPrice: item.Quantity * item.price,
  }));

  const totalAmount = updatedCart.reduce((acc, item) => acc + item.totalPrice, 0);

  const EmptyCart = "Your Cart Is Empty";

  return (
    <div className="bg-gray-50 min-h-screen max-w-[800px] mx-auto">
      <div className="container mx-auto px-4 py-4">
        <p className="text-sm text-gray-600">
          <Link href="/" className="text-gray-800 hover:underline">
            Home
          </Link>{" "}
          / <span className="text-gray-500">Cart</span>
        </p>
        <h1 className="text-[24px] md:text-[36px] font-semibold my-2">Your Shopping Cart</h1>
      </div>

      <div className="container mx-auto">
        <div className="bg-white shadow-md rounded-md overflow-x-auto">
          <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-800 uppercase text-sm">
  <tr>
    <th className="py-4 px-2 sm:px-4 text-left">Product</th>
    <th className="py-4 px-2 sm:px-4 text-center">Price</th>
    <th className="py-4 px-2 sm:px-4 text-center">Quantity</th>
    <th className="py-4 px-2 sm:px-4 text-center">Delete</th>
  </tr>
</thead>

            <tbody className="text-gray-600">
              {addCart.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-4">
                    <div className="flex justify-center items-center gap-x-4">
                      <MdLocalGroceryStore className="text-2xl text-red-500" />
                      {EmptyCart}
                    </div>
                  </td>
                </tr>
              ) : (
                addCart.map((item) => (
                  <CartComponent item={item} key={item.id} cart={item.Quantity} />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="container mx-auto px-0 mt-8 flex flex-col lg:flex-row-reverse lg:justify-between">
        <div className="w-full lg:w-1/3 bg-white p-4 shadow-md rounded-md">
          <h2 className="text-lg font-medium mb-4">Cart Total</h2>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span>${totalAmount}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-lg font-medium">
              <span>Total:</span>
              <span>${totalAmount}</span>
            </div>
          </div>

<Link href="/checkOutPage">
          <button disabled={addCart.length === 0}  className="bg-[#F9F9F9] text-[#2A254B] disabled:bg-gray-200 disabled:text-black hover:bg-[#2A254B] hover:text-white w-full mt-4 py-2 rounded-md">
            Go to checkout
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
