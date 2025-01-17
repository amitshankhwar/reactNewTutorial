import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const DataScreen = () => {
  // https://fakestoreapi.com/products

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        let res = await axios.get("https://fakestoreapi.com/products");
        console.log(res);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {data.map((item, idx) => {
        return <Card item={item} key={idx} />;
      })}
    </div>
  );
};

export default DataScreen;
