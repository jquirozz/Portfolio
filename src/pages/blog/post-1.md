---
title: "Getting Started with HTML"
cover: "/src/content/blog/post-1/cover.jpg"
description: "A Beginner's Guide to HTML Basics"
tags: ["HTML", "WebDevelopment", "BeginnerGuide"]
date: 2025-01-10

layout: "/src/layouts/BlogPost.astro"
---

HTML [ HyperText Markup Language ] is the standard language for creating web pages. It’s the foundation of every website and gives structure to your content. Let’s dive into the basics of HTML and see how it works.

## **What is HTML?**

HTML is used to define the structure of web pages using a system of elements. These elements tell the browser how to display text, images, and other content on the page. HTML documents consist of tags, which define different types of content.

Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Welcome to My Website!</h1>
    <p>This is my first webpage.</p>
  </body>
</html>
```

## **HTML Structure**

A basic HTML document consists of the following parts:

- `<!DOCTYPE html>`: Declares the document type.
- `<html>`: The root element that contains everything.
- `<head>`: Contains metadata like title, links to CSS, and character encoding.
- `<body>`: Contains the visible content on the page (text, images, links, etc.).

## **Why Use HTML?**

- **Structure:** Organizes your web content.
- **Simplicity:** Easy to learn and widely used.
- **Foundation:** Forms the backbone of all websites.

## **HTML Elements**

Elements are the building blocks of HTML. They are represented by **tags**. A tag is usually written as `<tagname>...</tagname>` and tells the browser how to display the content within it.

Example of a heading and paragraph:

```html
<h1>Main Title</h1>
<p>This is a paragraph of text.</p>
```

## **Common HTML Tags**

- Headings: `<h1>` to `<h6>` (h1 is the largest, h6 is the smallest).
- Paragraph: `<p>`
- Link: `<a href="url">`
- Image: `<img src="image.jpg" alt="Description">`

## **Attributes: Customizing Elements**

HTML elements can have attributes that provide additional information about them. For example, links and images have `href` and `src` attributes, respectively.

Attributes are written inside the opening tag and are usually in the form `name="value"`.

Example:

```html
<a href="https://example.com">Visit Example</a>
```

## **Building Your First HTML Page**

Let’s put it all together and create a simple HTML page

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Simple Page</title>
  </head>
  <body>
    <h1>Welcome to My Simple Page!</h1>
    <p>This is a paragraph with a <a href="https://example.com">link</a>.</p>
    <img src="image.jpg" alt="A cool image" />
  </body>
</html>
```

## **Conclusion**

HTML is the foundation of web development. With just a few basic tags, you can structure a webpage and add text, images, links, and more. Understanding HTML is the first step toward becoming a web developer, and once you’re comfortable with it, you can explore more advanced topics like CSS and JavaScript.
