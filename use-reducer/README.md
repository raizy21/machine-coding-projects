# use reducer

this code demonstrates how to use the useReducer hook in react to manage state.

1. useReducer hook:

   - the useReducer hook is an alternative to useState for handling complex state logic.
   - it takes a reducer function and an initialState as arguments and returns the current state and a dispatch function.

2. reducer function:

   - the reducer function determines how the state changes based on the action it receives.
   - there are two actions:
     - "increment": adds 1 to the current state.
     - "decrement": subtracts 1 from the current state.

3. component explanation:

   - the component UseReducer initializes the state with initialState (set to 0) and handles state updates using the dispatch function.
   - it renders the current count and two buttons.
   - clicking the buttons triggers the respective actions ("increment" or "decrement"), which updates the count accordingly.
