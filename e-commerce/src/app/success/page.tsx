"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PuffLoader } from "react-spinners";
import { addToCart } from "../addToCart";
import { useAtom } from "jotai";

const OrderSuccessPage = () => {
  const [isLoading, setIsLoading] = useState(true);
    const [, setAddToCart] = useAtom(addToCart);
  const [isExiting, setIsExiting] = useState(false); // Tracks exit animation
  const router = useRouter();






  useEffect(() => {
    // Simulate a fake loading for 2 seconds
    const timer = setTimeout(() => {
      setAddToCart([]);
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleContinueShopping = () => {
    setIsExiting(true); // Trigger exit animation
    setTimeout(() => {
      router.push("/products"); // Navigate to products after animation
    }, 500); // Match exit animation duration
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="flex items-center justify-center min-h-screen bg-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          {isLoading ? (
            <div className="flex flex-col items-center">
              {/* Loader with animation */}
              <PuffLoader color="#000000" size={80} />
              <motion.p
                className="mt-4 text-lg font-medium text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Processing your order...
              </motion.p>
            </div>
          ) : (
            <motion.div
              className="w-full max-w-md p-8 bg-white rounded-3xl shadow-xl flex flex-col items-center border border-gray-200"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Success Icon */}
              <motion.div
                className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full shadow-xl"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>

              {/* Success Message */}
              <motion.h1
                className="mt-6 text-3xl text-center font-semibold text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Order Placed Successfully!
              </motion.h1>

              <motion.p
                className="mt-4 text-center text-gray-700 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Thank you for shopping with us. Your order will be processed shortly.
              </motion.p>

              {/* Continue Shopping Button */}
              <motion.button
                className="mt-6 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderSuccessPage;
