const FormItem = (props) => {
  const {
    label,
    type,
    name,
    button1,
    button2,
    index,
    setIndex,
    handleChange,
    handleSubmit,
  } = props;

  //handleBackClick is called when the back button is clicked
  const handleBackClick = (e) => {
    e.preventDefault(); // prevent form submission on "Back"
    setIndex(index - 1); // decrement the index to go back to the previous step
  };

  return (
    <>
      <div className="multi-step">
        {/* back button */}
        {button1 !== "" && (
          <button onClick={handleBackClick} className="back-button">
            {button1}
          </button>
        )}

        {/* input field */}
        <label>{label}</label>
        <input name={name} type={type} onChange={handleChange} required />

        {/* next/submit button */}
        <button type="submit" className="next-button">
          {button2}
        </button>
      </div>
    </>
  );
};

export default FormItem;
