import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./home/home.js";
import Navbar from "../components/header/navbar.js";
import Payment from "./payment/payment.js";

function PageSwitch() {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default PageSwitch;
