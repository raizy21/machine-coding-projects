# question: what is the useState hook?

answer:

- the useState hook is a react hook that allows you to add state to functional components.
- it returns an array containing the current state and a function to update it.
- example:

```code
  const [count, setCount] = useState(0);
  const increment = () => {  setCount(count + 1);  };
```

### when & why to use useState?

- when you need to add local, mutable state to a functional component
- why useState lets you hold values (strings, numbers, booleans, objects) across renders without converting to a class

- when the component has simple, independent pieces of state (counters, toggles, form inputs)
- why it provides a minimal api—just a value and a setter—making state logic clear and concise

- when you want to trigger a re-render in response to user actions or events
- why calling the setter function queues an update and tells react to refresh the ui with the new state

- when you’re replacing class-based state (this.state / this.setState) with hooks
- why useState offers the same capabilities in functions, enabling all components to be written as functions

- when you need to initialize state from props or compute an initial value once
- why useState accepts a lazy initializer function (useState(() => expensiveInit())), avoiding costly work on every render
