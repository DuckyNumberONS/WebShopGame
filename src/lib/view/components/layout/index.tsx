import React, { ReactNode, useContext, useEffect } from "react";
import Footer from "./footer";
import { useRouter } from "next/router";
import Header from "./header";
import DefaultLayout from "./admin";
import { LoginContext } from "@/lib/hook/Context/login";

interface PropsLayout {
  children?: ReactNode;
}

const Layout = ({ children }: PropsLayout) => {
  const { pathname, push } = useRouter();
  const router = pathname.split("/")[1];

  return (
    <>
      {router == "admin" ? (
        <DefaultLayout children={children} />
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};
export default Layout;
