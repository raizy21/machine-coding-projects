const ToggleButton = (props) => {
  const { isToggled, toggle } = props;
  return (
    <>
      <p>{isToggled ? "the button is on" : "the button is off"}</p>
      <button onClick={toggle}>{isToggled ? "turn off" : "turn on"}</button>
    </>
  );
};
export default ToggleButton;
