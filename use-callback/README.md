# use callback

this code demonstrates the use of the useCallback hook in react to optimize function re-rendering.

1. UseCallback component:

   - the component manages a counter state using useState. It initializes the counter at 0.
   - two functions, handleIncrement (to increase the counter by 1) and handleReset (to reset the counter to 0), are wrapped with useCallback.
   - this ensures the functions are only recreated if the counter value changes, improving performance in child components.
   - the child component is passed these functions as props for use in its buttons.

2. Child component:

   - the child component receives handleIncrement and handleReset as props from the parent.
   - it renders two buttons: one to increment the counter and another to reset it, triggering the functions passed from the parent when clicked.
