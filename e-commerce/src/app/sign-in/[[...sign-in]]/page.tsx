"use client";

import { SignIn } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0); // Page load hone par top par scroll karega
  }, []);

  return (
    <div className="flex justify-center items-center md:mb-36 mb-5">
      <SignIn />
    </div>
  );
}
