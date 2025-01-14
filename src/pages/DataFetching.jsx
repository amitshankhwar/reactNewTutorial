import React, { useEffect, useState } from "react";

function DataFetching() {
  const [val, setVal] = useState([]);
  const [count, setCount] = useState(0);

  console.log("btn clicked");

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      console.log(data);

      setVal(data);
    }

    getData();
  }, []);

  return (
    <div>
      <ul>
        {val.map((item, idx) => {
          return <li key={idx}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default DataFetching;
