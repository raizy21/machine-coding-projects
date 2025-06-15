# question: how do you pass data from a child component to a parent component?

answer:

- to pass data from a child component to a parent component, you can pass a function as a prop from the parent to the child.
- the child can then call this function, passing the data as an argument.
- example:

```code
  function Parent() {
    const handleData = (data) => {
      console.log(data);
    };

    return <Child onSendData={handleData} />;
    }
    function Child({ onSendData}) {
      return (
        <button onClick={() => onSendData("hello, parent!")}>send data</  button>
       );
    }
```

### when & why pass the data from a child to a parent component?

- when a child component handles an event or computes data that the parent needs to act on
- why to lift that information up so the parent (or other siblings) can update state, trigger side-effects, or re-render in response

- when you want to keep your source of truth in a common ancestor (lifting state up)
- why centralizing state management in the parent ensures consistency across multiple children and avoids duplicated or out-of-sync data

- when a form or controlled input lives in a child but the parent must collect or validate its value
- why parents often coordinate submission, validation, or aggregation of form data spanning several fields/components

- when you need to synchronize ui elements (e.g., opening a modal, updating a list) based on a child’s action
- why passing data upward lets the parent decide how to update its own state and re-render related components accordingly

- when you’re building reusable child components that report changes back to their container
- why parents supplying callback props make children generic and composable—children simply emit data, and parents determine what to do with it
