# question: what are pure components in react?

answer:

- pure components are components that only re-render when their props or state change.
- they implement a shallow comparison of props and state to determine if a rerender is necessary.
- pure components help optimize performance by preventing unnecessary renders.
- example:

```code
import {PureComponent} from "react";

class MyComponent extends PureComponent {
  render() {
    return <p>{this.props.text}</p>;
  }
}
```

- in this example, MyComponent will only re-render if text changes.

### when and why use pure components

- when to use pure components:

  - when your component’s render output is solely determined by its props and state and you want to optimize performance
  - when props and state are simple or treated as immutable so that shallow comparison will correctly detect changes
  - when the component is rendered frequently due to parent state updates and you want to avoid unnecessary rerenders

- why use pure components:
  - to prevent unnecessary renders and reduce cpu work
  - to improve responsiveness in complex uis or large component trees
