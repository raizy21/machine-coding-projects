# hoc

a higher-order component (hoc) in react is a design pattern used to enhance or modify the behavior of existing components.
it is a function that takes a component as an argument and returns a new component with additional props or behavior.

key characteristics of hoc:

1. functionality enhancement:

   - hoc allow you to add common functionality or logic to multiple components without duplicating code.
   - this can include features like authentication, data fetching, or styling.

2. reusability:

   - by encapsulating shared logic in a hoc, you can easily reuse it across different components, promoting code reusability.

3. composition:

   - hoc promote a composition model, where you can combine multiple hocs to enhance a component with multiple behaviors.
   - this code demonstrates how higher-order components (hocs) work in react by applying dynamic background colors to a simple counter component.

key points: 1. withBackground hoc: - a function that takes a counter component and a color as inputs and returns a new component wrapped in a div with a background color and styling.

2. counter component:

   - a simple counter that displays a number and increments it by a given incrementValue.
   - the initialCount and incrementValue are passed as props.

3. hoc red and hoc green:

   - these are two versions of counter, each with different background colors—red and green—using the withBackground hoc.

4. hoc component:

   - it renders both hoc red and hoc green in the center, stacked vertically.

5. app component:
   - displays the title and renders the hoc component with the two counters. this keeps the code modular and reusable.
