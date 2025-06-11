# question: what is jsx?

answer:

- jsx (javascript xml) is a syntax extension for javaScript that looks similar to html.
- it allows you to write markup directly in your javascript code.
- jsx compiles to React.createElement calls, which return plain javascript objects representing dom elements.
- example:

  ```code
    const element = <h1>Hello, World!</h1>;
  ```

  - this jsx is equivalent to:

  ```code
  const element = React.createElement("h1", null, "Hello, World!");

  ```

### when & why to use react

- building react components with dynamic content

  - keeps markup close to the logic that drives it, improving readability and maintainability.

- embedding javascript expressions in ui elements

  - enables inline loops, conditionals, and variable interpolation without switching between files or templates.

- needing compile-time checks and linting

  - modern toolchains can enforce type checks (with typescript) and catch errors early (missing closing tags, etc.).

- collaborating in teams on ui code

  - teams familiar with html find jsx intuitive; code reviews surface markup and logic in the same diff.

- preventing manual dom manipulation
  - react’s diffing algorithm works with the virtual dom generated from jsx, eliminating error-prone document.\* calls.
