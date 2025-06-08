# faq

this faq system consists of two main parts:

- the faq component and the FAQItem component.

  1. FAQ component:

  - the FAQ component is responsible for displaying a list of frequently asked questions.
  - it retrieves the data for the questions and answers from a separate file and loops through the data to create individual faq items.
  - each faq item is rendered by the FAQItem component and passed the question, answer, and index to ensure each item is unique. 2. FAQItem Component:
  - the FAQItem component represents a single FAQ entry. It controls the visibility of the answer using a state.
  - by default, the first FAQ answer is shown, and the others remain hidden.
  - the user can click a button to expand or collapse the answer for each question.

this component ensures that only one faq answer is expanded at a time, making the faq section easy to navigate.

- this approach keeps the faq section modular, easy to update, and ensures each question can be toggled individually.
