# question: what is props drilling?

answer:

- props drilling refers to the process of passing data through multiple levels of components that do not need the data, just to get it to a deeply nested component.
- this can lead to code that is hard to maintain and understand.

- example:

```code
    function Grandparent() {
      const data = "hello from grandparent";
       return <Parent data={data} />;
       }

    function Parent({ data}) {
      return <Child data={data} />;

    }

    function Child({ data}) {
      return <p>{data}</p>;// data is drilled through parent
    }
```

- to avoid props drilling, you can use context api or state management libraries like redux.

### when & why to avoid props drilling

- when you find yourself passing props through components that don’t use them, just to reach a deeply nested child
- why it clutters intermediate components, makes their apis confusing, and increases maintenance overhead

- when your component hierarchy grows or changes frequently
- why updating prop chains in many places is error-prone and slows refactors

- when performance suffers due to re-renders in intermediate components
- why props changes cause every level in the chain to re-render, even if they don’t use the data
