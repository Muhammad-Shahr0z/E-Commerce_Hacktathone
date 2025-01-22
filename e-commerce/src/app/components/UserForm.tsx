"use client";

import { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    address1: "",
    address2: "",
    city: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
  
    try {
      const res = await fetch("/api/submit-customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
  
      if (data.success) {
        setMessage("Customer data submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          address1: "",
          address2: "",
          city: "",
        });
      } else {
        throw new Error(data.error || "Error submitting data");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      const message = (error instanceof Error) ? error.message : "something went wrong";
      setMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">User Information Form</h2>
      {message && (
        <p
          className={`text-center mb-4 ${
            message.includes("successfully") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Mobile */}
        <div>
          <label htmlFor="mobile" className="block text-sm font-medium">
            Mobile
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Address1 */}
        <div>
          <label htmlFor="address1" className="block text-sm font-medium">
            Address Line 1
          </label>
          <input
            type="text"
            id="address1"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            required
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Address2 */}
        <div>
          <label htmlFor="address2" className="block text-sm font-medium">
            Address Line 2
          </label>
          <input
            type="text"
            id="address2"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
