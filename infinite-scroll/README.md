# infinite scroll

this code demonstrates how to implement infinite scrolling in react:

1. InfiniteScroll component:

- uses useState to manage data, page, and loading state. fetches 12 posts at a time from an api (jsonplaceholder). on page scroll, it detects when the user reaches the bottom and loads more posts by incrementing the page number.

- useEffect handles the api calls and attaches an event listener for scrolling, which triggers data loading when needed.

2. CardComponent:

- accepts the data array as a prop and maps over it to render individual cards using the CardItem component.

3. CardItem:

- displays the details of each post, including the id, title, and body.

- this approach keeps the page lightweight by fetching more data only when required, enhancing performance and user experience with infinite scrolling.
