import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

interface PropsLayout {
  children?: ReactNode;
}

const Layout = ({ children }: PropsLayout) => {
  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
