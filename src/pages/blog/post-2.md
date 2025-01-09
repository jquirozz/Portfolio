---
title: "Getting Started with CSS"
cover: "/src/content/blog/post-2/cover.jpg"
description: "A Beginner's Guide to CSS Basics"
tags: ["CSS", "WebDevelopment", "BeginnerGuide"]
date: 2025-01-10

layout: "/src/layouts/Blog.astro"
---

CSS (Cascading Style Sheets) is the language used to style and layout web pages. While HTML gives structure to a webpage, CSS controls its appearance—everything from colors and fonts to positioning and responsiveness. Let’s dive into the basics of CSS and understand how it works.

## What is CSS?

CSS is a stylesheet language that describes the presentation of a document written in HTML or XML. It allows web developers to apply styles such as colors, spacing, fonts, and layout to HTML elements.

Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Stylish Webpage</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Welcome to My Stylish Website!</h1>
    <p>This is a webpage with some styling applied using CSS.</p>
  </body>
</html>
```

In the example above, we link a separate CSS file (`styles.css`) to the HTML document to style the page.

## CSS Syntax

CSS is made up of **selectors** and **declarations**. The syntax looks like this:

```css
selector {
  property: value;
}
```

- **Selector**: This targets the HTML element(s) to which you want to apply styles.
- **Property**: This specifies the style you want to change (e.g., `color`, `font-size`).
- **Value**: This defines the value for the property (e.g., `red`, `16px`).

Example:

```css
h1 {
  color: blue;
  font-size: 36px;
}
```

This will turn all `<h1>` elements blue and set their font size to 36 pixels.

## Where to Write CSS?

CSS can be applied in three ways:

1. **Inline CSS**: Directly in the HTML element using the `style` attribute.
   ```html
   <h1 style="color: blue; font-size: 36px;">Hello World!</h1>
   ```
2. **Internal CSS**: Inside a `<style>` tag within the `<head>` section of the HTML document.

   ```html
   <style>
     h1 {
       color: blue;
       font-size: 36px;
     }
   </style>
   ```

3. **External CSS**: In a separate `.css` file, which is linked to the HTML document using the `<link>` tag.
   ```html
   <link rel="stylesheet" href="styles.css" />
   ```

## CSS Selectors

Selectors allow you to target specific elements on your webpage. Here are some common types:

- **Element Selector**: Targets all elements of a specific type.

  ```css
  p {
    color: green;
  }
  ```

- **Class Selector**: Targets all elements with a specific class.

  ```css
  .intro {
    font-size: 18px;
  }
  ```

- **ID Selector**: Targets a specific element with a unique `id`.

  ```css
  #main-header {
    text-align: center;
  }
  ```

- **Universal Selector**: Selects all elements on the page.
  ```css
  * {
    margin: 0;
    padding: 0;
  }
  ```

## Building Your First Stylish HTML Page

Now that we understand the basics of CSS, let’s combine it with HTML to create a simple webpage.

HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Stylish Page</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Welcome to My Stylish Page!</h1>
    <p class="intro">This is a paragraph with some basic styling.</p>
    <div id="content-box">
      <p>Content inside a styled box.</p>
    </div>
  </body>
</html>
```

CSS:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

h1 {
  color: darkblue;
  text-align: center;
}

.intro {
  font-size: 18px;
  color: #333;
}

#content-box {
  background-color: white;
  border: 2px solid #ccc;
  padding: 20px;
  margin: 20px auto;
  width: 80%;
}
```

In this example, we’ve applied styling to the body, headings, and paragraphs. We also styled a `<div>` element using an ID selector to create a content box with padding, margin, and borders.

## Conclusion

CSS is a powerful tool for web design and layout. It gives you full control over how your HTML elements appear, from fonts and colors to positioning and animations. Once you have mastered the basics of CSS, you can move on to more advanced topics like responsive design, animations, and frameworks like Bootstrap. Understanding CSS is essential to creating beautiful and well-structured websites.
