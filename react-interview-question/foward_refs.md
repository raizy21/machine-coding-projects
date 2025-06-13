# question: what is meant by forward refs?

answer:

- forward refs allow a component to forward a ref it receives to a child component, making it possible for parent components to access the child's dom node or instance.
- this is useful when creating higher-order components or custom components that need to expose their underlying dom elements.
- example:

```code
  import {forwardRef} from "react";

  const CustomInput = forwardRef((props, ref) =>
    <input ref={ref}{... props} />
    );

    function Parent() {
      const inputRef = useRef(null);
      const focusInput = () => {
        inputRef.current.focus();
      };
      return (
        <div>  <CustomInput ref={inputRef} type="text" />
        <button onClick={focusInput}>focus input</button>
        </div>
      );
   }
```

### when and why forward refs

- when you’re creating a wrapper or higher-order component that needs to expose its inner dom node to parent code
- why it lets the parent pass a ref through your component so it can directly interact with the child’s dom or instance

- when you need to compose components while preserving imperative access (e.g., focus, measurement)
- why forwardRef maintains the original ref binding without breaking the component abstraction

- when integrating with third-party libraries that require a ref to a specific dom element
- why it ensures the ref you pass from the parent reaches the actual element the library needs to operate on
