import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/NavBar";
import Landing from "../Landing/Landing";
import Footer from "../footer/Footer";

export default function MasterLayOut() {
  return (
    <>
      <Navbar />
      <Landing />
      <Outlet />
      <Footer />
    </>
  );
}
