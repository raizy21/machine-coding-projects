import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  if (count > 5) {
    // this error is now thrown during the render phase
    throw new Error("counter has reached its limit!");
  }

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>counter: {count}</h1>
      <button onClick={incrementCount}>increment</button>
    </div>
  );
};

export default Counter;
