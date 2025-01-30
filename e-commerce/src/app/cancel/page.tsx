"use client";

import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function CancelPage() {
  return (
    <div className="flex items-center justify-center py-10 bg-gray-50">
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="text-red-600 text-6xl mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <AiOutlineCloseCircle />
        </motion.div>
        <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Canceled</h1>
        <p className="text-gray-600 mb-6">
          Your payment has been canceled. If this was a mistake, you can try again.
        </p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href="/"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Go to Home
          </motion.a>
          <motion.a
            href="/carts"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Try Again
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
