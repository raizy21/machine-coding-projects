# error boundaries

1. ErrorBoundaries component:

   - this component is designed to catch and handle any errors that occur in its child components.
   - it uses react’s getDerivedStateFromError() lifecycle method to update the state when an error is detected.
   - if an error is caught, the hasError state is set to true, and a fallback ui is shown instead of the children.
   - the componentDidCatch() method is used to log error details, which could be sent to an error reporting service.
   - when an error occurs, it renders a fallback ui with a message, and provides a button to reload the page.

2. Counter component:

   - this component maintains a counter using the useState() hook.
   - the incrementCount() function increments the count state each time the button is clicked.
   - if the count goes above 5, an error is thrown.
   - this error will be caught by the ErrorBoundaries component.

3. App component:

   - the App component wraps the Counter component inside the ErrorBoundaries component.
   - if an error occurs in the Counter component (i.e., when the count exceeds 5), the ErrorBoundaries will catch the error and display the fallback ui instead of the Counter.

in the summary: the ErrorBoundaries component handles errors that happen in its child components and shows a fallback ui when an error is caught. the Counter component throws an error when the count exceeds 5, triggering the fallback ui from ErrorBoundaries.
