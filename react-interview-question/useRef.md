# question: what is the useRef hook?

answer:

- the useRef hook is a react hook that returns a mutable object with a .current property.
- it is often used to hold a reference to a dom element or to persist a value across renders without causing re-renders.
- example:

```code
   const inputRef = useRef();
   const focusInput = () => {
    inputRef.current.focus();
    };
    return (
       <div>
        <input ref={inputRef} />
        <button onClick={focusInput}>focus input</button>
       </div>
      );
```

### when & why to useRef?

- when you need to imperatively access or manipulate a dom element
- why useRef gives you a persistent reference to a node (for focus, measurements, animations) without causing re-renders

- when you want to keep a mutable value around across renders without triggering an update
- why updating the .current property doesn’t re-render your component, making refs ideal for instance-like variables (timers, IDs, previous values)

- when you need to store the previous value of a prop or state for comparison or animation logic
- why you can write prevRef.current = currentValue inside an effect, then read prevRef.current on the next render

- when you’re integrating with third-party libraries or browser APIs that expect a stable container (e.g., WebSocket, chart instances)
- why refs maintain the same object identity across renders, letting you attach and clean up external resources reliably

- when you want to bypass React’s data flow for rare, imperative tasks
- why useRef lets you step outside purely declarative updates only when necessary, keeping most of your code reactive and clean.
