# pagination

here is a simple explanation of the code:

1. App component:

   - this is the main component that renders the Pagination component.

2. Pagination component:

   - state management: it stores the data from an api and keeps track of the current page. the number of rows displayed per page is fixed (10 rows).
   - api fetching: the component fetches user data from an api when it is first rendered.
   - pagination logic: the data is sliced to display only the relevant rows for the current page.
   - the component calculates how many pages are needed based on the total number of users.
   - navigation: users can navigate through pages using "previous" and "next" buttons or by clicking specific page numbers.
   - data display: it passes the data of the current page to another component for rendering.

3. Table component:

   - this component receives the current page’s user data from pagination and renders it in a table format.
   - it displays each user's id, name, email, and gender in table rows.

in summary, the code fetches user data, splits it into pages, and allows navigation between them while displaying the data in a table.
