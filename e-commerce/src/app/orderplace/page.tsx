"use client"

import { useAtom } from "jotai";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { addToCart } from "../addToCart";

const OrderSuccessPage = () => {
   const [addCart, setAddToCart] = useAtom(addToCart);
  return (
    <div className="bg-gray-50 min-h-screen overflow-x-hidden max-w-[800px] mx-auto">
   
      <div className="container mx-auto px-4 py-6 max-w-full">
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-[#2A254B] hover:underline">
            <FaArrowLeft />
          </Link>
          <h1 className="text-[20px] sm:text-[28px] md:text-[36px] font-bold text-[#2A254B]">
            Order Success
          </h1>
        </div>
      </div>

      {/* Order Confirmation Message */}
      <div className="container mx-auto px-4 py-6 max-w-full">
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-green-600 mb-4">
            Order Successfully Placed!
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Thank you for your purchase. Your order has been successfully placed and is being processed. You will receive an email with the order details shortly.
          </p>

          {/* Back to Shopping Button */}
          <Link href="/products" passHref>
            <button className="w-full py-2 bg-[#2A254B] text-white font-semibold rounded-md hover:bg-[#F9F9F9] hover:text-[#2A254B]">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
