import React, { useEffect, useState } from "react";
import Card from "./Card";

function DataFetching() {
  const [val, setVal] = useState([]);
  const [count, setCount] = useState(0);

  console.log("btn clicked");

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://api.unsplash.com/photos/?client_id=qMjwsRR8FgpjKblC3QJtXe9aMyZXnWImYVWmvRBa3mU"
      );
      const data = await response.json();
      console.log(data);

      setVal(data);
    }

    getData();
  }, []);

  return (
    <div className="imgContainer">
      {val.map((item, idx) => {
        // return <img src={item.urls.small} alt="image" key={idx} />;
        // return (
        //   <div className="card">
        //     <p>{item.alt_description}</p>
        //     <img src={item.urls.small} alt="" />
        //     <p>likes - {item.likes}</p>
        //   </div>
        // );

        return <Card item={item} key={idx} />;
      })}
    </div>
  );
}

export default DataFetching;
