# question: how can we perform unmounting in a functional component?

answer: - in functional components, unmounting can be handled using the useEffect hook.

- you can return a cleanup function from useEffect, which will be executed when the component unmounts.
- example:

```code
    useEffect(() => {
      // setup code
       return () => {
        // cleanup code (runs on unmount)
        };
      }, []);
```

### when & why to use unmounting in a functional component?

- when you need to clean up resources or side effects when a component is removed from the ui
- why to prevent memory leaks, stale subscriptions, hanging timers, or lingering event listeners that could cause unexpected behavior or performance issues
