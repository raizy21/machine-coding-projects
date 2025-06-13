# question: what are the disadvantages of props drilling and how can we avoid it?

answer:

- disadvantages of props drilling include:
- increased complexity and difficulty in managing components.
- reduced readability as components become cluttered with props that are not used.
- changes in data flow can lead to changes in multiple components, making refactoring more challenging.

- avoiding props drilling:

  - context api:

    - provides a way to share values between components without explicitly passing props through every level.
    - example using context api:

    ```code
    const MyContext = React.createContext();

    function Grandparent() {
      const data = "hello from grandparent";
      return (
        <MyContext.Provider value={data}>
        <Parent />  </MyContext.Provider>
        );
      }
      function Parent() {
        return <Child />;
        }
      function Child() {
        const data = React.useContext(MyContext);
         return <p>{data}</p>;// direct access to context value
      }
    ```

### disadvantages of props drilling include:

- increased complexity and difficulty in managing components
- reduced readability as components become cluttered with unused props
- changes in data flow require updates in multiple components
- potential performance issues due to unnecessary re-renders in intermediate layers
