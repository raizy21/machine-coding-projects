# question: what is state in react?

answer:

- state is a built-in object that allows components to manage their own data and respond to user inputs.
- when the state changes, react re-renders the component, reflecting the updated data in the ui.
- state can be initialized in the constructor or using the useState hook in functional components.
- example using useState:

```code
import  {useState} from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
     <div>
       <p>you clicked {count} times</p>
       <button onClick={() => setCount(count + 1)}>click me</button>
     </div>
    );
    }


```

- in this example, clicking the button updates the count state, triggering a re-render.
