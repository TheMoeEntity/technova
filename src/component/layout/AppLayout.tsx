"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollTop from "../ui/ScrollTop";
import { Toaster } from "sonner";
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ScrollTop />
      <Footer />
      <Toaster />
    </>
  );
};

export default AppLayout;
