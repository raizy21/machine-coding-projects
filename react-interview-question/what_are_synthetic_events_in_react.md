# question: what are synthetic events in react?

answer:

- in react, synthetic events are objects that act as wrappers around the browser’s native events.
- these synthetic events make sure that events work the same way across all browsers, providing consistent behavior.
- react uses synthetic events to ensure compatibility and performance across different browsers.
- under the hood, react’s synthetic events are based on the native dom events, but they are optimized and normalized to remove browser inconsistencies.
- key points:

  1. cross-browser compatibility:

  - react’s synthetic events handle browser differences, so you don’t have to worry about how different browsers behave with certain events.

  2. performance optimization:

  - react reuses the same event object for multiple events to improve performance.

- example: onClick event
- let’s say we have a button that handles a click event. here’s an example in react using a synthetic onClick event:

  ````code
   import React from "react";

   function ClickExample() {
    const handleClick = (e) => {
      console.log("synthetic event:", e);
      console.log("button clicked!");
     };
     return <button onClick={handleClick}>click me!</button>;
     }
    export default ClickExample;
    ```

  - how is this different from regular javascript events?
    - in traditional javascript, we would add an event listener like this:
    ```code
     <button id="myButton">Click Me!</button>
     <script>
      document.getElementById('myButton').addEventListener('click', function(event) {
          console.log('native event:', event);
          console.log('button clicked!');
        });

      </script>
  ````

  - differences between synthetic events and native js events:

    1. browser compatibility:

    - synthetic events work the same across all browsers.
    - native events might behave differently in older browsers (e.g., internet explorer).

    2. event object reuse:

    - in react, the synthetic event object is reused for performance reasons, which means you can’t access the event object asynchronously (after the event handler has run).
    - if you need to access it later, you must call e.persist().
    - in contrast, native js events remain available after the event handler has executed, but they don’t offer react’s performance optimizations.
    - example of event reuse:

      ```code
        const handleClick = (e) => {
           e.persist();// allows you to access the event object later

           setTimeout(() => {
              console.log("delayed synthetic event:", e);
           }, 1000);
          };
      ```

    In short, synthetic events in React make handling events easier and more consistent across different browsers, while also boosting performance by reusing event objects. Q-11. What is the difference between package.json and packagelock.json?

### when & why to use syntactic events

- when you’re building declarative ui components with jsx
- why using synthetic events keeps your code declarative and integrates seamlessly with react’s reconciliation—react can batch and defer event handling for better responsiveness.

- when you want to rely on react’s event delegation
- why react attaches a single listener at the root, capturing all events and dispatching them in its virtual dom system—this reduces the number of native event listeners and improves memory use.
