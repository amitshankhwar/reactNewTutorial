import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { themeContext } from "../App";

const About = () => {
  const { theme, setTheme } = useContext(themeContext);

  console.log(theme);

  return (
    <div>
      {/* <a href="/">Go to home</a> */}
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default About;
