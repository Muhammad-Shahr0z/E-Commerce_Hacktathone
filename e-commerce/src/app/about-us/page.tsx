import Image from "next/image";
import Link from "next/link";

import React from "react";
import Features from "../components/SectionOne";
import SignUp from "../components/SignUp";

const About = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      {/* Hero Section */}
      <div className="w-full h-auto flex flex-col md:flex-row  items-center justify-between md:px-16 py-8 px-6 clashDisplay">
        <div className="lg:w-[704px]">
          <p className="text-[30px] md:text-2xl leading-normal tracking-tight  xl:text-[36px] md:pb-4  md:text-left text-[#2A254B]">
            A brand built on the love of craftsmanship,
          </p>
          <p className="text-[30px] md:text-2xl leading-normal tracking-tight  xl:text-[36px] md:pb-4  md:text-left text-[#2A254B]">
            {" "}
            quality, and outstanding customer service
          </p>
        </div>

        <button className="bg-[#F9F9F9] h-12 md:w-40 w-full mt-10 md:mt-0 rounded-sm text-custom-purple hover:bg-[#2A254B] hover:text-white transition-all duration-300">
          <Link href="/products">View our products</Link>
        </button>
      </div>

      {/* Story Section */}
      <div className="flex flex-col md:flex-row w-full gap-4 h-auto md:h-[558px] items-center justify-around px-4 md:py-16 py-4 ">
        <div className="bg-custom-purple md:h-[478px] w-full md:w-1/2 text-white p-8 lg:pt-[64px] md:px-[32] lg:px-[64px] mb-8 md:mb-0 bg-[#2A254B] transition-transform duration-300 ease-in-out hover:scale-95">
          <h1 className="text-xl md:text-2xl clashDisplay">
            It started with a small idea
          </h1>
          <p className="mt-6 satoshi md:text-[18px]">
            A global brand with local beginnings, our story began in a small
            studio in South London in early 2014.
          </p>
          <button className="md:w-[170px] mt-48 w-full h-[56px] bg-[#F9F9F926] text-white font-[400] text-[1rem] leading-6 satoshi tracking-wider hover:bg-[#574552b5] my-4">
            View collection
          </button>
        </div>

        <div className="w-full md:h-[478px]  md:w-1/2 transition-transform duration-300 ease-in-out hover:scale-95">
          <Image
            src="/about/about-1.png"
            alt="About main"
            height={478}
            width={630}
            className="xl:h-[478px] md:h-[478px] w-full "
          />
        </div>
      </div>

      {/* top portion complete */}

      {/* Service Section */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center px-4 py-4">
        <Image
          height={603}
          width={720}
          src="/about/about-2.png"
          alt="Service"
          className="lg:h-[603px] md:h-[490px] w-full md:w-1/2 transition-transform duration-300 ease-in-out hover:scale-95 hover:translate-y-1"
        />
        <div className="border-2 bg-slate-200 lg:h-[603px] md:h-[490px] w-full  md:w-1/2 p-8 xl:px-20 lg:py-[74px] transition-transform duration-300 ease-in-out hover:scale-95 hover:translate-y-1">
          <h1 className="text-xl md:text-2xl text-[#2A254B] clashDisplay ">
            Our service isn&lsquo;t just personal, it&lsquo;s actually
            hyper-personally exquisite
          </h1>
          <div>
            <p className="text-[#505977] mt-6 text-[14px] md:text-[16px] satoshi ">
              When we started Avion, the idea was simple. Make high-quality
              furniture affordable and available for the mass market.
            </p>
            <p className="text-[#505977] mt-6 text-[14px] md:text-[16px] satoshi ">
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe, and design so our Chelsea boutique became the
              hotbed for the London interior design community.
            </p>
          </div>
          <button className="bg-white lg:mt-52 h-12 w-full md:w-40 rounded-sm mt-10 text-[#2A254B] hover:bg-[#2a254b] hover:text-white">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-[1250px] mx-auto">
        <Features />
      </div>

      {/* Newsletter Section */}
      <SignUp />
    </div>
  );
};

export default About;
