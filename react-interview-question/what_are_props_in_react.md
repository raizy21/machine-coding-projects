# question: what are props in react?

answer:

- props (short for "properties") are used to pass data from a parent component to a child component in react.
- they are immutable, meaning that a child component cannot modify its props.
- props make components dynamic and reusable, allowing them to receive different data each time they are rendered.

- example:

```code
  function Greeting({ name}) {
      return <h1>hello, {name}!</h1>;
    }

    // usage
    <Greeting name="andrei" />;
```

### when & why to use props

- when you need to pass data or callbacks down the component tree
- why props enable parent components to supply values (strings, numbers, objects, functions) that child components can use to render dynamic content or trigger actions in the parent.

- when you want to make a component reusable and configurable
- why by accepting props, a component can render different content or behave differently depending on the values it receives, without changing its internal code.

- when you need one-way data flow for easier debugging
- why props enforce a clear, top-down data path: changes originate in parents and flow down, making it simpler to trace where data comes from and why the ui updated.

- when you want to separate concerns between components
- why passing only what’s needed via props keeps components focused on presentation, while higher-level components handle data fetching, state management, and business logic.
