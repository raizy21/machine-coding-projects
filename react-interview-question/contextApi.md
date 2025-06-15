# question: what is the context api in react?

answer:

- the context api is a react feature that allows you to share state across the component tree without passing props manually at every level.
- it is useful for managing global state, theming, or user authentication.
- example:

```code
  const MyContext = React.createContext();

  function App() {
    return (
      <MyContext.Provider value={{ name: "andrei" }}>
        <ChildComponent />
      </MyContext.Provider>
      );
    }
    function ChildComponent() {
      const context = useContext(MyContext);
      return <div>{context.name}</div>;
    }
```

### when & why to use context api?

- when you have data or settings (theme, locale, auth, feature flags) that many components at different nesting levels need
- why to avoid passing the same props through every intermediary component and keep a single source of truth

- when you want to manage global state for things like user sessions or app-wide preferences
- why context lets you update and consume that state anywhere without prop drilling or external libraries

- when you’re building a design system or ui kit that needs to inject styling or behavior into arbitrary children
- why providers can supply config or callbacks once at the top level and let any component opt in via useContext

- when you need to share stateful logic across components without elevating state to a common parent
- why custom context hooks encapsulate logic and make consumers simpler and more focused on rendering

- when you want predictable re-renders around shared data
- why context isolates updates to only consumers of that context, reducing unnecessary prop-based updates in unrelated branches
