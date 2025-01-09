---
title: "Theme Switcher for ReactJS"
cover: "/src/content/blog/post-5/cover.png"
description: "Handle themes in React using the useContext API & Local Storage"
tags: ["reactjs", "dark-theme", "web"]
date: 2025-02-31

layout: "/src/layouts/Blog.astro"
---

Creating a theme switcher for your ReactJS app can significantly improve the user experience, allowing users to toggle between light and dark modes. In this guide, we’ll walk through how to implement a theme switcher in React using the `useContext` API and `localStorage`.

## **Setting Up the Theme Context**

First, we create a context to manage the app's theme. The `ThemeProvider` component wraps the entire app, making the theme state globally accessible across all components.

```jsx
import { createContext, useContext, useState, useCallback } from "react";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const ThemeContext = createContext({
  theme: THEME.LIGHT,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : THEME.LIGHT;

  const [theme, setTheme] = useState(storedTheme);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
```

In the `ThemeContext.jsx` file, we initialize the context with a default theme of `LIGHT` and a placeholder for the `toggleTheme` function. The current theme is managed using React’s `useState` hook, and we check `localStorage` on the first load to see if the user has previously selected a theme. The `toggleTheme` function allows us to easily switch between the `LIGHT` and `DARK` themes, updating the value in `localStorage` to persist the user's theme choice across sessions.

## **Using the Theme in the App**

In the `App.jsx` component, we render the current theme and provide a button to toggle between light and dark modes. By utilizing the `useTheme` hook, we can access both the current theme and the `toggleTheme` function from the context.

```jsx
import { useTheme } from "./context/ThemeContext";

import "./App.css";
import {
  BiSolidToggleLeft as Light,
  BiSolidToggleRight as Dark,
} from "react-icons/bi";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  const handleTheme = () => {
    toggleTheme();
  };

  return (
    <div className={`App ${theme}`}>
      <h1>{theme}</h1>
      <button onClick={handleTheme} aria-label="Toggle theme">
        {theme === "light" ? <Light /> : <Dark />}
      </button>
    </div>
  );
}
```

The `App.jsx` component now displays the current theme and includes a button that toggles between light and dark modes. The button uses icons from `react-icons` to visually represent the theme change.

## **Styling the Themes with CSS Variables**

To manage the styling for both themes, we use CSS custom properties (variables). These variables store the color values for both the `light` and `dark` themes, which we can easily toggle by applying the appropriate class to the root element.

```css
.light {
  --background: #fff;
  --text: #111;
}

.dark {
  --background: #111;
  --text: #fff;
}

.App {
  display: grid;
  place-content: center;

  height: 100dvh;

  color: var(--text);
  background-color: var(--background);
  transition: background-color 500ms ease-in-out, color 500ms ease-in-out;

  button {
    svg {
      color: var(--text);
    }
  }
}
```

In the CSS file, we define custom properties for the `background` and `text` colors for both themes (`light` and `dark`). The `.App` class applies these variables to manage the theme's styling, and we add smooth transitions for background and text colors so the theme switch feels smooth and visually pleasant.

## **Rendering the App**

Finally, in `index.js`, we render the `App` component wrapped inside the `ThemeProvider`. This ensures that the theme state is available throughout the entire application.

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./reset.css";

import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
```

In the `index.js` file, we use `createRoot` from `react-dom/client` to render the app. By wrapping the `App` component in the `ThemeProvider`, the theme context is made available to all components inside the app.

## **Conclusion**

With just a few lines of code, we’ve created a simple yet effective theme switcher in React. By utilizing the `useContext` API, `localStorage`, and CSS variables, we can easily toggle between light and dark modes. The addition of smooth transitions enhances the user experience, making the app feel more polished and dynamic.

Now you can go ahead and implement this theme switcher in your own React projects to give users more control over their viewing experience!
