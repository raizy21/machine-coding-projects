import { useState, useRef, useEffect } from "react"; // useState for state management, useRef for mutable references, and useEffect for side effects in functional components

const Throttling = () => {
  const [inputValue, setInputValue] = useState(""); // store the input value
  const [throttledValue, setThrottledValue] = useState(""); // store the throttled output
  const [inputUpdates, setInputUpdates] = useState([]); // store real-time input updates
  const lastExecutionTime = useRef(0); // store last execution time

  // throttle function that only processes input every 1 second
  const handleThrottledInput = (value) => {
    const now = new Date().getTime();
    if (now - lastExecutionTime.current > 1000) {
      // if more than 1 second has passed, update the throttled value
      setThrottledValue(value);
      lastExecutionTime.current = now;
    }
  };

  // useEffect to monitor changes in inputValue and throttle input processing
  useEffect(() => {
    handleThrottledInput(inputValue);
  }, [inputValue]); // only runs when inputValue changes

  // handle input change and track real-time updates
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value); // update the input value
    setInputUpdates((prevUpdates) => [...prevUpdates, value]); // track real-time updates
  };

  return (
    <div className="throttle-input-container">
      <h1>throttled input example</h1>

      {/* input field */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="type something (throttled to 1 update per second)"
        className="throttle-input"
      />

      {/* real-time input updates */}
      <h3>real-time input updates:</h3>
      <div className="real-time-updates">
        {inputUpdates.map((update, index) => (
          <span key={index} className="real-time-item">
            {update}
          </span>
        ))}
      </div>

      {/* display throttled output */}
      <h3>throttled output:</h3>
      <p>{throttledValue}</p>
    </div>
  );
};

export default Throttling;
