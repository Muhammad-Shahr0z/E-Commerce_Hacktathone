"use client";

import { useAtom } from "jotai";
import { customerFormDetails } from "../store";
import { motion } from "framer-motion";
import { BsCheckCircle } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { saveOrderToSanity } from "@/utils/page";
import { addToCart } from "../addToCart";
import { BillingDetails, Product } from "../../../interface";
import { useEffect } from "react";

const OrderSuccessPage = () => {
    const [addCart] = useAtom(addToCart);
    const [billingDetails] = useAtom<BillingDetails>(customerFormDetails);
  const router = useRouter();

  
  useEffect(() => {
    const SanatyUpload = async () => {
      try {
        const totalPriceCalc = addCart.reduce((total: number, product: Product) => {
          return total + product.Finalprice * product.Quantity;
        }, 0);
        console.log("Before calling saveOrderToSanity");
        await saveOrderToSanity(billingDetails, addCart, totalPriceCalc);
        console.log("After calling saveOrderToSanity");
      } catch (error) {
        console.error("Error uploading to Sanity:", error);
      }
    };
    if (billingDetails && addCart.length > 0) {
      SanatyUpload();
    }
  }, [addCart, billingDetails]);
  




  const handleContinueShopping = () => {
    router.push("/"); // Redirect to homepage
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 p-4">
      <motion.div
        className="bg-white shadow-lg rounded-2xl p-6 max-w-lg text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-green-500 text-6xl mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <BsCheckCircle />
        </motion.div>
        <h1 className="text-2xl font-bold text-gray-800">Order Placed Successfully!</h1>
        <p className="text-gray-600 mt-2">
          Thank you for shopping with us. Here are your billing details:
        </p>

        {billingDetails ? (
          <motion.div
            className="mt-6 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-lg font-medium text-gray-800">Billing Details:</h2>
            <p className="text-gray-700">Name: {billingDetails.fullName}</p>
            <p className="text-gray-700">Email: {billingDetails.email}</p>
            <p className="text-gray-700">Address: {billingDetails.addressLine1}</p>
          </motion.div>
        ) : (
          <p className="text-gray-500 mt-4">Loading billing details...</p>
        )}

        <motion.button
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          onClick={handleContinueShopping}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Continue Shopping
        </motion.button>
      </motion.div>
    </div>
  );
};

export default OrderSuccessPage;
