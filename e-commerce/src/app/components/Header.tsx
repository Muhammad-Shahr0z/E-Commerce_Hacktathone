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
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <>
      <header className="max-w-[1440px] mx-auto md:h-[132px] h-[69px] justify-center  flex flex-col items-center FFFFFF md:px-10 px-5 lg:w-full md:mb-12">
        <div className="md:border-b-[0.5px] border-[#0000004f] h-1/2 w-full mx-auto flex justify-between items-center">
          <IoSearch className="text-xl hidden md:block cursor-pointer" />

          <h1 className="text-[#22202E] text-2xl font-semibold clashDisplay">
            <Link href="/">Avion</Link>
          </h1>

          <div className="flex text-xl gap-5 items-center">
          <Link className="justify-center items-center hidden md:flex cursor-pointer" href="/carts">
              <MdOutlineShoppingCart/><span className="text-sm w-5 h-5 bg-red-500 mb-5 text-center rounded-full text-white font-semibold">2</span>
            </Link>

            <Link href="/login">
              <CgProfile className="hidden md:block cursor-pointer " />
            </Link>
            <IoSearch className=" md:hidden cursor-pointer" />
        
            <Link className="flex justify-center items-center md:hidden cursor-pointer" href="/carts">
              <MdOutlineShoppingCart/><span className="text-sm w-5 h-5 bg-red-500 mb-5 text-center rounded-full text-white font-semibold">2</span>
            </Link>
            {/* Shadcn SHeet DIv */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger>
                  <RxHamburgerMenu />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className="text-4xl font-bold clashDisplay mb-4 text-center">
                  <Link href="/">Avion</Link>
                    </SheetTitle>
                    <SheetDescription>
                      <nav className="flex flex-col text-sm gap-y-3 border-[0.5px] items-center p-4 rounded-md">
                        <Link
                          href="/products"
                          className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
                        >
                          All Products
                        </Link>
                        <Link
                          href="/#ceramic"
                          className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
                        >
                          Ceramics
                        </Link>
                        <Link
                          href="/Tables"
                          className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
                        >
                          Tables
                        </Link>
                        <Link
                          href="/"
                          className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
                        >
                          Chairs
                        </Link>
                        <Link
                          href="/Chairs"
                          className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
                        >
                          Crockery
                        </Link>
                        <Link
                          href="/Crockery"
                          className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
                        >
                          Tableware
                        </Link>
                        <Link
                          href="/Tableware"
                          className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
                        >
                          Cutlery
                        </Link>
                      </nav>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        <nav className="w-[675px] justify-between items-center h-1/2 text-[#726E8D] text-[16px] satoshi pt-10 hidden md:flex">
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
            href="/#ceramic"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Ceramics
          </Link>
          <Link
            href="/Tables"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Tables
          </Link>
          <Link
            href="/chairs"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Chairs
          </Link>
          <Link
            href="/crockery"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Crockery
          </Link>
          <Link
            href="/tableware"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Tableware
          </Link>
          <Link
            href="/cutlery"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Cutlery
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
