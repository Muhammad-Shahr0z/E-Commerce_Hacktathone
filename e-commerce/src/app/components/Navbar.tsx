import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 mb-8 w-full mt-2 bg-white  h-[66px] xl:gap-x-11 md:gap-x-8 text-[#726E8D] text-[16px] satoshi hidden md:flex justify-center items-center">
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
    </nav>
  );
};

export default Navbar;
