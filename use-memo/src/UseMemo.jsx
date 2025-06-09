import { useState, useMemo } from "react"; // importing useState and useMemo hooks from React

const UseMemo = () => {
  const [inputVal, setInputVal] = useState(0); // state for input value, initialized to 0
  const [textVal, setTextVal] = useState(""); // state for text value, initialized to an empty string

  // memoize the factorial calculation
  const factorial = useMemo(() => {
    console.log("calculating factorial");
    let input = parseInt(inputVal); // convert input to integer
    if (input === 0 || input === 1) {
      return 1;
    }
    let result = 1;
    for (let i = 2; i <= input; i++) {
      result *= i;
    }
    return result;
  }, [inputVal]); // dependency array ensures it updates when inputVal changes

  return (
    <>
      <div>
        <h1>useMemo example</h1>
        <label>factorial:</label>
        <input
          type="number"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="enter a Number"
        />

        <h1>factorial value is: {factorial}</h1>
        <br />
        <label>text:</label>
        <input
          type="text"
          value={textVal}
          onChange={(e) => setTextVal(e.target.value)}
          placeholder="enter random text"
        />
      </div>
    </>
  );
};
export default UseMemo;
