# question: what are the differences between controlled and uncontrolled components?

answer:

- controlled components:

  - the component's value is controlled by react state.
  - every change updates the state, making it easy to manage form data.
  - example:

  ```code
  function ControlledInput() {
    const [value, setValue] = useState("");
    return (
       <input  type="text"  value={value}  onChange={(e) => setValue(e.target.value)}  />
    );
  }
  ```

  - uncontrolled components:
    - the component manages its own state.
    - you can access the value using a ref, but it is not managed by react.
    - example:
    ```code
     function UncontrolledInput() {
      const inputRef = useRef();
      const handleSubmit = () => {
        alert(inputRef.current.value);
      };
      return (
        <div>
          <input type="text" ref={inputRef} />
          <button onClick={handleSubmit}>submit</button>
        </div>
      );
    }
    ```

### when and why controlled and uncontrolled components

- when and why to use controlled components:

  - when you need real-time validation or want to enforce input formats (e.g. disable submit until input is valid)
  - why state updates on every change give you direct control over the value and let you hook into each update for validation or formatting

  - when you want to keep form state in sync with other ui state or submit it as part of a larger react state object
  - why having all values in react state makes it easy to serialize, reset, or populate fields programmatically

  - when you’re using form libraries (formik, react-hook-form in controlled mode) that rely on controlled inputs
  - why these libraries expect value and onChange props to manage registration, validation, and error display

- when and why to use uncontrolled components:

  - when you have simple, one-off forms where you only need the final value on submit (e.g. a quick search box)
  - why refs let you grab the value at submit time without wiring up onChange handlers for every keystroke

  - when performance matters and you want to avoid frequent state updates for large numbers of inputs
  - why uncontrolled inputs don’t cause react renders on each keypress, reducing overhead in very dynamic forms
