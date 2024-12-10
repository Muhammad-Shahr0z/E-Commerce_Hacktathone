import React, { ReactNode } from "react";

interface WidthWrapperProps {
  children: ReactNode;
}

const WidthWrapper: React.FC<WidthWrapperProps> = ({ children }) => {
  return <div className="max-w-[1280px] mx-auto">{children}</div>;
};

export default WidthWrapper;
