import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { themeContext } from "../App";

const Navbar = () => {
  const { theme, setTheme } = useContext(themeContext);
  console.log(theme);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/form">Form</Link>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          Change Theme
        </button>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Navbar;
