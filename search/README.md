# search

this code demonstrates how to create a simple search filter in react using the useState and useEffect hooks.

1.  state variables:

    - list: holds the complete list of data (users) fetched from an api.
    - filteredList: stores the list after being filtered based on the search input.
    - search: tracks the user's input for the search.

2.  fetching data:

    - the loadData function is an asynchronous function that fetches data from an external api (https://replit.com/@chiperraizy21/search-api) using the fetch method.
    - ut retrieves a list of users and sets both list and filteredList to the fetched data initially, so that the full list is displayed when the component mounts.

3.  handling search input:

    - the handleSearch function updates the search state whenever the user types in the search field.
    - if the search field is empty, it resets filteredList to the full list.
    - if there is a search term, the list is filtered by matching the user’s first name with the search term (case-insensitive), using the filter method.

4.  rendering the filtered list:
    - the component renders an input field where users can type their search query.
    - below the input field, an unordered list (<ul>) is displayed, showing the filtered names.
    - if no matching data is found, it displays a "no data found" message.

how the code orks: when the component mounts, it fetches the data and displays all users. as the user types in the search field, the list updates to show only users whose first name matches the input. this is a straightforward example of how to implement dynamic search functionality in a react app.
