const Child = (props) => {
  const { handleIncrement, handleReset } = props;
  return (
    <>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
};
export default Child;
