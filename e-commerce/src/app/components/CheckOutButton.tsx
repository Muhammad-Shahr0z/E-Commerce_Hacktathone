'use client';

import { loadStripe, Stripe } from '@stripe/stripe-js'; // Import Stripe type
import { useEffect, useState } from 'react';
import { addToCart } from '../addToCart';
import { useAtom } from 'jotai';

const CheckoutButton = () => {
  const [stripe, setStripe] = useState<Stripe | null>(null); // Use Stripe type directly
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [addCart , setAddToCart] = useAtom(addToCart);

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

    const res = await fetch('https://e-commerce-hacktathone.vercel.app/api/stripe/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addCart),
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
    <button
      className={`${addCart.length>0 ? "bg-blue-500 hover:bg-blue-600":"bg-gray-500"} w-full text-white p-2 rounded mt-4`}
      onClick={handleCheckout}
      disabled={!stripe || isLoading || addCart.length === 0}

    >
      {isLoading ? 'Loading...' : 'Checkout'}
    </button>
  );
};

export default CheckoutButton;
