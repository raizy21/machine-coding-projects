import { useState } from "react";
import ToggleButton from "./ToggleButton.jsx";

export default function App() {
  // state to keep track of the toggle status
  const [isToggled, setIsToggled] = useState(false);

  // function to toggle the state
  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <div className="toggle-container">
        <h1>lifting state up</h1>
        {/* pass the state and toggle function to the ToggleButton component */}
        <ToggleButton isToggled={isToggled} toggle={toggle} />
      </div>
    </>
  );
}
