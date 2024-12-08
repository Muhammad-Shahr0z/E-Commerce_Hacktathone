import Link from "next/link";
import React from "react";
import Image from "next/image";

const CartPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen max-w-[800px] mx-auto">
      <div className="container mx-auto px-4 py-4">
        <p className="text-sm text-gray-600">
          <Link href="/" className="text-gray-800 hover:underline">
            Home
          </Link>
          / <span className="text-gray-500">Cart</span>
        </p>
        <h1 className="text-[24px] md:text-[36px] clashDisplay my-2">
          Your shopping cart
        </h1>
      </div>

      <div className="container mx-auto">
        <div className="bg-white shadow-md rounded-md overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-800 uppercase text-sm">
              <tr>
                <th className="py-3 px-2 sm:px-4">Product</th>
                <th className="py-3 px-2 sm:px-4">Price</th>
                <th className="py-3 px-2 sm:px-4">Quantity</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b">
                <td className="py-4 px-2 sm:px-4 flex items-center space-x-4">
                  <Image
                    src="/cart/2.png"
                    alt="plant"
                    className="w-12 h-12 object-cover"
                    height={54}
                    width={54}
                  />
                  <span className="text-xs sm:text-base">Basic white vase</span>
                </td>
                <td className="py-4 px-2 sm:px-4">$650</td>
                <td className="py-4 px-2 sm:px-4">
                  <select className="border rounded-md px-2 py-1 text-xs sm:text-sm">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-2 sm:px-4 flex items-center space-x-4">
                  <Image
                    src="/cart/1.png"
                    alt="plant"
                    className="w-12 h-12 object-cover"
                    height={54}
                    width={54}
                  />
                  <span className="text-xs sm:text-base">Graystone vase</span>
                </td>
                <td className="py-4 px-2 sm:px-4">$550</td>
                <td className="py-4 px-2 sm:px-4">
                  <select className="border rounded-md px-2 py-1 text-xs sm:text-sm">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </td>
              </tr>
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
              <span>$1200</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-lg font-medium">
              <span>Total:</span>
              <span>$1200</span>
            </div>
          </div>
          <button className="bg-[#F9F9F9] text-[#2A254B] hover:bg-[#2A254B] hover:text-white w-full mt-4 py-2 rounded-md">
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
