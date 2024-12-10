import Link from "next/link";
import React from "react";

const ViewCollectionButton = () => {
  return (
    <button className="md:w-[170px] w-full h-[56px] bg-[#F9F9F9] text-[#2A254B] font-[400] text-[1rem] leading-6 satoshi tracking-wider hover:bg-[#4a393978] mt-4">
      <Link href="/products">View Collections</Link>
    </button>
  );
};

export default ViewCollectionButton;
