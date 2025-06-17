# question: what is the useContext hook?

answer:

- the useContext hook allows you to access the value of a context directly in a functional component.
- it simplifies the process of subscribing to context changes without needing to use a Context.Consumer.
- example:

```code
  const value = useContext(MyContext);
```

### when & why to useContext?

- when you need to read context values inside a functional component
- why useContext lets you subscribe to a context directly, without wrapping your jsx in a <Context.Consumer> block

- when you’re avoiding prop drilling for widely used data (theme, locale, auth)
- why context providers supply values at a high level and useContext lets any descendant read them, keeping intermediate components clean

- when you want automatic updates when context changes
- why a component that calls useContext will re-render whenever the provided value changes, ensuring your ui stays in sync
