# question: what are the differences between client-side and server-side rendering?

answer:

- client-side rendering (csr):

  - the browser downloads a minimal html page and javascript, which then generates the content.
  - this approach allows for dynamic interactions after the initial load but may lead to slower initial rendering and can impact seo since search engines may not index javascript-rendered content.
  - example:
    - in a csr app, the initial html might look like this:
    ```code
     <div id="root"></div>
     <script src="app.js"></script>
     <!-- javascript file renders content -->
    ```
  - server-side rendering (ssr):

    - the server generates the full html for a page and sends it to the client.
    - this improves seo and load times for initial requests, as the content is fully rendered before reaching the browser.
    - example:
      - in an ssr app, the server sends:
      ```code
       <!DOCTYPE html>
       <html>
       <head>
       <title>My SSR App</title>
       </head>
       <body>
        <div id="root">
          <h1>hello, world!</h1>
        </div>
      </body>
      </html>
      ```

    ```


    ```
