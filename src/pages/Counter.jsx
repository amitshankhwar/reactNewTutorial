// function Counter() {
//   //   let p = <a href="www.google.com">click me</a>;

import { useState } from "react";

//   let age = 2;

//   return (
//     <>
//       <h1>
//         Hello its a counter component{" "}
//         {/* {age > 18 ? <p>Adult</p> : <p>Teenager</p>} */}
//       </h1>

//       {/* {age > 18 && <h2>Adult</h2>} conditional rendering */}

//       {/* {p} */}
//     </>
//   );
// }

// export default Counter;

function Counter() {
  let [counter, setCounter] = useState(0); //hook -> useState()

  //   console.log(res[1]);

  //   let x = 5;

  console.log("clicked");

  function handleClick() {
    // counter++;
    setCounter(counter + 1);
    console.log(counter);
  }

  function handleMinus() {
    setCounter(counter - 1);
  }

  return (
    <>
      <button onClick={handleMinus}>-</button>
      <h1>{counter}</h1>
      <button onClick={handleClick}>+</button>
    </>
  );
}

export default Counter;
