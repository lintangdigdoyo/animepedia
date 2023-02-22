# About AnimePedia

AnimePedia is a web app that displays a list of anime and provides a convenient platform for users to view, search and see the details of each anime in the list. The main aim of the design and interaction is to help users easily navigate and use the app, and also provide a familiar experience by providing a UI that looks like most popular streaming platforms. By doing so, users will be able to easily navigate and access the content they want without having to spend time adjusting to a new interface.

## Search by categories
Besides searching all of the anime in the list, AnimePedia allows users to search anime based on the category (Tv series), providing a more efficient way of finding the anime that fits their preferences.

## Slider Pagination
To improve the user experience this app implements slider pagination, which provides a visually appealing way for users to navigate through the list of anime. This slider pagination only fetches the required data, making the app fast and efficient.

## Caching
This app takes advantage of the React Query's caching mechanism. It reduces the need for subsequent requests to the server for the same data. This results in a faster and more efficient app, as well as an improved user experience as the app does not need to wait for data to be fetched from the server each time the user navigates.

The use of React Query caching also means that when a user searches for an anime, the app will not make a request for the same input again. Instead, it will retrieve the data from the cache.

## Server side rendering combined with React Query
The server-side rendering is combined with React Query to fetch/prefetch the data in the server and then stored it in the cache, reducing the need for additional requests by the client. The result is a fast user experience, especially on the initial load, as the client does not need to make additional requests for the data and it will also improve SEO.

## Resposive design
The responsive design of this app is providing a seamless experience for users on all devices. This means that the app will adjust its layout and display accordingly to fit the screen size and resolution of the device being used, ensuring that the user has a consistent and optimal experience no matter what device they are using.

## Styling with Sass, BEM standardization, and loose coupling for better DX
To help create a scalable and maintainable codebase, this app uses Sass, BEM standardization, and loose coupling.

- By using Sass, developers have access to a wide range of powerful features, such as variables, mixins, and functions, which make it easier to create and maintain the styles.
- BEM (Block Element Modifier) standardization provides a clear and predictable way, consistent and organized approach to structure CSS classes, making it easier to create and manage the styles.
- The loose coupling of the styling further helps to improve the developer experience, as it allows for greater flexibility and reduces the risk of styles affecting other parts of the app.