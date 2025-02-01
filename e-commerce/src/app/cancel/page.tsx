"use client";

import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { PuffLoader } from "react-spinners";
import { useState, useEffect } from "react";

export default function CancelPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fake loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-blue-700">
      <motion.div
        className="w-full max-w-lg p-8 bg-white rounded-3xl shadow-xl flex flex-col items-center border border-gray-200"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6 }}
      >
        {isLoading ? (
          <div className="flex flex-col items-center">
            {/* Loader with animation */}
            <PuffLoader color="#ffffff" size={80} />
            <motion.p
              className="mt-4 text-lg font-medium text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Processing your cancellation...
            </motion.p>
          </div>
        ) : (
          <>
            <motion.div
              className="text-red-600 text-6xl mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <AiOutlineCloseCircle />
            </motion.div>
            <motion.h1
              className="text-3xl font-semibold text-red-600 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Payment Canceled
            </motion.h1>
            <motion.p
              className="text-center text-gray-700 text-lg mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Your payment has been canceled. If this was a mistake, you can try again.
            </motion.p>
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="/"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Go to Home
              </motion.a>
              <motion.a
                href="/carts"
                className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-xl hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try Again
              </motion.a>
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
}
