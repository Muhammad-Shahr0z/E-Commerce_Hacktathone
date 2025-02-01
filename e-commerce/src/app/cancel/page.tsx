"use client";

import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { PuffLoader } from "react-spinners";
import { useState, useEffect } from "react";

export default function CancelPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fake loading for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        className="w-full max-w-lg p-8 bg-white rounded-3xl shadow-xl flex flex-col items-center border border-gray-200"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        {isLoading ? (
          <div className="flex flex-col items-center">
            {/* Loader with animation */}
            <PuffLoader color="#4F46E5" size={80} />
            <motion.p
              className="mt-4 text-lg font-medium text-gray-700"
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
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: 0.2,
              }}
            >
              <AiOutlineCloseCircle />
            </motion.div>
            <motion.h1
              className="text-3xl font-semibold text-gray-800 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              Payment Canceled
            </motion.h1>
            <motion.p
              className="text-center text-gray-600 text-lg mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              Your payment has been canceled. If this was a mistake, you can try again.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              {/* Blue Button */}
              <motion.a
                href="/"
                className="w-full sm:w-auto bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transform transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Go to Home
              </motion.a>
              {/* Green Button */}
              <motion.a
                href="/carts"
                className="w-full sm:w-auto bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transform transition-all duration-300"
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
