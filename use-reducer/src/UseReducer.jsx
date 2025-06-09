import { useReducer } from "react";

const UseReducer = () => {
  // initial state set to 0
  const initialState = 0;

  // reducer function to handle state changes based on action
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1; // increase state by 1
      case "decrement":
        return state - 1; // decrease state by 1
      default:
        return state; // return current state for unknown actions
    }
  };

  // useReducer hook to manage state with the reducer function
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>use reducer example</h1>
      {/* display the current count */}
      <h1>{count}</h1>
      <br />
      {/* dispatch 'increment' action on button click */}
      <button onClick={() => dispatch("increment")}>increment</button>
      {/* dispatch 'decrement' action on button click */}
      <button onClick={() => dispatch("decrement")}>decrement</button>
    </>
  );
};

export default UseReducer;
