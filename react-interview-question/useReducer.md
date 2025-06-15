# question: what is the useReducer hook?

answer:

- the useReducer hook is a react hook that manages complex state logic in functional components.
- it is an alternative to useState, providing a way to manage state through a reducer function, which takes the current state and an action, and returns the new state.
- example:

```code
import {useReducer} from "react";
// initial state
const initialState = {count: 0};
// reducer function to manage state transitions
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {count: state.count + 1};
    case "decrement":
      return {count: state.count - 1};
    default:
      throw new Error("unknown action type");
    }
   }

   function Counter() {
    // useReducer hook with reducer and initial state
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <div>  <h1>count: {state.count}</h1>
        <button onClick={() => dispatch({ type: "increment" })}>increment</button>
        <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      </div>
      );
     }

   export default Counter;
```

- how it works:

  1. initialState:

     - the initial count is set to 0.

  2. reducer function:

  - handles the logic for incrementing and decrementing the count based on the action type (increment or decrement).

  3. useReducer hook:

     - it takes two arguments: the reducer function and initialState. it returns the current state (state) and a dispatch function, which is used to trigger state changes.

  4. buttons:

     - two buttons are provided for incrementing and decrementing the count by dispatching the respective actions (increment or decrement).

  what happens:

  - when you click the increment button, it dispatches an action of type 'increment', which causes the state to update by increasing the count.
  - when you click the decrement button, it dispatches an action of type 'decrement', which causes the state to update by decreasing the count.

  this is a basic example of using useReducer in React to handle complex state logic.

### when & why to use useReducer?

- when your state logic involves multiple sub-values or complex transitions
- why a reducer centralizes update logic in one pure function, making state changes predictable and easier to manage

- when the next state depends on the previous state
- why dispatching actions to a reducer ensures you always compute the new state from the latest snapshot, avoiding stale closures

- when you have many related state variables that change together
- why grouping them in a single reducer avoids interleaving multiple useState calls and keeps related logic in one place

- when you want to optimize re-renders by coalescing multiple state updates
- why dispatching a single action can batch changes in one render pass, rather than triggering separate renders for each setState

- when you need to share or reuse state management logic
- why you can extract your reducer (and init logic) into a custom hook or module, improving testability and reusability

- when you’re building complex forms, wizards, or elaborate workflows
- why the action-based pattern scales better than juggling numerous independent state variables with useState
