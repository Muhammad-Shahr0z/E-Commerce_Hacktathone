import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrPinterest } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="max-w-[1440px] md:h-[380px] mx-auto bg-[#2A254B] text-white md:pt-10 pt-8 gap-5">
      <div className="flex flex-col md:flex-row md:justify-center max-w-[1280px] mx-auto px-5">
        <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6  md:pl-0  md:mb-0 mb-5">
          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <ul className="space-y-2  satoshi text-[14px]">
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
              <li>Crockery</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Menu</h3>
            <ul className="space-y-2 satoshi text-[14px]">
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Our company</h3>
            <ul className="space-y-2 satoshi text-[14px]">
              <li>About us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Returns policy</li>
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
          <FaLinkedin />
          <FaFacebookSquare />
          <FaInstagram />
          <FaSkype />
          <FaTwitter />
          <GrPinterest />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
