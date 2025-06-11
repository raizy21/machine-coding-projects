# question: what is the component lifecycle in a react class component?

answer:

- a react class component goes through several lifecycle phases:

  - mounting: the component is being created and inserted into the dom. key lifecycle methods include:

    - constructor(): initializes state and binds methods.
    - render(): describes the ui.
    - componentDidMount(): invoked after the component is mounted; ideal for data fetching.

  - updating: the component is being re-rendered due to changes in state or props. key methods include:
    - componentDidUpdate(prevProps, prevState): invoked after updates occur.
    - shouldComponentUpdate(nextProps, nextState): determines whether to re-render.
  - unmounting: the component is being removed from the dom.
    - componentWillUnmount(): clean up any resources before unmounting.
  - example:

  ```code
    class MyComponent extends React.Component {
      componentDidMount() {
        console.log("component mounted");
      }

      componentDidUpdate(prevProps, prevState) {
        console.log("component updated");
       }

       componentWillUnmount() {
        console.log("component unmounted");
       }

       render() {
          return <div>Hello!</div>;
       }
    }
  ```

### when & why to use the component lifecycle in a react class component?

- constructor(props)

  - when: at instantiation, before mounting
  - why: initialize internal state, bind event handlers

- render()

  - when: on mount and update
  - why: return the react element tree based on current props and state; must be pure and side-effect free

- by using these lifecycle hooks appropriately, you can manage state initialization, optimize renders, handle side effects, and ensure proper cleanup in react class components.
