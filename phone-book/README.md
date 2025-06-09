# phone book

this code creates a simple phone book app where users can add, view, and delete contacts.
the contacts are stored in the browser's local storage, so they persist even after refreshing the page.

- local storage integration: the app uses useState to manage the list of contacts and useEffect to sync them with local storage. - when the app loads, it checks if there are any saved contacts in local storage and loads them.
- when the user adds or deletes a contact, the updated list is stored back in local storage.

  form input handling:

  - the handleInput function updates the form's state for each field (name, phone, and email) as the user types.
  - the form submission is handled by handleSubmit, which adds a new contact to the list and clears the form after submission.

  deleting contacts:

  - each contact in the list can be deleted using the "delete" button.
  - the handleDelete function filters out the selected contact from the list and updates the state.

  component separation:

  - the contact list is managed in a separate ContactTable component, which receives the contacts and delete functionality as props, making the code more modular.

this setup ensures a simple, user-friendly experience for managing contacts, with the benefit of persistent data through local storage.
