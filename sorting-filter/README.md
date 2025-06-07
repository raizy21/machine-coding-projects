# sorting filter

this system consists of several components that work together to display, filter, and sort a list of products fetched from an api.

1. app component:

- the app component serves as the entry point of the application, which renders the Products component.

2. products component:

- this is the main component that handles fetching product data from the api, filtering by category, and sorting by price or rating.
- it maintains state for:
  - productList: the full list of products from the api.
    = filteredList: the list of products after applying filters or sorting.
    - selectedCategory: the currently selected category filter.
    - sortBy: the criteria for sorting products (e.g., by price or rating).
  - it fetches the product data when the component is mounted and allows the user to filter by category or sort by price/rating.

3. CategoryFilter component:

- this component provides a dropdown menu for filtering products by category.
- when the user selects a category, the product list is filtered to show only products in that category, or all products if "all" is selected.

4. SortDropdown component:

- this component offers sorting options such as sorting by price (low to high) or by rating (high to low).
- the filtered list of products is sorted based on the selected criteria.

5. ProductList component:

- this component renders the list of filtered and sorted products.
- it maps over the filteredList and creates individual product cards for each product.

6. ProductCard component:

- each product is displayed using the ProductCard component, which shows the product image, title, price, rating, category, and description.
- this setup makes it easy to display, filter, and sort a list of products fetched from an api, creating a dynamic and interactive user experience.
