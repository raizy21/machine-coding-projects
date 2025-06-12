# question: what are the differences between state and props in react?

answer:

- state:
- managed within the component (local). - can change over time, triggering re-renders.
- initialized in the component (e.g., using useState).
- props:
- passed from parent to child components (external). - immutable in the child component. - used to configure a component's behavior or appearance.

example:

```code
function Parent() {
  const [count, setCount] = useState(0);
  return <Child count={count} />;
  }

function Child({ count}) {
   return <p>count: {count}</p>; // `count` is a prop

}
```
