"use client"

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect } from "react";

const Navbar = () => {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      console.log("User Object:", user);
      console.log("User Email:", user?.emailAddresses?.[0]?.emailAddress);
    } else {
      console.log("User is undefined or not signed in.");
    }
  }, [user]);

  // User's email for condition
  const userEmail = user?.emailAddresses?.[0]?.emailAddress;

  return (
    <nav className="sticky top-0 z-50 mb-8 w-full mt-2 bg-white h-[66px] xl:gap-x-11 md:gap-x-8 text-[#726E8D] text-[16px] satoshi hidden md:flex justify-center items-center">
      <Link
        href="/"
        className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
      >
        Home
      </Link>
      <Link
        href="/products"
        className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
      >
        All Products
      </Link>
      <Link
        href="/about-us"
        className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
      >
        About Us
      </Link>
      <Link
        href="/category/ceramic"
        className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
      >
        Ceramics
      </Link>
      <Link
        href="/category/Tables"
        className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
      >
        Tables
      </Link>
      <Link
        href="/category/chairs"
        className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
      >
        Chairs
      </Link>
      <Link
        href="/category/tableware"
        className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
      >
        Tableware
      </Link>
      <Link
        href="/category/cutlery"
        className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
      >
        Cutlery
      </Link>
      {userEmail ===  process.env.NEXT_PUBLIC_EMAIL_ADDRESS && (
        <Link
          href="/admin"
          className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
        >
          Admin Panel
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
