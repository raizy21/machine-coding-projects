# lazy

this code demonstrates how to implement lazy loading in react to load components and images only when needed, optimizing performance.

1. lazy loading images:

   - the LazyLoad component fetches 50 random images from the "lorem picsum" api when the component first mounts (using useEffect).
   - while the images are being fetched, it displays a "loading images..." message.
   - once the images are loaded, they are displayed using the map() function, and each image is shown in a lazy-loaded manner.

2. lazy loading components:

   - the lazy component is loaded dynamically using react's lazy() function, which only loads the component when needed (when it’s rendered for the first time).
   - the suspense component wraps the lazy-loaded component and provides a fallback ui ("loading data...") while waiting for the component to load.

3. component flow:

   - the app component uses suspense to handle loading of the lazy load component, displaying the fallback while waiting for the component to load.
   - once the lazy load component is loaded, it fetches and displays images from the api.

in summary, this code showcases how lazy loading can improve performance by deferring the loading of components and images until they are actually needed.
