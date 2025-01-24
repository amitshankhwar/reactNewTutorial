import React, { useState, useMemo } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // Expensive computation
  const computeFactorial = (n) => {
    console.log("Calculating factorial...");
    if (n <= 0) return 1;
    return n * computeFactorial(n - 1);
  };

  //   const factorial = computeFactorial(count); //bad way

  const factorial = useMemo(() => {
    //useMemo is used to cache the result of the function
    return computeFactorial(count);
  }, [count]); //good way

  return (
    <div>
      <h2>
        Factorial of {count}: {factorial}
      </h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      <input
        type="text"
        placeholder="Type here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default Memo;
