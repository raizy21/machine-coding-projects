# question: what is useCallback?

answer:

- useCallback is a react hook that memoizes a function to prevent it from being recreated on every render.- it helps optimize the performance of your component, especially when passing functions as props to child components.
- in simpler terms, useCallback returns a memoized version of the callback function that only changes if one of the dependencies changes.
- this is useful when the function gets passed down to child components, preventing unnecessary re-renders.
- syntax of useCallback const memoizedCallback = useCallback(() => { // Function logic }, [dependencies]);
- callback function:

  - the function that you want to memoize.
  - dependencies:

    - an array of values that the function depends on.
    - if any value in this array changes, the function is re-created.
    - when to use useCallback?
      - passing a function as a prop:
      - when you pass a function as a prop to a child component, the child may unnecessarily re-render if the parent re-renders.
      - useCallback prevents this by ensuring the function reference remains the same unless necessary
    - performance optimization:
      - if your app has expensive operations or frequent rerenders, memoizing a function with useCallback can help reduce unnecessary computations.
    - example:

      - using useCallback with onClick here’s an example of how useCallback can be used:

      ```code
      import {useCallback, useState} from "react";

       function Button({ onClick}) {
        console.log("button rendered");

        return <button onClick={onClick}>click me</button>;
       }

       function App() {
        const [count, setCount] = useState(0);
        const handleClick = useCallback(() => {
          setCount((prevCount) => prevCount + 1);
        }, []);

        return (
          <div>
            <p>count: {count}</p>
            <Button onClick={handleClick} />
          </div> ); }

        export default App;
      ```

      - how useCallback works in this example:
        - without useCallback:
          - every time App re-renders (e.g., when the count changes), the handleClick function would be re-created.
          - this could cause the Button component to rerender unnecessarily, even if its props didn’t change.
        - with useCallback:
          - the handleClick function is memoized and will only be re-created if any of the dependencies (in this case, none) change.
          - this prevents Button from rerendering unnecessarily.
          - difference from useMemo: useCallback: Used to memoize functions.
            - useMemo:
              - used to memoize the result of an expensive calculation.

    - in summary, useCallback is an essential tool for optimizing performance in react, especially when you pass functions to child components or perform operations that could trigger unnecessary re-renders.

### when and why useCallback

- when passing callbacks to child components
- why to prevent unnecessary re-renders of pure or memoized children that compare prop references

- when using functions in dependency arrays (e.g., in useEffect or other hooks)
- why to avoid triggering effects on every render due to a newly created function reference

- when the function creation itself is expensive
- why to skip recreating complex callback logic on each render and save cpu cycles

- when you need stable function identity (for event handlers, subscriptions, or external integrations)
- why to ensure registrations or cleanup handlers see the same callback instance
