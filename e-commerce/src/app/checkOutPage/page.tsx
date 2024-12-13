"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useAtom } from "jotai";
import { addToCart } from "../addToCart";

const CheckoutPage = () => {
  const [addCart, setAddToCart] = useAtom(addToCart);

  const updatedCart = addCart.map(
    (item: { Quantity: number; price: number }) => ({
      ...item,
      totalPrice: item.Quantity * item.price,
    })
  );

  const totalAmount = updatedCart.reduce(
    (acc: any, item: { totalPrice: any }) => acc + item.totalPrice,
    0
  );

  return (
    <div className="bg-gray-50 min-h-screen overflow-x-hidden max-w-[800px] mx-auto">
      <div className="container mx-auto px-2 sm:px-4 py-6">
        <div className="flex items-center space-x-2">
          <Link href="/carts" className="text-[#2A254B] hover:underline">
            <FaArrowLeft className="text-sm sm:text-base" />
          </Link>
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#2A254B]">
            Checkout
          </h1>
        </div>
      </div>

      {/* Cart Items */}
      <div className="container mx-auto px-2 sm:px-4 py-4">
        <div className="bg-white shadow-md rounded-md overflow-x-auto">
          <table className="w-full min-w-[600px] text-left table-auto">
            <thead className="bg-gray-100 text-[#2A254B] uppercase text-xs sm:text-sm md:text-base">
              <tr>
                <th className="py-2 px-2 sm:px-4">Product</th>
                <th className="py-2 px-2 sm:px-4">Price</th>
                <th className="py-2 px-2 sm:px-4 text-center">Quantity</th>
                <th className="py-2 px-2 sm:px-4">Total</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {addCart.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-4">
                    Your Cart Is Empty
                  </td>
                </tr>
              ) : (
                addCart.map((item) => (
                  <tr key={item.id}>
                    <td className="py-2 px-2 sm:py-4 sm:px-4">{item.name}</td>
                    <td className="py-2 px-2 sm:py-4 sm:px-4">${item.price}</td>
                    <td className="py-2 px-2 sm:py-4 sm:px-4 text-center">{item.Quantity}</td>
                    <td className="py-2 px-2 sm:py-4 sm:px-4">${item.price * item.Quantity}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Summary */}
      <div className="container mx-auto px-2 sm:px-4 py-6">
        <div className="bg-white shadow-md rounded-md p-4 sm:p-6">
          <h2 className="text-base sm:text-xl md:text-2xl font-bold mb-4 text-[#2A254B]">
            Order Summary
          </h2>
          <div className="flex justify-between mb-2 text-xs sm:text-sm md:text-base">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-medium">${totalAmount}</span>
          </div>
          <div className="flex justify-between mb-2 text-xs sm:text-sm md:text-base">
            <span className="text-gray-600">Shipping:</span>
            <span className="font-medium">Free</span>
          </div>
          <div className="flex justify-between mb-4 text-sm sm:text-xl md:text-2xl font-medium">
            <span>Total:</span>
            <span>${totalAmount}</span>
          </div>

          {/* Checkout Button */}
          <Link href="/orderplace">
            <button onClick={() => setAddToCart([])}  className="w-full py-2 text-sm sm:text-base bg-[#2A254B] text-white font-semibold rounded-md hover:bg-[#4b437d] hover:text-[#2A254B]">
              Complete Purchase
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
