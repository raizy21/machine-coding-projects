# question: what are the features of react?

answer:

key features of react include:

- component-based architecture:

  - encourages building ui as a collection of reusable components.
  - encapsulated, reusable ui pieces—either as function or class components—each managing its own markup, styles, and behavior.

  when & why to use:

  - when your ui can be broken into logical “chunks” (e.g. buttons, form fields, cards).
  - why you want clear separation of concerns, easier testing, and reusability across pages or even different projects.

- virtual dom:

  - provides efficient updates by minimizing direct dom manipulations.

  when & why to use:

  - when your ui has frequent updates (e.g. live data feeds, animations).
  - why it avoids expensive full-dom writes, giving you high performance without hand-optimizing each change.

- unidirectional data flow:

  - simplifies data management and debugging.

  when & why to use:

  - when you need predictability: you always know where a piece of data originated.
  - why it makes debugging easier (no hidden two-way bindings) and fosters clear ownership of state.

- hooks:

  - functions like useState, useEffect, and custom hooks enable state and lifecycle management in functional components.

  when & why to use:

  - useState: for managing local component state instead of classes.
  - useEffect: for side-effects (data fetching, subscriptions) tied to render.
  - useMemo: for memoizing expensive computations.
  - why hooks simplify component logic, eliminate boilerplate classes, and let you share logic via custom hooks.

- jsx syntax:

  - allows writing html-like code within javascript, making the ui structure easier to visualize.

  when & why to use:

  - when you prefer a declarative, template-style syntax rather than manual dom manipulation.
  - why it makes your render logic more readable and keeps markup close to the code that drives it.
