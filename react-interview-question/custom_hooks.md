# question: what are custom hooks in react?

answer:

- custom hooks are functions that allow you to encapsulate reusable logic in a way that follows the rules of hooks.
- they enable you to share stateful logic between components without altering the component hierarchy. - - example:

  - you can also use custom hooks to fetch data, keeping data fetching logic out of your components:

  ```code
  import {useState, useEffect} from "react";

  function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
        }, [url]);
        return {data, loading};
     }
  ```

  - now, any component can use this hook to fetch data:

  ```code
  function DataComponent() {
    const {data, loading} = useFetch("https://api.example.com/data");
      if (loading) return <p>loading...</p>;
      return <div>{JSON.stringify(data)}</div>;
  }
  ```

  conclusion:

  - custom hooks are powerful because they allow you to encapsulate logic and reuse it across components while keeping the codebase clean and maintainable.
  - they follow react’s hook rules and are used to solve common problems like state management, side effects, or handling reusable logic efficiently.

### when and why use custom hooks

- when you have stateful or side-effect logic that’s used in multiple components
- why to abstract and reuse that logic, reducing duplication and keeping components focused on ui

- when you need to encapsulate data fetching, subscriptions, or timers
- why custom hooks centralize setup and cleanup in one place, making code easier to maintain

- when you’re handling complex form state or input validation
- why to provide a clean, declarative api for forms without cluttering component code

- when integrating with browser apis or third-party libraries (e.g., websockets, localstorage)
- why to isolate imperative logic and ensure proper cleanup across components

- when you want to improve testability of your logic
- why custom hooks can be tested independently of any ui, leading to simpler and faster tests
