---
title: "Getting Started with ReactJS"
cover: "/src/content/blog/post-4/cover.jpg"
description: "A Beginner's Guide to ReactJS Basics"
tags: ["React", "WebDevelopment", "BeginnerGuide"]
date: 2025-01-24

layout: "/src/layouts/BlogPost.astro"
---

React is a popular JavaScript library for building user interfaces, especially for single-page applications. It allows developers to create dynamic, interactive UIs by breaking them down into reusable components. In this post, we’ll explore the core concepts of ReactJS, including components, state management, and event handling.

## **What is React?**

React is a JavaScript library developed by Facebook that helps build modern, dynamic user interfaces. It uses components, which are small, reusable pieces of code that define how a UI should look and behave. React efficiently updates the UI when data changes.

**Basic React Example:**

```jsx
import React from "react";

function Welcome() {
  return <h1>Welcome to My React App!</h1>;
}

export default Welcome;
```

In this example, we define a simple functional component called `Welcome`. This component displays a greeting message when rendered.

## **React Components and JSX**

**What Are Components?**

Components are the building blocks of a React application. They can be either **functional** or **class-based**. In modern React, functional components are more common due to the introduction of Hooks, which allow you to manage state and side effects inside functions.

**What is JSX?**

JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code inside JavaScript. It’s easier to work with and express your UI, and it gets compiled into JavaScript behind the scenes.

**Example:**

```jsx
import React from "react";

function Welcome() {
  return <h1>Hello, Welcome to React!</h1>;
}

export default Welcome;
```

Here, we define the component `Welcome`, which returns a simple `h1` tag. Even though we write `h1` in HTML-like syntax, React compiles it to `React.createElement`.

## **React State: Managing Data**

In React, **state** is used to store data that changes over time. State allows a component to "remember" information and update itself when that data changes.

React provides the `useState` Hook to add state to functional components.

**Example: Counter with State**

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
```

**Key Concepts:**

- `useState(0)`: Initializes the state variable `count` to `0`.
- `setCount(count + 1)`: Updates the `count` state when the button is clicked. React automatically re-renders the component with the new state value.
- The component updates the UI whenever the state changes.

## **Handling Events in React**

React allows you to handle user events like clicks, form submissions, and key presses. Event handlers are written in **camelCase** syntax (e.g., `onClick`, `onChange`), and are typically defined as functions.

**Example: Button Click Event**

```jsx
import React, { useState } from "react";

function ClickButton() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Button was clicked!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      <p>{message}</p>
    </div>
  );
}

export default ClickButton;
```

**Key Concepts:**

- The `handleClick` function is triggered when the button is clicked.
- `onClick={handleClick}` attaches the event handler to the button’s click event.
- The message updates when the state changes, and the component re-renders with the new message.

## **Building Your First React App**

Now that we understand the basics of React components, state, and events, let’s combine everything into a simple React app.

**App.js:**

```jsx
import React from "react";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ClickButton from "./ClickButton";

function App() {
  return (
    <div className="App">
      <Welcome />
      <Counter />
      <ClickButton />
    </div>
  );
}

export default App;
```

In this example:

- The `Welcome` component displays a greeting message.
- The `Counter` component displays a counter with a button to increment the count.
- The `ClickButton` component displays a button that shows a message when clicked.

## **Conclusion**

React is a powerful JavaScript library for building dynamic and interactive web applications. In this post, we’ve learned the basics of React, including:

- **Components**: Reusable building blocks of the UI.
- **JSX**: A syntax extension that allows you to write HTML-like code in JavaScript.
- **State**: Managing data within components that affects the UI.
- **Event Handling**: Responding to user actions like clicks.

By mastering these fundamental concepts, you’re well on your way to building dynamic React applications. As you continue exploring React, you can dive deeper into more advanced topics like **React Hooks**, **props**, **routing**, and **context**. Happy coding!
