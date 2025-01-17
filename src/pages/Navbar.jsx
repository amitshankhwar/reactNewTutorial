import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/form">Form</Link>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Navbar;
