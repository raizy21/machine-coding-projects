# lifting state up

lifting state up is a concept in react where you move the state from a child component to the closest common parent component when multiple components need to share and access the same state.

this code demonstrates the concept of lifting state up in react by passing a state and a function from the parent component (app) to a child component (ToggleButton).

- App component: contains the state isToggled using useState to keep track of whether the button is on or off.

  - the toggle function is used to change the isToggled state by inverting its current value (i.e., toggling between true and false).
  - it passes both the isToggled state and the toggle function as props to the child component ToggleButton.

- ToggleButton component:

  - receives the isToggled state and toggle function from the parent (App).
  - displays a message depending on the isToggled state ("the button is on or the button is off).
  - the button text also changes based on the isToggled state ("turn on" or "turn off").
  - when the button is clicked, it calls the toggle function passed from the parent to switch the state.
  - by doing this, the ToggleButton component remains stateless and relies on the parent to manage its state.
