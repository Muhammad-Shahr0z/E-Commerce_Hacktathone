"use client"


import { useAtom } from 'jotai';
import { CheckCircleIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { addToCart } from '../addToCart';

const SuccessPage = () => {

 const [addCart , setAddToCart] = useAtom(addToCart);
useEffect(()=>{
setAddToCart([])
},[])


  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
        <CheckCircleIcon className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been confirmed and is now being processed.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
