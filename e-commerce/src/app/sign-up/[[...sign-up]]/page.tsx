"use client"

import { SignUp } from '@clerk/nextjs'
import { useEffect } from 'react';


export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex justify-center items-center md:mb-36 mb-5">
      <SignUp />
    </div>
  );
}
