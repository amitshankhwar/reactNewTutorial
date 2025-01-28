import React, { useContext } from "react";
import Dashboard from "./Dashboard";
import { dataContext, themeContext } from "../App";

const LazyLoad = () => {
  const data = useContext(themeContext);
  const res = useContext(dataContext);
  console.log(data, res);

  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default LazyLoad;
