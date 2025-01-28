import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const EffectvsLayoutEffect = () => {
  const [width, setWidth] = useState(0);
  const divRef = useRef();

  useLayoutEffect(() => {
    setTimeout(() => {
      setWidth(divRef.current.clientWidth);
    }, 3000);
  }, []);

  return (
    <div>
      <div
        ref={divRef}
        style={{ width: "200px", height: "100px", background: "lightblue" }}
      >
        Resize Me!
      </div>
      <p>The width of the box is: {width}px</p>
    </div>
  );
};

export default EffectvsLayoutEffect;
