"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export const ConditionalHeader = () => {
  const pathname = usePathname();


  const isStudioRoute = pathname.startsWith("/studio");

  return !isStudioRoute ? <Header /> : null;
};

export const ConditionalFooter = () => {
  const pathname = usePathname();


  const isStudioRoute = pathname.startsWith("/studio");

  return !isStudioRoute ? <Footer /> : null;
};


