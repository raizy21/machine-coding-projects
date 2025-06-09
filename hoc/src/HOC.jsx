import { useState } from "react"; // useState is imported

// hoc that adds background color dynamically
const withBackground = (WrappedComponent, color) => (props) =>
  (
    <div
      style={{
        backgroundColor: color,
        padding: "20px",
        margin: "10px",
        width: "250px",
        textAlign: "center",
      }}
    >
      <WrappedComponent {...props} />
    </div>
  );

// main hoc component
const HOC = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column", // to stack them vertically
    }}
  >
    <HOCRed initialCount={0} incrementValue={1} />
    <HOCGreen initialCount={5} incrementValue={2} />
  </div>
);

export default HOC;

// reusable counter component
const Counter = ({ initialCount, incrementValue }) => {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + incrementValue)}>
        increment by {incrementValue}
      </button>
    </div>
  );
};

// hocs with different background colors
const HOCRed = withBackground(Counter, "red");
const HOCGreen = withBackground(Counter, "green");
