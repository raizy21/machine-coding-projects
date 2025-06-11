# question: what is useMemo?

answer:

- useMemo is a hook in react that helps you optimize performance by memoizing the result of a calculation or a function so that it is only recomputed when its dependencies change.
- this is useful when you have expensive calculations or functions that don’t need to run on every render but only when necessary.

  syntax:

  ```code
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a,  b]);
  ```

  computeExpensiveValue:

  - a function whose return value you want to cache (memoize).
  - dependency array [a, b]:
    - the values that useMemo watches.
    - if any of these values change, react will recompute the memoized value.

why sse useMemo?

1. performance optimization:

   - it prevents expensive calculations from being re-run on every render.

2. avoid recalculation:

   - it ensures that the result is only recalculated if dependencies change.
   - you should only use useMemo when you have computationally expensive operations (e.g., sorting, filtering large arrays, or performing complex calculations).
   - example:

     - using useMemo to optimize a calculation

     ```code
     import React, {useState, useMemo} from "react";

     function ExpensiveCalculationComponent() {
       const [count, setCount] = useState(0);
       const [number, setNumber] = useState(10); // expensive calculation

       function const expensiveCalculation = (num) => {
         console.log("calculating..."); return num \* 2;// simulating an expensive operation
       }; // useMemo to memoize the result of the expensive calculation

       const memoizedValue = useMemo(() =>
         expensiveCalculation(number), [number]);
         return (
           <div>
             <h1>memoized value: {memoizedValue}</h1>
             <button onClick={() => setCount(count + 1)}>increment count</button>
             <button onClick={() => setNumber(number + 1)}>change number</button>
            </div> );
            }
       export default ExpensiveCalculationComponent;
     ```

   explanation:

   - without useMemo:
     - the expensiveCalculation function would run on every render, even if the count changes, which doesn’t affect the calculation result.
   - with useMemo:
     - the calculation is only re-run when number changes.
     - the useMemo hook caches the result, avoiding unnecessary recalculations when only count changes.
   - key differences from regular calculation:

     - without useMemo: react re-runs the expensive calculation on every render.
     - with useMemo: react only re-runs the calculation when dependencies change, improving performance by avoiding unnecessary work.

     - when to use useMemo:
       - when you have expensive computations (like sorting, filtering, or intensive data processing).
       - when you want to optimize re-rendering by ensuring that a calculation is only redone when its inputs change.

   conclusion:

   - useMemo is a powerful tool for performance optimization in react.
   - it prevents unnecessary recomputation of expensive operations, making your application more efficient by recalculating values only when required.

### when & why to use useMemo?

- expensive computations

  - if you have a cpu-intensive calculation (e.g. filtering/sorting large lists, complex mathematical ops), wrapping it in useMemo prevents redoing the work on every render when dependencies haven’t changed.

- referential equality

  - when you pass objects, arrays, or functions down as props, react’s shallow comparison will see them as “new” on every render unless you memoize them. using useMemo (or useCallback) stabilizes those references to avoid unnecessary child renders or effect re-runs.

- note: over-using useMemo can add complexity; only memoize things that actually cause performance bottlenecks.
