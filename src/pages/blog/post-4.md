---
title: "Getting Started with React"
cover: "/src/content/blog/post-4/cover.jpg"
description: "A Beginner's Guide to JSX, Components, and Props"
tags: ["ReactJS", "WebDevelopment", "BeginnerGuide"]
date: 2025-01-24

layout: "/src/layouts/Blog.astro"
---

React is a popular JavaScript library for building interactive UIs. If you're new to React, it can seem complicated at first, but once you understand the basics—JSX, components, and props—it all becomes much clearer.

## **What is JSX?**

JSX (JavaScript XML) allows you to write HTML-like code within JavaScript. React uses JSX to describe the UI.

Example:

```jsx
const element = <h1>Hello, world!</h1>;
```

## **Why JSX?**

- Easier to write and read.
- Combines HTML and JavaScript.
- Safer than traditional HTML (prevents XSS).

> **Note:** JSX needs to be compiled, which is handled by tools like `Create React App`.

## **Components: The Building Blocks of React**

In React, everything is a **component**—a function or class that returns JSX. Components help you break down your UI into smaller, reusable pieces.

Example of a Functional Component:

```jsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}
```

## **Why Use Components?**

- **Reusability:** Use the same component in multiple places.
- **Maintainability:** Smaller, focused components are easier to maintain.

## **Props: Passing Data to Components**

**Props** allow you to pass data into components, making them dynamic and reusable.

Example:

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Alice" />;
}
```

## **Why Use Props?**

- **Customizability:** Pass different data to components.
- **Data Flow:** Clearly defines how data flows through your app.

## **Putting It All Together**

Here’s how JSX, components, and props work together in a simple React app:

```jsx
function Welcome(props) {
  return <h1>Welcome to {props.city}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome city="Paris" />
      <Welcome city="New York" />
      <Welcome city="Tokyo" />
    </div>
  );
}
```

## **Conclusion**

JSX, components, and props are the building blocks of React. Understanding these concepts will help you create dynamic, reusable components and build better UIs. Once you're comfortable with these basics, you can dive into more advanced features of React.
