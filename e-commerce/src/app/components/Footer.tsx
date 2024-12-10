import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrPinterest } from "react-icons/gr";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-[1440px] md:h-[380px] mx-auto bg-[#2A254B] text-white md:pt-10 pt-8 gap-5">
      <div className="flex flex-col md:flex-row md:justify-center max-w-[1280px] mx-auto px-5">
        <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6  md:pl-0  md:mb-0 mb-5">
          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <ul className="space-y-2 satoshi text-[14px]">
              <li>
                <Link
                  href="/crockery"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  Crockery
                </Link>
              </li>
              <li>
                <Link
                  href="/furniture"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  Furniture
                </Link>
              </li>
              <li>
                <Link
                  href="/homeware"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  Homeware
                </Link>
              </li>
              <li>
                <Link
                  href="/plant-pots"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  Plant pots
                </Link>
              </li>
              <li>
                <Link
                  href="/chairs"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  Chairs
                </Link>
              </li>
              <li>
                <Link
                  href="/crockery"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  Crockery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Menu</h3>
            <ul className="space-y-2 satoshi text-[14px]">
              <li>
                <Link
                  href="/new-arrivals"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  New arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/best-sellers"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  Best sellers
                </Link>
              </li>
              <li>
                <Link
                  href="/recently-viewed"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  Recently viewed
                </Link>
              </li>
              <li>
                <Link
                  href="/popular-this-week"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  Popular this week
                </Link>
              </li>
              <li>
                <Link
                  href="/all-products"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  All products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Our company</h3>
            <ul className="space-y-2 satoshi text-[14px]">
              <li>
                <Link
                  href="/about-us"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-1"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/vacancies"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-1"
                >
                  Vacancies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-1"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/returns-policy"
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-1"
                >
                  Returns policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2">
          <h3 className="font-semibold mb-3">Join our mailing list</h3>

          <div className="flex items-center  h-[56px] w-full">
            <input
              type="email"
              placeholder="your@email.com"
              className="md:w-[509px] h-[56px] outline-none bg-[#FFFFFF26] pb-1 w-[70%] pl-4 "
            />
            <button className="text-[#2A254B] w-[30%] md:w-[118px] h-[56px]  bg-[#FFFFFF] ">
              Sign up
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 py-5 md:pt-10 flex justify-center md:justify-between items-center max-w-[1280px] mx-auto text-center px-5 xl:px-5 ">
        <p className="text-sm satoshi justify-self-center md:pr-5">
          &copy; Copyright 2022 Avion LTD
        </p>
        <div className="md:flex justify-center space-x-4 text-2xl hidden">
          <FaLinkedin className="hover:text-blue-700 transition-all duration-300 cursor-pointer" />
          <FaFacebookSquare className="hover:text-blue-600 transition-all duration-300 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 transition-all duration-300 cursor-pointer" />
          <FaSkype className="hover:text-[#00aff0] transition-all duration-300 cursor-pointer" />
          <FaTwitter className="hover:text-blue-400 transition-all duration-300 cursor-pointer" />
          <GrPinterest className="hover:text-red-600 transition-all duration-300 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
