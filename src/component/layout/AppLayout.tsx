import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollTop from "../ui/ScrollTop";
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ScrollTop />
      <Footer />
    </>
  );
};

export default AppLayout;
