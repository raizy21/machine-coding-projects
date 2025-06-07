import { useState } from "react"; // useState is imported to manage state in the component

import FormItem from "./FormItem.jsx"; // FormItem is imported to render each step of the form
import Data from "./Data.js"; // Data is imported to provide the form structure and content

const MultiStepForm = () => {
  const [index, setIndex] = useState(0); // index is used to track the current step in the form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
  }); // formData is used to store the values entered in the form fields

  // handleChange updates the formData state when an input field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handleSubmit processes the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (index === Data.length - 1) {
      alert("Form submitted successfully!");
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <>
      <h1>multi step form</h1>

      <form onSubmit={handleSubmit}>
        <FormItem
          label={Data[index].label}
          name={Data[index].id}
          type={Data[index].type}
          value={formData[Data[index].id]}
          button1={Data[index].button1} // pass button1 for the back button
          button2={Data[index].button2} // pass button2 for the next/submit button
          index={index} // pass index
          setIndex={setIndex} // pass setIndex for back button functionality
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </form>
    </>
  );
};

export default MultiStepForm;
