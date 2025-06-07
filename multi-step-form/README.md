# multi step form

this code implements a multi-step form using react, allowing users to input data across several steps.

1. MultiStepForm component:

   - manages the overall form state, including the current step (index) and the user data (formData).
   - the handleChange function updates the formData state when users input data.
   - the handleSubmit function processes form submission.
   - if the user is on the last step, it displays a success message; otherwise, it advances to the next step.

2. FormItem component:

   - displays the current form field based on the index and takes props to render the appropriate label, input type, and buttons.
   - the handleBackClick function allows users to navigate back to the previous step without submitting the form.

3. Data.js: contains configuration for the form fields, including labels, types, and button names, enabling dynamic rendering of each step based on user input.
