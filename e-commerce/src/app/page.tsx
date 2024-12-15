import React from "react";
import Hero from "./components/Hero";
import SectionOne from "./components/SectionOne";
import NewCeramic from "./components/NewCeramic";
import PopularProduct from "./components/PopularProduct";
import SignUp from "./components/SignUp";
import WidthWrapper from "./components/WidthWrapper";
import Studio from "./components/Studio";

const page = () => {
  return (

    <main>



      <WidthWrapper>
        <Hero />
        <SectionOne />
        <NewCeramic Heading="New ceramics" />
        <PopularProduct />
      </WidthWrapper>
      <SignUp />
      <WidthWrapper>
        <Studio />
      </WidthWrapper>

    </main>
  );
};

export default page;
