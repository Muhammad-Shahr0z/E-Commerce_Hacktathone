"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export const ConditionalHeader = () => {
  const pathname = usePathname();

  const isStudioRoute = pathname.startsWith("/studio")|| pathname.startsWith("/admin")|| pathname.startsWith("/success")||pathname.startsWith("/cancel");;

  return !isStudioRoute ? <Header /> : null;
};

export const ConditionalFooter = () => {
  const pathname = usePathname();


  const isRestrictedRoute = pathname.startsWith("/studio") || pathname.startsWith("/admin")||pathname.startsWith("/success")||pathname.startsWith("/cancel");

  return !isRestrictedRoute ? <Footer /> : null;
};
