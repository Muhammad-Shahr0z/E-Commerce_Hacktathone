"use client"

import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { useAtom } from "jotai";
import { filterCatogory } from "../store";

const FilterBar = () => {

  const [selectedCategory, setSelectedCategory] = useAtom(filterCatogory);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <main>

   <Image className="hidden md:block" src="/products/frame.png" height={209} width={1480} alt="frame"/>
   <Image className="md:hidden w-full" src="/products/Headers.png" height={146} width={400}  alt="Header"/>

    <div className="max-w-[1280px] mx-auto flex md:flex-row justify-between items-center bg-white p-4 border-b">
      <ul className="text-[16px]  flex-wrap md:flex-nowrap w-full md:w-[557px] h-12 justify-around items-center gap-4 hidden md:flex cursor-pointer">
        <li className="flex items-center gap-1 cursor-pointer">

        <span className="flex items-center gap-2 text-sm font-medium">
  <span>Category</span>
  <div className="relative">
    <select
         name="category"
         id="category"
         value={selectedCategory} 
         onChange={handleCategoryChange} 
         className="pl-3 pr-8 py-2 border rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
    >
      <option value="allProducts">All Products</option>
      <option value="tableware">Tableware</option>
      <option value="decoration-items">Decoration Items</option>
      <option value="tables">Tables</option>
      <option value="chairs">Chairs</option>
      <option value="cutlery">Cutlery</option>
    </select>

    <svg
      className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </div>
</span>

        </li>





        <li className="flex items-center gap-1 cursor-pointer">
          <span className="flex items-center gap-1">Price <FaChevronDown /></span>
        </li>


        
        <li className="items-center gap-1 cursor-pointer hidden md:flex">
          <span className="items-center gap-1 hidden lg:flex">Brand <FaChevronDown /></span>
        </li>



      </ul>

      <span className="flex items-center gap-2 text-sm font-medium md:hidden">
  <span>Category</span>
  <div className="relative">
    <select
         name="category"
         id="category"
         value={selectedCategory} 
         onChange={handleCategoryChange} 
         className="pl-3 pr-8 py-2 border rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
    >
      <option value="allProducts">All Products</option>
      <option value="tableware">Tableware</option>
      <option value="decoration-items">Decoration Items</option>
      <option value="tables">Tables</option>
      <option value="chairs">Chairs</option>
      <option value="cutlery">Cutlery</option>
    </select>

    <svg
      className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </div>
</span>

     

      <ul className="w-full md:w-[237px] text-[16px] h-12 justify-between md:justify-around items-center mt-4 md:mt-0 hidden md:flex">
        <li className="flex items-center">Sorting by:</li>
        <li className="w-[154px] flex items-center justify-center gap-1 cursor-pointer">
          <span className="flex items-center gap-1">Date added <FaChevronDown /></span>

        </li>
      </ul>

      
    </div>
    </main>
  );
};

export default FilterBar;
