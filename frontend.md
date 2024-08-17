## React Assignment

1. How can you implement shared functionality across a component tree?
A. To share functionality across a component tree in React, the Context API is a commonly used solution. By creating a context with React.createContext(), you can provide a global state or functionality through a Provider, which then makes it accessible to any component within its subtree. This approach avoids the need for prop drilling, where you pass props through multiple layers of components. The Higher-Order Components (HOCs) pattern is another effective method. An HOC wraps a component to add shared functionality or logic, allowing you to enhance the original component with additional props or behavior. Lastly, Render Props offer a way to share code by passing a function as a prop to a component, which then uses this function to determine how to render its content based on shared logic.



2. Why is the `useState` hook appropriate for handling state in a complex component?
A. The useState hook is particularly well-suited for managing state within a complex component due to its ability to encapsulate state locally within the component. This encapsulation keeps the state management straightforward and modular, avoiding the complexities of lifting state up or prop drilling. With useState, each component can maintain its own state, which simplifies the component’s internal logic and improves readability. Additionally, useState supports lazy initialization and functional updates, allowing for efficient state handling even with complex state logic. It integrates seamlessly with other hooks like useEffect, making it a powerful tool for managing state and side effects in functional components, ensuring both performance and code organization are optimized.




3. Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png)
