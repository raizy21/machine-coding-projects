# question: what are refs in react?

answer:

- refs (references) provide a way to access dom nodes or react elements directly.
- they are useful for managing focus, selecting text, or triggering animations.
- refs can be created using React.createRef() or the useRef hook.
- example:

```code
  import {useRef} from "react";

  function TextInput() {
    const inputRef = useRef(null);
    const focusInput = () => {
      inputRef.current.focus();// Focus the input element
    };
    return (
        <div>
          <input ref={inputRef} type="text" />
          <button onClick={focusInput}>Focus Input</button>
        </div>
    );
  }
```

### when and why use refs

- when you need to imperatively manage focus, measure or modify a dom node;
- why it provides direct access to the underlying element for tasks that aren’t covered by declarative props and state

- when integrating with third-party libraries or apis that expect a real dom node;
- why refs let you hand over the actual element reference those libraries require

- when you need to store a mutable value that persists across renders without causing rerenders;
- why useRef gives you a stable container for such values

- when you want to trigger imperative animations, media playback, or manual dom methods;
- why refs let you call element methods (play, pause, focus, etc.) directly and reliably
