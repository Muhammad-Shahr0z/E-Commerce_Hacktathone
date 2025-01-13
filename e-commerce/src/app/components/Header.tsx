"use client";

import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/ui/sheet";

import { useAtom } from "jotai";
import { addToCart } from "../addToCart";
import Navbar from "./Navbar";
import { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import SignInButtonComponent from "./LoginButton";
import { inputValueAtom } from "../store";

const Header = () => {
  const { user, isSignedIn } = useUser();
  const [addCart] = useAtom(addToCart);
  const [inputValue,setInputValue] = useAtom(inputValueAtom);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

console.log(inputValue);


  return (
    <>
      <header className="max-w-[1440px] mx-auto md:h-[66px] md:px-10 px-5 sticky top-0 md:static backdrop-blur-sm z-20">
        <div className="md:border-b-[1px] border-[#0000004f] w-full mx-auto flex h-[66px] justify-between items-center md:pb-2">
          {/* Search Bar */}
          <div
            className={`absolute hidden md:block  top-16 md:top-0 md:left-20  md:bg-white rounded-md p-2 transition-all duration-300 ease-in-out transform ${
              isSearchOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-12 opacity-0"
            }`}
          >
            <input
              type="search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search..."
              className="w-full z-50 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <IoSearch
            className="text-xl cursor-pointer hidden md:block"
            onClick={toggleSearch}
          />

          <h1 className="text-[#22202E] text-2xl font-semibold clashDisplay md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <Link href="/">Avion</Link>
          </h1>

          <div className="flex text-xl gap-[10px] items-center">
            <div className="hidden md:block">
              {!isSignedIn ? <SignInButtonComponent /> : null}
            </div>

            <Link
              className="justify-center items-center hidden md:flex cursor-pointer"
              href="/carts"
            >
              <MdOutlineShoppingCart />
              <span className="flex justify-center items-center w-[20px] h-[20px] bg-red-500 mb-5 text-center rounded-full text-white font-semibold">
                <span className="flex justify-center items-center text-[10px]">
                  {addCart.length}
                </span>
              </span>
            </Link>

            <div className="hidden md:block">
              {!isSignedIn ? (
                <CgProfile className="hidden md:block cursor-pointer " />
              ) : (
                <div className="flex justify-center items-center gap-2">
                  <UserButton />
                  <span className="text-sm">{user?.fullName}</span>
                </div>
              )}
            </div>

            <Link
              className="flex justify-center items-center md:hidden cursor-pointer"
              href="/carts"
            >
              <MdOutlineShoppingCart />
              <span className="flex justify-center items-center w-[20px] h-[20px] bg-red-500 mb-5 text-center rounded-full text-white font-semibold">
                <span className="flex justify-center items-center text-[10px]">
                  {addCart.length}
                </span>
              </span>
            </Link>
            <div className="md:hidden">
              {!isSignedIn ? (
                <CgProfile className="block cursor-pointer" />
              ) : (
                <div className="flex justify-center items-center gap-2">
                  <UserButton />
                  <span className="text-sm hidden">{user?.fullName}</span>
                </div>
              )}
            </div>
            {/* Shadcn SHeet DIv */}
            <div className="md:hidden z-10 h-6 w-6">
              <Sheet>
                <SheetTrigger>
                  <RxHamburgerMenu className="h-full w-full" />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className="text-4xl font-bold clashDisplay mb-4 text-center">
                      <Link href="/">Avion</Link>
                    </SheetTitle>
                    <SheetDescription>
                      <nav className="flex flex-col text-sm gap-y-3 border-[0.5px] items-center p-4 rounded-md">
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
                          href="/ceramic"
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

                        <div className="md:hidden">
                          {!isSignedIn ? <SignInButtonComponent /> : null}
                        </div>
                      </nav>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <Navbar />
    </>
  );
};

export default Header;
