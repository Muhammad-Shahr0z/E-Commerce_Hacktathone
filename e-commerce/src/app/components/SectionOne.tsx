import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { LuFileText } from "react-icons/lu";
import { PiPlant } from "react-icons/pi";

const Features = () => {
  return (
    <div className="bg-white w-full xl:h-[355px] md:h-[450px]  h-[757px] flex flex-col md:mt-12 md:px-10 px-5 xl:p-0">
      <h2 className="md:text-2xl text-[20px] text-start font-bold mb-6 md:text-center text-[#2A254B] clashDisplay mt-10 ">
        What makes our brand different
      </h2>

      <div className="w-full mx-auto h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-10 items-center">
        {/* div 01 */}
        <div className="flex items-start flex-col xl:w-[260px] h-[160px]  gap-[16px] clashDisplay font-[400] w-full  transition-transform duration-300 ease-in-out hover:scale-95">
          <div>
            <FaShippingFast className="text-3xl text-black" />
          </div>
          <h3 className=" md:text-xl text-[16px] font-semibold">
            Next day as standard
          </h3>
          <p className="text-[14px] md:text-[16px] leading-6">
            Order before 3pm and get your order the next day as standard.
          </p>
        </div>

        {/* div 02 */}
        <div className="flex items-start flex-col xl:w-[270px]  h-[160px] gap-[16px] clashDisplay font-[400]  w-full  transition-transform duration-300 ease-in-out hover:scale-95">
          <div>
            <RiCheckboxCircleLine className="text-3xl text-black" />
          </div>
          <h3 className="md:text-xl text-[16px] font-semibold">
            Made by true artisans
          </h3>
          <p className="text-[16px] leading-6">
            Handmade crafted goods made with real passion and craftsmanship.
          </p>
        </div>

        {/* div 03 */}
        <div className="flex items-start flex-col xl:w-[270px]  h-[160px]  gap-[16px] clashDisplay font-[400]  w-full transition-transform duration-300 ease-in-out hover:scale-95 ">
          <div>
            <LuFileText className="text-3xl text-black" />
          </div>
          <h3 className="md:text-xl text-[16px] font-semibold">
            Unbeatable prices
          </h3>
          <p className="text-[16px] leading-6">
            For our materials and quality you won’t find better prices anywhere.
          </p>
        </div>

        {/* div 04 */}
        <div className="flex items-start flex-col xl:w-[270px] h-[160px] gap-[16px] clashDisplay font-[400] w-full   transition-transform duration-300 ease-in-out hover:scale-95">
          <div>
            <PiPlant className="text-3xl text-black" />
          </div>
          <h3 className="md:text-xl text-[16px] font-semibold">
            Recycled packaging
          </h3>
          <p className="text-[16px] leading-6">
            We use 100% recycled packaging to ensure our footprint is
            manageable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
