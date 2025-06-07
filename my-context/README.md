# my context

this example demonstrates how to use the react context api to pass data (in this case, a string) from a parent component (app) to a child component (child) without having to pass the data explicitly via props.

components involved:

1. MyContext:

   - created using createContext().
     - it will store and provide the value that can be accessed in any child component using useContext.

2. App:

   - the app component sets up the context provider (MyContext.Provider) with a value (name = "john") that will be passed down to the child component.
   - the context provider wraps the child component, making the value available to it.

3. child: the child component accesses the name value from MyContext using the useContext(MyContext) hook.

   - this value (name) is displayed inside an <h1> tag.

   key concepts:

   - context:
     - a way to share data across multiple components without passing it explicitly through props.
   - useContext:
     - a hook that allows components to access the value provided by the context.
   - context provider:
     - wraps components and provides a value that can be accessed by any component within the provider’s scope.

this example shows how to use useContext to simplify data access in react, making it easier to share state or data across components without "prop drilling."
