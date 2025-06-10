import { useState, useCallback } from "react";
import Child from "./Child.jsx";

const UseCallback = () => {
  const [counter, setCounter] = useState(0);

  // increment counter by 1
  const handleIncrement = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  // reset counter to 0
  const handleReset = useCallback(() => {
    setCounter(0);
  }, [counter]);

  return (
    <>
      <div>
        <h1>use callback example</h1>
        <h1>{counter}</h1>
        <Child handleIncrement={handleIncrement} handleReset={handleReset} />
      </div>
    </>
  );
};

export default UseCallback;
