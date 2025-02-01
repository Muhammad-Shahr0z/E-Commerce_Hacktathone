'use client';

import { loadStripe, Stripe } from '@stripe/stripe-js'; // Import Stripe type
import { useEffect, useState } from 'react';
import { addToCart } from '../addToCart';
import { useAtom } from 'jotai';
import { customerFormDetails, isStripeLoading } from '../store';
import { BillingDetails } from '../../../interface';
import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners"; // Import the loader from React Spinners


const CheckoutButton = ({disabled}:any) => {

  // console.log(disabled)

  const [stripe, setStripe] = useState<Stripe | null>(null); // Use Stripe type directly
  const [isLoading, setIsLoading] = useAtom<boolean>(isStripeLoading);
  const [addCart , setAddToCart] = useAtom(addToCart);
   const [billingDetails, setBillingDetails] = useAtom<BillingDetails>(customerFormDetails);

  useEffect(() => {
    // Load Stripe.js with your publishable key
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!).then((loadedStripe) => {
      setStripe(loadedStripe);
    }).catch(error => {
      console.error('Error loading Stripe:', error);
    });
  }, []);

  const handleCheckout = async () => {
    if (!stripe) {
      console.error('Stripe has not loaded yet!');
      return;
    }

    setIsLoading(true);

    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({addCart, billingDetails}),
    });

    if (!res.ok) {
      console.error('Failed to create checkout session');
      setIsLoading(false);
      return;
    }

    const { sessionId } = await res.json();

    if (sessionId) {
      
      
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error('Stripe Checkout Error:', error);
      }
    } else {
      console.error('No session ID returned from server');
    }

    setIsLoading(false);
  };

  return (


    
    

    
    <motion.button
      className={`${!disabled ? "bg-blue-500 hover:bg-green-700" : "bg-gray-500 cursor-not-allowed"} w-full text-white p-3 rounded-md mt-4 flex justify-center items-center`}
      onClick={handleCheckout}
      disabled={!stripe || isLoading || addCart.length === 0 || disabled}
      initial={{ scale: 1 }} // Initial state (default size)
      whileHover={{ scale: 1.03 }} // Slightly enlarged on hover
      whileTap={{ scale: 0.98 }} // Slightly shrink on tap
      transition={{ type: "spring", stiffness: 300, damping: 25 }} // Smooth transition with slight damping
    >
      {isLoading ? (
        <ClipLoader size={30} color="#fff" loading={isLoading} /> // Stylish loader in white color
      ) : (
        'Checkout'
      )}
    </motion.button>
    
    
    
    
  );
};

export default CheckoutButton;
