"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useAtom } from "jotai";
import { addToCart } from "../addToCart";
import { useState } from "react";
import CheckOutButton from "../components/CheckOutButton";

const BillingSummary = () => {
  const [addCart, setAddToCart] = useAtom(addToCart);


  const [billingDetails, setBillingDetails] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    paymentMethod: "cashOnDelivery", 
  });


  console.log("this is billing details ",billingDetails)

  const [errors, setErrors] = useState({
    phoneNumber: false,
    email: false,
  });

  // Validation Regex
  const phoneRegex = /^[0-9]{11}$/; // 11 digit phone number
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

  // Helper function to check if all required fields are filled
  const isFormValid = () => {
    const { fullName, phoneNumber, email, addressLine1, city } = billingDetails;
    return (
      fullName.trim() !== "" &&
      phoneRegex.test(phoneNumber) &&
      emailRegex.test(email) &&
      addressLine1.trim() !== "" &&
      city.trim() !== ""
    );
  };

  const updatedCart = addCart.map((item: { Quantity: number; price: number }) => ({
    ...item,
    totalPrice: item.Quantity * item.price,
  }));

  const totalAmount = updatedCart.reduce(
    (acc: number, item: { totalPrice: number }) => acc + item.totalPrice,
    0
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBillingDetails((prev) => ({ ...prev, [name]: value }));

    // Validation logic
    if (name === "phoneNumber") {
      setErrors((prev) => ({
        ...prev,
        phoneNumber: !phoneRegex.test(value),
      }));
    }
    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: !emailRegex.test(value),
      }));
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen overflow-x-hidden max-w-[800px] mx-auto">
      <div className="container mx-auto px-2 sm:px-4 py-6">
        <div className="flex items-center space-x-2">
          <Link href="/carts" className="text-[#2A254B] hover:underline">
            <FaArrowLeft className="text-sm sm:text-base" />
          </Link>
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#2A254B]">
            Cart
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
                  <tr key={item.slug}>
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

      {/* Billing Form */}
      <div className="container mx-auto px-2 sm:px-4 py-6">
        <div className="bg-white shadow-md rounded-md p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Billing Details</h2>
          <form className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={billingDetails.fullName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={billingDetails.phoneNumber}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.phoneNumber ? "border-red-500" : ""
              }`}
              required
            />
            {errors.phoneNumber && (
              <span className="text-red-500 text-sm">Invalid phone number.</span>
            )}
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={billingDetails.email}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.email ? "border-red-500" : ""
              }`}
              required
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Invalid email address.</span>
            )}
            <input
              type="text"
              name="addressLine1"
              placeholder="Address Line 1"
              value={billingDetails.addressLine1}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="addressLine2"
              placeholder="Address Line 2 (Optional)"
              value={billingDetails.addressLine2}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={billingDetails.city}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cashOnDelivery"
                  checked={billingDetails.paymentMethod === "cashOnDelivery"}
                  onChange={handleInputChange}
                />
                <span>Cash on Delivery</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="stripe"
                  checked={billingDetails.paymentMethod === "stripe"}
                  onChange={handleInputChange}
                />
                <span>Pay with Stripe</span>
              </label>
            </div>
          </form>

          {/* Conditional Checkout Button */}
          {billingDetails.paymentMethod === "stripe" ? (
            <CheckOutButton disabled={!isFormValid()} />
          ):(
            <Link href={isFormValid()?"/ordersuccess" : "#"}>
              <button
                onClick={() => isFormValid() && setAddToCart([])}
                className={`w-full mt-4 py-2 ${
                  isFormValid()
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-400 cursor-not-allowed"
                } text-white font-semibold rounded-md`}
                disabled={!isFormValid()}
              >
                Place Order
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BillingSummary;
