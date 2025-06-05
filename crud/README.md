# crud

in this application, users can manage student data by performing four main operations: create, read, update, and delet(crud). this functionality is built using react, a popular javascript library for building user interfaces, and axios, a tool for making http requests.

## key features:

1. create new student:

- users can fill out a form to add a new student, providing details like the student's name, class, roll number, and age.
- after submitting the form, the new student is added to the list, and a success message is displayed using a notification system (toastify).

2. read student data:

- when the page loads, the application fetches the list of students from an api (a mock api in this case) and displays it in a table. each student has their own row in the table, showing their roll number, name, class, and age.

3. update student details:

- each student entry has an 'edit' button, which allows users to update the student's information. once a student is selected for editing, the form is pre-filled with their details, allowing the user to make changes and save the updated data.

4. delete student:

- each student entry also has a 'delete' button, which removes that student from the list. after the student is deleted, the list updates automatically, and a success notification confirms the deletion.

### how it works:

    state management: the application uses eeact's useState hook to store the list of  students and keep track of which student is being edited.

    api requests: axios is used to make api requests to fetch, add, update, or delete  students from the server.

    form handling: the form is used to either create a new student or update an existing  one.
      - the form is cleared after submission to allow for new entries.

    notifications:  the application uses a library called toastify to show messages to the user whenever  an action (like adding, updating, or deleting a student) is successful or if there is an  error.

### conclusion:

this crud application provides an interactive and user-friendly way to manage student data, demonstrating how to use react with axios for making api requests and handling forms efficiently. it’s a great example of how front-end applications can handle real-time data manipulation.
